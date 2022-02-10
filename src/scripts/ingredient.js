// material stands for ingredients that have been processed
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
        if(this.materials.includes('Laughing flower') &&
            this.materials.includes('Cat attention') && 
            this.materials.includes('Dragon saliva') &&
            this.materials.length === 3){
            return 'Laugh Potion'
        } else if (this.materials.includes('Broken heart') &&
            this.materials.includes('Frozen tears') &&
            this.materials.includes('Sweet nothings') &&
            this.materials.length === 3){
            return 'Heartless Potion'
        } else if (this.materials.includes('Happy face') &&
            this.materials.includes('Fragment of a nightmare') &&
            this.materials.includes('Laughing flower') &&
            this.materials.length === 3) {
            return 'Love Potion'
        } else if (this.materials.includes('Dragon saliva') &&
            this.materials.includes('Cat attention') &&
            this.materials.length === 2) {
            return 'Cutification Potion'
        } else {
            return `You've made something strange...(definitely not a potion!)`
        }
    }

}

export default Ingredient; 