class Ingredient {
    constructor() {
        this.selected = null; 
        this.materials = []; 
    }

    setSelected(ingredient) {
        this.selected = ingredient;
    }

    addIngredient(material){
        if (!material) {
            return
        }
        this.materials.push(material);
    }

    brew(){
        if('laughingFlower' in this.materials && 'abc' in this.materials && 'thankyou' in this.materials && this.materials.length === 3){
            return 'potion1'
        } else {
            
        }
    }
    
}

export default Ingredient; 