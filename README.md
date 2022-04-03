# JS-Project: Master of Potions
### [Live site](https://qienzgao.github.io/Master-of-Potions/)

## Overview
Master of Potions (MOP) is a webpage application game where players can interact with variant ingredients and process them with tools to make potions. Players are able to select the preferable ingredient and interact with it by hovering the cursor or clicking. After selecting the ingredient, the player can choose one of the tools to process the ingredient and generate a processed material. If satisfied with it, the player can extract it and it will be stored in the pot. Players may at any time hit "brew" to generate a potion. If processed materials in the pot match one of the formulas, a potion will be created accordingly. 


## Technologies
<code><img height="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript"></code>
<code><img height="30" src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" alt="html5"></code>
<code><img height="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3"></code>

Canvas was used to display images and animation respectively when ingredients are selected

```javascript
//display:

let showlist = document.querySelectorAll('.show img'); //select ingredient image

function show(id) {
    let showimg = document.querySelector(id)
    showimg.style.display = 'flex';
};

function unshow(){
    for (let i = 0; i < showlist.length; i++) {
        showlist[i].style.display = 'none'
    }
}

//ingredient-tool interaction:

document.getElementById('flower').addEventListener('click', ()=>{
    ingredient.setSelected('Flower'); 
    unshow(); //hide the image that is currently displayed on canvas when ingredient is selected
    show('#flowerimg'); 
    newCanvas.write(ingredient.selected);  //display image on canvas 
})

document.getElementById('feather').addEventListener('click', ()=>{
    newCanvas.write(tool.selectedTool('feather', ingredient));
})

```

## Preview
### Homepage
<img src="https://github.com/qienzgao/Master-of-Potions/blob/main/src/images/master_of_potions.png"/>

### Introduction
<img src="https://github.com/qienzgao/Master-of-Potions/blob/main/src/images/Introduction.png"/>

### Potion Created
<img src="https://github.com/qienzgao/Master-of-Potions/blob/main/src/images/potion_created.png"/>

### Game Play
<img src="https://github.com/qienzgao/Master-of-Potions/blob/main/src/images/dragon.gif" width=400 height=200/> <img src="https://github.com/qienzgao/Master-of-Potions/blob/main/src/images/mop.gif" width=400 height=200/>


