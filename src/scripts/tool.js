
class Tool {
    constructor(){
        let created = null; 
    }

    selectedTool(tool, ingredient){
        if(tool === 'feather') {
            this.tickle(ingredient);
        } else if(tool === 'knife') {
            this.cut(ingredient);
        } else if(tool === 'laserPointer') {
            this.biubiubiu(ingredient);
        } else if(tool === 'sugar') {
            this.sweeten(ingredient); 
        } else if(tool === 'dragonFruit') {
            this.feed(ingredient);
        } else if(tool === 'fangedMouth') {
            this.saySomethingHurtful(ingredient);
        } else if(tool === 'miniHeart') {
            this.love(ingredient); 
        } else if(tool === 'key') {
            this.secret(ingredient); 
        }
    }

    tickle(ingredient){
        if(ingredient.selected === 'flower') {
            this.created = 'laughingFlower'
            console.log(`${this.created} is created! Extract it if you'd like to add it to your pot.`)
        } else {
            console.log("Nothing happens...")
        }
    }

    cut(ingredient){
        if(ingredient.selected === 'heart') {
            this.created = 'brokenHeart'
            console.log(`${this.created} is created! Extract it if you'd like to add it to your pot.`)
        } else {
            console.log('Why cutting it?')
        }
    }

    biubiubiu(ingredient){
        if(ingredient.selected === 'darkRoom') {
            this.created = 'catAttention'
            console.log(`${this.created} is created! Extract it if you'd like to add it to your pot.`)
        } else {
            console.log('Nothing happens...')
        }
    }

    sweeten(ingredient) {
        if (ingredient.selected === 'nothings') {
            this.created = 'sweetNothings'
            console.log(`${this.created} is created! Extract it if you'd like to add it to your pot.`)
        } else {
            console.log('Nothing happens...')
        }
    }

    feed(ingredient) {
        if (ingredient.selected === 'dragon') {
            this.created = 'dragonSaliva'
            console.log(`${this.created} is created! Extract it if you'd like to add it to your pot.`)
        } else {
            console.log(`You can't feed a ${ingredient.selected}!`)
        }
    }

    saySomethingHurtful(ingredient) {
        if (ingredient.selected === 'eyes') {
            this.created = 'frozenTears'
            console.log(`${this.created} is created! Extract it if you'd like to add it to your pot.`)
        } else {
            console.log('Nothing happens...')
        }
    }

    love(ingredient) {
        if (ingredient.selected === 'mask') {
            this.created = 'happyFace'
            console.log(`${this.created} is created! Extract it if you'd like to add it to your pot.`)
        } else {
            console.log('Nothing happens...')
        }
    }

    secret(ingredient) {
        if (ingredient.selected === 'lockedBox') {
            let code = prompt("It seems that you need to enter a secret code to use the key", 'What will it be?')
            if (code === '1003') {
                this.created = 'secretIngredient'
                console.log(`${this.created} is created! Extract it if you'd like to add it to your pot.`)
            } else {
                console.log(`It's not working...`)
            }
        } else {
            console.log('You cannot use a key like that...')
        }
    }

}

export default Tool; 
