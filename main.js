import './style.scss'
import { createHeader } from './header.js'
import { createNav } from './navigation.js'

createHeader(document.querySelector('body')) 
createNav(document.querySelector('body'))
