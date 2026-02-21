let matrix = [
   [0, 0, 1, 0, 0],
   [1, 0, 0, 0, 0],
   [0, 1, 0, 0, 0],
   [0, 0, 1, 0, 0],
   [1, 1, 0, 0, 0],
   [1, 1, 0, 0, 0],
   [1, 1, 0, 0, 0]
];
let side = 120;
function setup() {
   frameRate(5);
   createCanvas(matrix[0].length * side, matrix.length * side);
   background('#acacac');
   
   class Grass{
    constructor(x, y, index) {
       this.x = x;
       this.y = y;
       this.index = index;
       this.multiply = 0;
    }
}

let gr = new Grass(1,2,1);
let emptyCells = gr.chooseCell(0);
console.log(emptyCells)
}

function draw() {
   for (let y = 0; y < matrix.length; y++) {
       for (let x = 0; x < matrix[y].length; x++) {
           if (matrix[y][x] == 1) {
               fill("green");
           }
           else if (matrix[y][x] == 0) {
              fill("#acacac");
           }	    
           rect(x * side, y * side, side, side);
    
    fill("blue")
    text(x+" "+y, x*side+side/2,y*side+side/2)
    
       }
   }
}



this.directions = [
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
    ];
var matrix = [
   [0, 0, 1, 0, 0],
   [1, 0, 0, 0, 0],
   [0, 1, 0, 0, 0],
   [0, 0, 1, 0, 0],
   [1, 1, 0, 0, 0],
   [1, 1, 0, 0, 0],
   [1, 1, 0, 0, 0]
];

chooseCell(character) {
var found = [];
for (var i in this.directions) {
var x = this.directions[i] [0];
var y = this.directions [i] [1];
if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
if (matrix[y][x] == character) {
found.push(this.directions[i]);
}
}
}
return found;
}