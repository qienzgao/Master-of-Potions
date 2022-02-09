// const canvas = document.getElementById('game-canvas'); 
// const ctx = canvas.getContext('2d'); 
// const CANVAS_WIDTH = canvas.width = 500; 
// const CANVAS_HEIGHT = canvas.height = 500; 


class Canvas {
    constructor() {
        this.canvas = document.getElementById('game-canvas'); 
        this.ctx = this.canvas.getContext('2d'); 
        this.CANVAS_WIDTH = this.canvas.width = 500; 
        this.CANVAS_HEIGHT = this.canvas.height = 500;  
    }
    
    write(output) {
        this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT); 
        this.ctx.font = '30px serif';
        this.ctx.textAlign = 'start';
        this.ctx.fillText(output, 250, 250);
    }
    
}

export default Canvas; 







