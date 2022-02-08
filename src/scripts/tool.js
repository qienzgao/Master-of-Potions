
class Tool {
    constructor(){
        var created = null; 
    }

    selectedTool(tool, ingredient){
        if(tool === 'feather') {
            this.tickle(ingredient);
        } else if(tool === 'knife') {

        } else if(tool === 'laserPointer') {
            
        } else if(tool === 'sugar') {

        } else if(tool === 'dragonFruit') {

        } else if(tool === 'fangedMouth') {

        } else if(tool === 'miniHeart') {

        } else if(tool === 'key') {

        }
    }

    tickle(ingredient){
        if(ingredient.selected === 'flower') {
            this.created = 'laughingFlower'
            // addIngredient('laughingFlower')
        } else {
            console.log("It's not working")
        }
    }
}

export default Tool; 
