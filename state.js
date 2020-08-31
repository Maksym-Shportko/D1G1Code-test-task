export const state = {
	shapesPerSecond: 1,
	gravityPower: 1,
	colors: ['0xDC143C','0x98FB98','0x3CB371','0x66CDAA','0x00FFFF','0xFFFF00','0x8B008B','0xFAF0E6'],
	randomColor:'',
	randomForm:'',
	forms:[[0,0,0,100,100,100,100,0],[50,0,0,100,100,100],[50,0,100,38,82,100,18,100,0,38],[25,0,75,0,100,50,75,100,25,100,0,50]],
	randomShape:null ,
	randomPosition:0
}

// rectangle 0,0,0,100,100,100,100,0
// triengle  50,0,0,100,100,100
// pentagon 50,0,100,38,82,100,18,100,0,38
// hextagon 25,0,75,0,100,50,75,100,25,100,0,50