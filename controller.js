export class shapesController{

		shapesPerSecond=1
		gravityPower=0

		decrementShapes(){
			return this.shapesPerSecond --
		}
		incrementShapes(){
			return this.shapesPerSecond ++
		}
		decrementGravityPower(){
			return this.gravityPower --
		}
		incrementGravityPower(){
			return this.gravityPower ++
		}
		 rectangle = new PIXI.Graphics()
		

		createNewShape(e){
			const rectangleArea = document.getElementById('rectangleArea');
			const app = new PIXI.Application({
				view:rectangleArea,
				height:window.innerHeight,
				width:window.innerWidth
			});
			// app.renderer.backgroundColor = 0x061639
			this.rectangle.lineStyle(4,0xFF6347)
			this.rectangle.beginFill(0xffffff)
			this.rectangle.drawRect(0,0,64,64)
			this.rectangle.x = e.x
			this.rectangle.y = e.y
			this.rectangle.endFill()
			this.rectangle.interactive = true

			app.stage.addChild(this.rectangle)
			let mooveShape = () =>{
						requestAnimationFrame(mooveShape)
				 this.rectangle.y +=this.gravityPower
			}
			mooveShape()
			function randomInteger(min, max) {
				let rand = min + Math.random() * (max - min);
				return Math.round(rand);
			}
			
			alert( randomInteger(3, 6) );
		}

 };

 class RandomShape{
	 constructor(options){
		 this.color = options.color,
		 this.form = options.form,
		 this.position = options.position
	 }

	 createRandomShape(){
		 
	 }
 }
