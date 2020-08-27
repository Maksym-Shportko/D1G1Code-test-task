import { state } from "../state.js"

export class Shape{
	constructor(color,form,type){
		this.colors = color
		this.form = form
		this.type = type
	}
};

const random = new Shape({
	color:state.randomColor, //random color from controller
	form:'',	// random form from controller
	type:''	// type ?
})













































// export class shapesController{

// 		shapesPerSecond=1
// 		gravityPower=0
// 		randomNumber=0
// 		decrementShapes(){
// 			return this.shapesPerSecond --
// 		}
// 		incrementShapes(){
// 			return this.shapesPerSecond ++
// 		}
// 		decrementGravityPower(){
// 			return this.gravityPower --
// 		}
// 		incrementGravityPower(){
// 			return this.gravityPower ++
// 		}
// 		 rectangle = new PIXI.Graphics()
		

// 		createNewShape(e){
// 			const rectangleArea = document.getElementById('rectangleArea');
// 			const app = new PIXI.Application({
// 				view:rectangleArea,
// 				height:window.innerHeight,
// 				width:window.innerWidth
// 			});
// 			// app.renderer.backgroundColor = 0x061639
// 			this.rectangle.lineStyle(4,0xFF6347)
// 			this.rectangle.beginFill(0xffffff)
// 			this.rectangle.drawRect(0,0,64,64)
// 			this.rectangle.x = e.x
// 			this.rectangle.y = e.y
// 			this.rectangle.endFill()
// 			this.rectangle.interactive = true

// 			app.stage.addChild(this.rectangle)
// 			let mooveShape = () =>{
// 						requestAnimationFrame(mooveShape)
// 				 this.rectangle.y +=this.gravityPower
// 			}
// 			mooveShape()
// 		}
// 		colors=[
// 			'0xffffff','0xFFA07A','0xFF69B4','0x006400','0x00FFFF'
// 		]
//  };
