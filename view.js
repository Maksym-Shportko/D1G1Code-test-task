export const shapesView = {

}
import {shapesController} from './controller.js'
const appController = new shapesController()

// Numbers of shapes block
let decrementBtn = document.getElementById('decrementShape')
let incrementBtn = document.getElementById('incrementShape')
let shapesPerSecond = document.getElementById('result-number')

decrementBtn.addEventListener('click',function(){
	appController.decrementShapes()
	shapesPerSecond.innerText = appController.shapesPerSecond-1


})
incrementBtn.addEventListener('click',function(){
	appController.incrementShapes()
	shapesPerSecond.innerText = appController.shapesPerSecond-1
	

})

// Gravity power block 
let decrementGravity = document.getElementById('decrementGravity')
let incrementGravity = document.getElementById('incrementGravity')
let gravityPower = document.getElementById('gravity-power')

decrementGravity.addEventListener('click',function(){
	appController.decrementGravityPower()
	gravityPower.innerText = appController.gravityPower

})
incrementGravity.addEventListener('click',function(){
	appController.incrementGravityPower()
	gravityPower.innerText = appController.gravityPower

})

// delete rectangle

// appController.rectangle.on('click',function(){
// 	appController.rectangle.destroy()
// })

rectangleArea.addEventListener('click',appController.createNewShape.bind(appController))














// cat png 

// let texture = PIXI.utils.TextureCache["images/cat.png"];
// let sprite = new PIXI.Sprite(texture)
// PIXI.loader
// 	.add("images/cat.png")
// 	.load(setup)

// 	function setup() {
// 		let cat = new PIXI.Sprite(
// 			PIXI.loader.resources["images/cat.png"].texture
// 		);
// 	app.stage.addChild(cat)

// 			cat.x = 96
// 			cat.y = 96

// 			cat.width = 120
// 			cat.height= 120
		 
// 			cat.rotation = 0.2
			
// 			function gameLoop(){
// 				requestAnimationFrame(gameLoop)
// 				cat.x +=1
// 			}
// 			gameLoop()
// 	}
