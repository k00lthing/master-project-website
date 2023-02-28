import '../style.scss'
import { createHeader } from '../components/header.js'
import { createNav } from '../components/navigation.js'
import { createOCR } from '../components/ocr.js'

createHeader(document.querySelector('body'))
createOCR(document.querySelector('body'))
createNav(document.querySelector('body'))