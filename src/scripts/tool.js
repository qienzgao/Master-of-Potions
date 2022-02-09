
class Tool {
    constructor(){
        let created = null; 
    }

    selectedTool(tool, ingredient){
        if(tool === 'feather') {
            return this.tickle(ingredient);
        } else if(tool === 'knife') {
            return this.cut(ingredient);
        } else if(tool === 'laserPointer') {
            return this.biubiubiu(ingredient);
        } else if(tool === 'sugar') {
            return this.sweeten(ingredient); 
        } else if(tool === 'dragonFruit') {
            return this.feed(ingredient);
        } else if(tool === 'fangedMouth') {
            return this.saySomethingHurtful(ingredient);
        } else if(tool === 'miniHeart') {
            return this.love(ingredient); 
        } else if(tool === 'key') {
            return this.secret(ingredient); 
        }
    }

    tickle(ingredient){
        if(ingredient.selected === 'flower') {
            this.created = 'laughingFlower';
            return `${this.created} is created! Extract it if you'd like to add it to your pot.`;
        } else {
            return "Nothing happens...";
        }
    }

    cut(ingredient){
        if(ingredient.selected === 'heart') {
            this.created = 'brokenHeart';
            return `${this.created} is created! Extract it if you'd like to add it to your pot.`;
        } else {
            return 'Why cutting it?';
        }
    }

    biubiubiu(ingredient){
        if(ingredient.selected === 'darkRoom') {
            this.created = 'catAttention';
            return `${this.created} is created! Extract it if you'd like to add it to your pot.`;
        } else {
            return 'Nothing happens...';
        }
    }

    sweeten(ingredient) {
        if (ingredient.selected === 'nothings') {
            this.created = 'sweetNothings';
            return `${this.created} is created! Extract it if you'd like to add it to your pot.`;
        } else {
            return 'Nothing happens...';
        }
    }

    feed(ingredient) {
        if (ingredient.selected === 'dragon') {
            this.created = 'dragonSaliva';
            return `${this.created} is created! Extract it if you'd like to add it to your pot.`;
        } else {
            return `You can't feed a ${ingredient.selected}!`;
        }
    }

    saySomethingHurtful(ingredient) {
        if (ingredient.selected === 'eyes') {
            this.created = 'frozenTears';
            return `${this.created} is created! Extract it if you'd like to add it to your pot.`;
        } else {
            return 'Nothing happens...';
        }
    }

    love(ingredient) {
        if (ingredient.selected === 'mask') {
            this.created = 'happyFace';
            return `${this.created} is created! Extract it if you'd like to add it to your pot.`;
        } else {
            return 'Nothing happens...';
        }
    }

    secret(ingredient) {
        if (ingredient.selected === 'lockedBox') {
            let code = prompt("It seems that you need to enter a secret code to use the key", 'What will it be?')
            if (code === '1003') {
                this.created = 'secretIngredient';
                return `${this.created} is created! Extract it if you'd like to add it to your pot.`;
            } else {
                return `It's not working...`;
            }
        } else {
            return 'You cannot use a key like that...';
        }
    }

}

export default Tool; 
