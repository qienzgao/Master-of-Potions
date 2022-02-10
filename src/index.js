// import button from "./scripts/background"
import Tool from "./scripts/tool"
import Ingredient from "./scripts/ingredient"
import Canvas from "./scripts/canvas"
// import Display from "./scripts/display"

let tool = new Tool(); 
let ingredient = new Ingredient(); 
let newCanvas = new Canvas
let potion = null; 

//display:
let showlist = document.querySelectorAll('.show img');
function show(id) {
    let showimg = document.querySelector(id)
    showimg.style.display = 'block';
};

function unshow(){
    for (let i = 0; i < showlist.length; i++) {
        showlist[i].style.display = 'none';
        // console.log(showlist[i]);
    }
}


//ingredient-tool interaction:

document.getElementById('flower').addEventListener('click', ()=>{
    ingredient.setSelected('Flower'); 
    unshow(); 
    show('#flowerimg'); 
    newCanvas.write(ingredient.selected);  
})

document.getElementById('feather').addEventListener('click', ()=>{
    newCanvas.write(tool.selectedTool('feather', ingredient));
})

document.getElementById('heart').addEventListener('click', () => {
    ingredient.setSelected('Heart');
    unshow(); 
    show('#heartimg'); 
    newCanvas.write(ingredient.selected); 
})

document.getElementById('knife').addEventListener('click', () => {
    newCanvas.write(tool.selectedTool('knife', ingredient));
})

document.getElementById('dark-room').addEventListener('click', () => {
    ingredient.setSelected('Dark room');
    unshow(); 
    show('#dark-roomimg'); 
    newCanvas.write(ingredient.selected); 
})

document.getElementById('laser-pointer').addEventListener('click', () => {
    setTimeout(() => {
        show('#catimg')
        newCanvas.write(tool.selectedTool('laserPointer', ingredient));
    }, 2222);
})

document.getElementById('dragon').addEventListener('click', () => {
    ingredient.setSelected('Dragon');
    unshow(); 
    show('#dragonimg'); 
    newCanvas.write(ingredient.selected); 
})

document.getElementById('dragon-fruit').addEventListener('click', () => {
    newCanvas.write(tool.selectedTool('dragonFruit', ingredient));
})

document.getElementById('nothings').addEventListener('click', () => {
    ingredient.setSelected('Nothings');
    unshow(); 
    show('#nothingsimg'); 
    newCanvas.write(ingredient.selected); 
})

document.getElementById('sugar').addEventListener('click', () => {
    newCanvas.write(tool.selectedTool('sugar', ingredient));
})

document.getElementById('eyes').addEventListener('click', () => {
    ingredient.setSelected('Eyes');
    unshow(); 
    show('#eyesimg'); 
    newCanvas.write(ingredient.selected); 
})

document.getElementById('fanged-mouth').addEventListener('click', () => {
    newCanvas.write(tool.selectedTool('fangedMouth', ingredient));
})

document.getElementById('mask').addEventListener('click', () => {
    ingredient.setSelected('Mask');
    unshow(); 
    show('#maskimg'); 
    newCanvas.write(ingredient.selected); 
})

document.getElementById('mini-heart').addEventListener('click', () => {
    newCanvas.write(tool.selectedTool('miniHeart', ingredient));
})

document.getElementById('locked-box').addEventListener('click', () => {
    ingredient.setSelected('Locked box');
    unshow(); 
    show('#locked-boximg'); 
    newCanvas.write(ingredient.selected); 
})

document.getElementById('key').addEventListener('click', () => {
    newCanvas.write(tool.selectedTool('key', ingredient));
})

document.getElementById('dream').addEventListener('click', () => {
    ingredient.setSelected('Nightmare');
    unshow();
    show('#dreamimg')
    newCanvas.write('Hover over the nightmare to spin it!')
    setTimeout(() => {
        newCanvas.write(`Fragment of a nightmare is created! Extract it if you'd like to add it to your pot`)
    }, 3333);
    tool.created = 'Fragment of a nightmare'; 
})


//manipulations:

document.getElementById('burn').addEventListener('click', ()=>{
    ingredient.materials.forEach(material=>{
        newCanvas.write(material); 
    }); 
    show('#burnvisual'); 
    setTimeout(()=>{
        newCanvas.write(`This ingredient is burt!`)
        unshow();
    }, 2010);
    ingredient.selected = null; 
    tool.created = null; 
    ingredient.materials.pop(); 
})

document.getElementById('extract').addEventListener('click', () => {
    ingredient.addIngredient(tool.created); 
    show('#extractvisual');
    setTimeout(() => {
        newCanvas.write('You extract the essence from the ingredient!')
        unshow();
    }, 2010);
    newCanvas.write(ingredient.materials);
    ingredient.selected = null;
    tool.created = null; 
})

document.getElementById('brew').addEventListener('click', () => {
    show('#brewvisual');
    let potion = ingredient.brew(); 
    console.log(potion); 
    console.log(ingredient.materials)
    setTimeout(() => {
        unshow();
        newCanvas.write(potion); 
        if (potion !== `You've made something strange...(definitely not a potion!)`) {
            show('#potionvisual'); 
        } else {
            show('#failvisual'); 
            show('#poisonvisual')
        }
    }, 2010);
    tool = new Tool();
    ingredient = new Ingredient(); 
})

document.getElementById('redo').addEventListener('click', () => {
    tool = new Tool();
    ingredient = new Ingredient(); 
    show('#redovisual');
    setTimeout(() => {
        newCanvas.write('Your pot is empty now.')
        unshow();
    }, 2010);
})


// let image = new Image(); 
// image.src = "./images/heart.png";
// newCanvas.draw(image);








