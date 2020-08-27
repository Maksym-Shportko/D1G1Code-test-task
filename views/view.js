import {controller} from '../controllers/controller.js'
import { state } from '../state.js'
// Numbers of shapes block
let decrementBtn = document.getElementById('decrementShape')
let incrementBtn = document.getElementById('incrementShape')
let shapesPerSecond = document.getElementById('result-number')

decrementBtn.addEventListener('click',controller.createNewShape)

// Gravity power block 
let decrementGravity = document.getElementById('decrementGravity')
let incrementGravity = document.getElementById('incrementGravity')
let gravityPower = document.getElementById('gravity-power')

decrementGravity.addEventListener('click',controller.decrementGravityPower)
incrementGravity.addEventListener('click',controller.incrementGravityPower)

const rectangleArea = document.getElementById('rectangleArea');
rectangleArea.addEventListener('click',controller.createNewShape)










