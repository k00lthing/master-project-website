import Tesseract from 'tesseract.js'

export function createOCR(element) {

    element.insertAdjacentHTML('beforeend',
        `
        <p>Note: The image format supported by Tesseract are jpg, png, bmp and pbm. </p>
    <select id="lang">
        <option value='eng' selected> English </option>
        <option value='deu'> German </option>
    </select>
  <input type="file" id="file-img" accept="image/*" />
  <img id="selected-image" src="" />
  <div id="log">
    <button id="start-ocr">Recognize text</button>
  </div>
    `)

    const button = document.querySelector("#start-ocr")
    const langSelector = document.querySelector('#lang')
    const imgSelector = document.querySelector('#file-img')
    const imgPreview = document.querySelector('#selected-image')

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
                logger: m => console.log(m)
            }
        )
            .catch(err => {
                console.error(err)
            })
            .then(result => {
                console.log(result)
            })

    })

}




