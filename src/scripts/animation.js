const canvas = document.getElementById('game-canvas'); 
const ctx = canvas.getContext('2d'); 
const CANVAS_WIDTH = canvas.width = 500; 
const CANVAS_HEIGHT = canvas.height = 500; 

const brewImage = new Image(); 
brewImage.src = '/src/sprites/shadow_dog.png'; 

export function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(100, 50, 100, 100); 
    ctx.drawImage(brewImage, 0, 0); 
    requestAnimationFrame(animate); 
}

animate(); 






