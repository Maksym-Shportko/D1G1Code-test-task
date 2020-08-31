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
	
	deleteShape(e){
		console.log('test')
		return state.randomShape.destroy()
	},

	changeSameShapesColor(){
	},
	createApp(){
		const rectangleArea = document.getElementById('rectangleArea');

		this.app = new PIXI.Application({
			view:rectangleArea,
			height:window.innerHeight,
			width:window.innerWidth
		});
	},
	createNewShape(e){
		let randomShape = new PIXI.Graphics()
		randomShape.beginFill(state.randomColor)
		randomShape.drawPolygon(state.randomForm)
		randomShape.x =  e.x
		randomShape.y =  e.y
		randomShape.endFill()
		randomShape.interactive = true

		this.app.stage.addChild(randomShape)

		this.getRandomColor()
		this.createRandomShape()

		let moveShape = () =>{
			requestAnimationFrame(moveShape)
			randomShape.y += state.gravityPower
			}
			moveShape()
	},
	getRandomColor(){
		const colors = state.colors
		 let randomColor = Math.floor(Math.random()*colors.length)
		state.randomColor = colors[randomColor] 
		 return colors[randomColor]
	},
	createRandomShape(){
		const forms = state.forms
		let randomForm = Math.floor(Math.random()*forms.length)
		 state.randomForm = forms[randomForm] 
		return forms[randomForm]
	},
	getRandomPosition(min,max){
		let position = min + Math.random() * (max-min)
		state.randomPosition = Math.floor(position) 
		return Math.floor(position)
	}
	

}