// import button from "./scripts/background"
import Tool from "./scripts/tool"
import Ingredient from "./scripts/ingredient"
import Canvas from "./scripts/canvas"

let tool = new Tool(); 
let ingredient = new Ingredient(); 
let newCanvas = new Canvas
let potion = null; 
// const current_rotation = 0; 

//background rotation:
// document.querySelector("#sign1").addEventListener('click', function () {
//     current_rotation += 90;
//     document.querySelector("#sign1").style.transform = `rotate(' + current_rotation + 'deg)`;
// });

//ingredient-tool interaction:

document.getElementById('flower').addEventListener('click', ()=>{
    ingredient.setSelected('flower'); 
    newCanvas.write(ingredient.selected);  
})

document.getElementById('feather').addEventListener('click', ()=>{
    newCanvas.write(tool.selectedTool('feather', ingredient));
})

document.getElementById('heart').addEventListener('click', () => {
    ingredient.setSelected('heart');
    newCanvas.write(ingredient.selected); 
})

document.getElementById('knife').addEventListener('click', () => {
    newCanvas.write(tool.selectedTool('knife', ingredient));
})

document.getElementById('dark-room').addEventListener('click', () => {
    ingredient.setSelected('darkRoom');
    newCanvas.write(ingredient.selected); 
})

document.getElementById('laser-pointer').addEventListener('click', () => {
    newCanvas.write(tool.selectedTool('laserPointer', ingredient));
})

document.getElementById('dragon').addEventListener('click', () => {
    ingredient.setSelected('dragon');
    newCanvas.write(ingredient.selected); 
})

document.getElementById('dragon-fruit').addEventListener('click', () => {
    newCanvas.write(tool.selectedTool('dragonFruit', ingredient));
})

document.getElementById('nothings').addEventListener('click', () => {
    ingredient.setSelected('nothings');
    newCanvas.write(ingredient.selected); 
})

document.getElementById('sugar').addEventListener('click', () => {
    newCanvas.write(tool.selectedTool('sugar', ingredient));
})

document.getElementById('eyes').addEventListener('click', () => {
    ingredient.setSelected('eyes');
    newCanvas.write(ingredient.selected); 
})

document.getElementById('fanged-mouth').addEventListener('click', () => {
    newCanvas.write(tool.selectedTool('fangedMouth', ingredient));
})

document.getElementById('mask').addEventListener('click', () => {
    ingredient.setSelected('mask');
    newCanvas.write(ingredient.selected); 
})

document.getElementById('mini-heart').addEventListener('click', () => {
    newCanvas.write(tool.selectedTool('miniHeart', ingredient));
})

document.getElementById('locked-box').addEventListener('click', () => {
    ingredient.setSelected('lockedBox');
    newCanvas.write(ingredient.selected); 
})

document.getElementById('key').addEventListener('click', () => {
    newCanvas.write(tool.selectedTool('key', ingredient));
})
//manipulations:

document.getElementById('burn').addEventListener('click', ()=>{
    newCanvas.write(`This ingredient is burt!`)
    ingredient.selected = null; 
    tool.created = null; 
    ingredient.materials.pop(); 
    ingredient.materials.forEach(material=>{
        newCanvas.write(material); 
    }); 
})

document.getElementById('extract').addEventListener('click', () => {
    ingredient.addIngredient(tool.created); 
    newCanvas.write(ingredient.materials);
    ingredient.selected = null;
    tool.created = null; 
})

document.getElementById('brew').addEventListener('click', () => {
    potion = newCanvas.write(ingredient.brew()); 
    tool = new Tool();
    ingredient = new Ingredient(); 
})

document.getElementById('redo').addEventListener('click', () => {
    tool = new Tool();
    ingredient = new Ingredient(); 
    newCanvas.write('Your pot is empty now.')
})








