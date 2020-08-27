import { state } from "../state.js"

export const controller = {
	
	decrementShapes(){
		return this.shapesPerSecond --
	},
	incrementShapes(){
		return this.shapesPerSecond ++
	},
	decrementGravityPower(){
		return state.gravityPower --
	},
	incrementGravityPower(){
		return state.gravityPower ++
	},
	deleteShape(){

	},

	changeSameShapesColor(){

	},
	createNewShape(e){
		const rectangleArea = document.getElementById('rectangleArea');
		const app = new PIXI.Application({
			view:rectangleArea,
			height:window.innerHeight,
			width:window.innerWidth
		});
		let randomShape = new PIXI.Graphics()
		randomShape.beginFill(state.randomColor)
		randomShape.drawPolygon(state.randomForm)
		randomShape.x = e.screenX 
		randomShape.y = e.screenY
		randomShape.endFill()
		randomShape.interactive = true

		app.stage.addChild(randomShape)

		let	getRandomColor = () =>{
			const colors = state.colors
			 let randomColor = Math.floor(Math.random()*colors.length)
			state.randomColor = colors[randomColor] 
			 return colors[randomColor]
		}
		getRandomColor()
		
		let createRandomShape=()=>{
			const forms = state.forms
			let randomForm = Math.floor(Math.random()*forms.length)
			 state.randomForm = forms[randomForm] 
			return forms[randomForm]
		}
		createRandomShape()

		let mooveShape = () =>{
			requestAnimationFrame(mooveShape)
			randomShape.y += state.gravityPower
			}
			mooveShape()
	}

}