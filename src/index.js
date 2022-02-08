// import button from "./scripts/background"
import Tool from "./scripts/tool"
import Ingredient from "./scripts/ingredient"

let tool = new Tool(); 
let ingredient = new Ingredient(); 
let potion = null; 

// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log("hello")
// })

document.getElementById('flower').addEventListener('click', ()=>{
    ingredient.setSelected('flower'); 
    console.log(ingredient.selected); 
})

document.getElementById('feather').addEventListener('click', ()=>{
    tool.selectedTool('feather', ingredient);
    console.log(tool.created);
})

document.getElementById('burn').addEventListener('click', ()=>{
    ingredient.selected = null; 
    tool.created = null; 
})

document.getElementById('extract').addEventListener('click', () => {
    ingredient.addIngredient(tool.created); 
    ingredient.selected = null;
    tool.created = null; 
})

document.getElementById('brew').addEventListener('click', () => {
    potion = ingredient.brew(); 
})







