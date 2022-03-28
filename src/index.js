// import button from "./scripts/background"
import Ingredient from "./scripts/ingredient";
import Canvas from "./scripts/canvas";
import Tool from "./scripts/tool";
// import Display from "./scripts/display"

let tool = new Tool(); 
let ingredient = new Ingredient(); 
let newCanvas = new Canvas
let potion = null; 

//display:
let showlist = document.querySelectorAll('.show img');
let eyesimg = document.getElementById('eyesimg'); 

function show(id) {
    let showimg = document.querySelector(id)
    showimg.style.display = 'flex';
};

function unshow(){
    for (let i = 0; i < showlist.length; i++) {
        showlist[i].style.display = 'none';
        eyesimg.style.display = 'none'; 
        
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
        unshow();
        show('#catimg')
        newCanvas.write(tool.selectedTool('laserPointer', ingredient));
    }, 300);
})

document.getElementById('dragon').addEventListener('click', () => {
    ingredient.setSelected('Dragon');
    unshow(); 
    show('#dragonimg'); 
    show('#dragonimg2');
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

document.getElementById('phantasy').addEventListener('click', () => {
    ingredient.setSelected('Phantasy');
    unshow();
    show('#phantasyimg')
    newCanvas.write('Chase and catch the phantasy!')
    setTimeout(() => {
        newCanvas.write(`Dizzy phantasy is created! Extract it if you'd like to add it to your pot`)
    }, 5555);
    tool.created = 'Dizzy phantasy';
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

//popups

const openPopupButton = document.querySelectorAll('[data-popup-target]');
const closePopupButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const checkPot = document.getElementById('checkpot');

openPopupButton.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget); 
        openPopup(popup); 
    })
})

overlay.addEventListener('click', ()=>{
    const popups = document.querySelectorAll('.popup.active')
    popups.forEach(popup =>{
        closePopup(popup); 
    })
})

closePopupButton.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup'); 
        closePopup(popup);
    })
})


function openPopup(popup){
    if (popup == null ) return; 

    const body1 = document.getElementById('popup-body');
    const body2 = document.getElementById('popup-body2');
    const title = document.getElementById('popup-title');
    const title2 = document.getElementById('popup-title2');
    title.classList.remove('unshow', 'show');
    title2.classList.remove('show', 'unshow');
    body1.classList.remove('unshow', 'show');
    body2.classList.remove('show', 'unshow'); 

    popup.classList.add('active'); 
    overlay.classList.add('active'); 
}

function closePopup(popup) {
    if (popup == null) return; 
    popup.classList.remove('active');
    overlay.classList.remove('active'); 
}

checkPot.addEventListener('click', ()=> {
    const body1 = document.getElementById('popup-body');
    const body2 = document.getElementById('popup-body2');
    const title = document.getElementById('popup-title')
    const title2 = document.getElementById('popup-title2')
    title.classList.add('unshow');
    title2.classList.add('show');
    body1.classList.add('unshow');
    body2.classList.add('show');
    ingredient.inPot();
})


