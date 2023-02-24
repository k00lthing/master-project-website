export function createNav(element) {
  
    element.insertAdjacentHTML('beforeend',
    `
    <nav>
        <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/ocr">OCR</a></li>
        <li><a href="/resolution">Resolution</a></li>
        <li><a href="/disruption">Disruption</a></li>
        <li><a href="/disorientation">Disorientation</a></li>
        </ul>
    </nav>
    `)
}
