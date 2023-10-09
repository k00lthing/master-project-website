import Tesseract from 'tesseract.js'
/**
 * Create  testing environment with tesseract.js, 
 * upload image file to recognize the text on it. 
 *
 * @param element 
 */
export function createOCR(element) {

    element.insertAdjacentHTML('afterbegin',
        `
        <div class="tesseract-input">
            <h2>OCR Testing Environment</h2>
            <p>Select language and image with text to recognize.</p>
            <select id="lang">
                <option value='eng' selected> English </option>
                <option value='deu'> German </option>
            </select>
            <input type="file" id="file-img" accept="image/jpg, image/png, image/bmp, image/pbm" />
            <img id="selected-image" src="" />
            <button id="start-ocr">Recognize text</button>
            <button class="secondary" id="reset-ocr">Reset</button>
        </div>
        <div id="log" class="tesseract-results">
            <p class="progress"></p>
            <p class="status"></p>
        </div>
    `)

    const startButton = document.querySelector("#start-ocr")
    const resetButton = document.querySelector("#reset-ocr")
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

    startButton.addEventListener('click', (event) => {

        if (!image) return

        Tesseract.recognize(
            image, langSelector.value,
            {
                logger: m => {
                    progress.innerHTML = Math.round(m.progress * 100) + "%"
                    status.innerHTML = m.status
                }
            }
        )
            .catch(err => {
                console.error(err)
            })
            .then(result => {
                console.log(result)
                status.innerHTML = "Ready. " + `${result.data.words.length} word(s) and ${result.data.symbols.length} symbol(s) recognised.`
                logBox.insertAdjacentHTML('beforeend', `<div class="confidence"><h3>Overall confidence:</h3><p>${result.data.confidence} out of 100.</p></div>`)
                logBox.insertAdjacentHTML('beforeend', `<div class="result"><h3>Result:</h3><p>${result.data.text}</p></div>`)
            })

    })

    resetButton.addEventListener('click', (event) => {
        image = null
        imgPreview.src = ""
        progress.innerHTML = ""
        status.innerHTML = ""
        logBox.querySelectorAll('div').forEach(e => e.remove())

    })

}


