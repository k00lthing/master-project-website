import Tesseract from 'tesseract.js'
/**
 * Create  testing environment with tesseract.js, 
 * upload image file to recognize the text on it. 
 *
 * @param element 
 */
export function createOCR(element) {

    element.insertAdjacentHTML('beforeend',
        `
        <h2>Upload an image with text</h2>
        <div class="tesseract-input">
    <select id="lang">
        <option value='eng' selected> English </option>
        <option value='deu'> German </option>
    </select>
  <input type="file" id="file-img" accept="image/jpg, image/png, image/bmp, image/pbm" />
  <img id="selected-image" src="" />
  <button id="start-ocr">Recognize text</button>
  </div>

  <div id="log">
    <p class="progress"></p>
    <p class="status"></p>
  </div>
    `)

    const button = document.querySelector("#start-ocr")
    const langSelector = document.querySelector('#lang')
    const imgSelector = document.querySelector('#file-img')
    const imgPreview = document.querySelector('#selected-image')
    const logBox = document.querySelector('#log')
    const progress = logBox.querySelector('.progress')
    const status =  logBox.querySelector('.status')

    let image = null

    imgSelector.addEventListener("change", handleFiles, false)

    function handleFiles() {
        const fileList = this.files /* now you can work with the file list */
        image = fileList[0]
        const objectURL = window.URL.createObjectURL(fileList[0]) 
        imgPreview.src = objectURL

    }

    button.addEventListener('click', (event) => {

        Tesseract.recognize(
            image, langSelector.value,
            {
                logger: m => {
                    progress.innerHTML = m.progress * 100 + "%"
                    status.innerHTML = m.status
                }
            }
        )
            .catch(err => {
                console.error(err)
            })
            .then(result => {
                console.log(result)
                status.innerHTML = "Ready."
                logBox.insertAdjacentHTML('beforeend', `<p class="confidence">Confidence: ${result.data.confidence}</p>`)
                logBox.insertAdjacentHTML('beforeend', `<p class="result">Result: <br>${result.data.text}</p>`)

            })

    })

}




