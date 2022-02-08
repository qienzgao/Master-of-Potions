// import button from "./scripts/background"
import Tool from "./scripts/tool"
import Ingredient from "./scripts/ingredient"

let tool = new Tool(); 
let ingredient = new Ingredient(); 
let potion = null; 

//ingredient-tool interaction:

document.getElementById('flower').addEventListener('click', ()=>{
    ingredient.setSelected('flower'); 
    console.log(ingredient.selected); 
})

document.getElementById('feather').addEventListener('click', ()=>{
    tool.selectedTool('feather', ingredient);
})

document.getElementById('heart').addEventListener('click', () => {
    ingredient.setSelected('heart');
    console.log(ingredient.selected);
})

document.getElementById('knife').addEventListener('click', () => {
    tool.selectedTool('knife', ingredient);
})

document.getElementById('dark-room').addEventListener('click', () => {
    ingredient.setSelected('darkRoom');
    console.log(ingredient.selected);
})

document.getElementById('laser-pointer').addEventListener('click', () => {
    tool.selectedTool('laserPointer', ingredient);
})

document.getElementById('dragon').addEventListener('click', () => {
    ingredient.setSelected('dragon');
    console.log(ingredient.selected);
})

document.getElementById('sugar').addEventListener('click', () => {
    tool.selectedTool('sugar', ingredient);
})

document.getElementById('nothings').addEventListener('click', () => {
    ingredient.setSelected('nothings');
    console.log(ingredient.selected);
})

document.getElementById('dragon-fruit').addEventListener('click', () => {
    tool.selectedTool('dragonFruit', ingredient);
})

document.getElementById('eyes').addEventListener('click', () => {
    ingredient.setSelected('eyes');
    console.log(ingredient.selected);
})

document.getElementById('fanged-mouth').addEventListener('click', () => {
    tool.selectedTool('fangedMouth', ingredient);
})

document.getElementById('mask').addEventListener('click', () => {
    ingredient.setSelected('mask');
    console.log(ingredient.selected);
})

document.getElementById('mini-heart').addEventListener('click', () => {
    tool.selectedTool('miniHeart', ingredient);
})

document.getElementById('locked-box').addEventListener('click', () => {
    ingredient.setSelected('lockedBox');
    console.log(ingredient.selected);
})

document.getElementById('key').addEventListener('click', () => {
    tool.selectedTool('key', ingredient);
})
//manipulations:

document.getElementById('burn').addEventListener('click', ()=>{
    console.log(`This ingredient is burt!`)
    ingredient.selected = null; 
    tool.created = null; 
    ingredient.materials.pop(); 
    console.log(ingredient.materials); 
})

document.getElementById('extract').addEventListener('click', () => {
    ingredient.addIngredient(tool.created); 
    console.log(ingredient.materials)
    ingredient.selected = null;
    tool.created = null; 
})

document.getElementById('brew').addEventListener('click', () => {
    potion = console.log(ingredient.brew()); 
    tool = new Tool();
    ingredient = new Ingredient(); 
})

document.getElementById('redo').addEventListener('click', () => {
    tool = new Tool();
    ingredient = new Ingredient(); 
    console.log('Your pot is empty now.')
})







