
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
        if(ingredient.selected === 'Flower') {
            this.created = 'Laughing flower';
            return `${this.created} is created! Extract it if you'd like to add it to your pot.`;
        } else {
            return "Nothing happens...";
        }
    }

    cut(ingredient){
        if(ingredient.selected === 'Heart') {
            this.created = 'Broken heart';
            return `${this.created} is created! Extract it if you'd like to add it to your pot.`;
        } else {
            return 'Why cutting it?';
        }
    }

    biubiubiu(ingredient){
        if(ingredient.selected === 'Dark room') {
            this.created = 'Cat attention';
            return `${this.created} is created! Extract it if you'd like to add it to your pot.`;
        } else {
            return 'Nothing happens...';
        }
    }

    sweeten(ingredient) {
        if (ingredient.selected === 'Nothings') {
            this.created = 'Sweet nothings';
            return `${this.created} is created! Extract it if you'd like to add it to your pot.`;
        } else {
            return 'Nothing happens...';
        }
    }

    feed(ingredient) {
        if (ingredient.selected === 'Dragon') {
            this.created = 'Dragon saliva';
            return `${this.created} is created! Extract it if you'd like to add it to your pot.`;
        } else {
            return `You can't use it like that!`;
        }
    }

    saySomethingHurtful(ingredient) {
        if (ingredient.selected === 'Eyes') {
            this.created = 'Frozen tears';
            return `${this.created} is created! Extract it if you'd like to add it to your pot.`;
        } else {
            return 'Nothing happens...';
        }
    }

    

    love(ingredient) {
        if (ingredient.selected === 'Mask') {
            this.created = 'Happy face';
            return `${this.created} is created! Extract it if you'd like to add it to your pot.`;
        } else {
            return 'Nothing happens...';
        }
    }

    secret(ingredient) {
        if (ingredient.selected === 'Locked box') {
            let code = prompt("It seems that you need to enter a secret code to use the key", 'What will it be?')
            if (code === '1003') {
                this.created = 'Secret ingredient';
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
