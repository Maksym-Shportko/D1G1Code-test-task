import {controller} from '../controllers/controller.js'
import { state } from '../state.js'
import { Shape, random} from '../classes/Shape.js'
// Numbers of shapes block
let decrementBtn = document.getElementById('decrementShape')
let incrementBtn = document.getElementById('incrementShape')
let shapesPerSecond = document.getElementById('result-number')


decrementBtn.addEventListener('click',()=>{
	console.log(state.randomColor)
	controller.getRandomColor()
	controller.createRandomShape()
	controller.getRandomPosition(10,1100)
  random.createNewShape()

})

// Gravity power block 
let decrementGravity = document.getElementById('decrementGravity')
let incrementGravity = document.getElementById('incrementGravity')
let gravityPower = document.getElementById('gravity-power')

decrementGravity.addEventListener('click',controller.decrementGravityPower)
incrementGravity.addEventListener('click',controller.incrementGravityPower)



const rectangleArea = document.getElementById('rectangleArea');
rectangleArea.addEventListener('click',controller.createNewShape.bind(controller))














