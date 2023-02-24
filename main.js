import './style.scss'
import { createHeader } from './components/header.js'
import { createNav } from './components/navigation.js'

createHeader(document.querySelector('body')) 
createNav(document.querySelector('body'))
