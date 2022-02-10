// const canvas = document.getElementById('game-canvas'); 
// const ctx = canvas.getContext('2d'); 
// const canvasWidth = canvas.width = 500; 
// const canvasHeight = canvas.height = 500; 


class Canvas {
    constructor() {
        this.canvas = document.getElementById('text-canvas'); 
        this.ctx = this.canvas.getContext('2d'); 
        this.canvasWidth = this.canvas.width = 900; 
        this.canvasHeight = this.canvas.height = 100;  
    }
    
    write(output) {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight); 
        this.ctx.font = '27px Apple Chancery, cursive';
        this.ctx.fillStyle = 'white'
        this.ctx.textAlign = 'center';
        this.ctx.fillText(output, 450, 60);
    }

    draw(){
        
    }
    
}
export default Canvas; 







