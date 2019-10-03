// Blocks

// Setup Canvas & Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let block1 = createBlock(100,200,100,10,'orange')

let block2 = createBlock(300,300,75,10,'purple')

let block3 = createBlock(500,500,120,10,'green')



// Animation Loop
requestAnimationFrame(animate);

function animate() {

    // UPDATE
    // Update block 1 - move and bounce horizontally
    updateRectangle(block1);
    updateRectangle(block2);
    updateRectangle(block3);

    
    // DRAW
    
    // Clear Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw block 1
    ctx.fillStyle = block1.color;
    ctx.fillRect(block1.x, block1.y, block1.w, block1.h);

    // Draw block 2
    ctx.fillStyle = block2.color;
    ctx.fillRect(block2.x, block2.y, block2.w, block2.h);

    // Draw block 3
    ctx.fillStyle = block3.color;
    ctx.fillRect(block3.x, block3.y, block3.w, block3.h);

    // Request Another Animation Frame
    requestAnimationFrame(animate);
}

// Helper Functions
function randomDec(low, high) {
    return Math.random() * (high - low) + low;
}

function createBlock(x1,y1,w1,h1,c){
    return{
    x: x1,
    y: y1,
    w:w1,
    h:h1,
    speed: randomDec(-5,5),
    color: c,
    }
}

function updateRectangle(aRectangle){
    aRectangle.x += aRectangle.speed;
    if (aRectangle.x + aRectangle.w > cnv.width || aRectangle.x < 0) {
        aRectangle.speed = -aRectangle.speed;
    }
}
