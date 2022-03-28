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

    inPot(){
        let list = document.getElementById('materials');
        let prepared = this.materials;
        list.innerHTML = "";

        if (this.materials.length === 0) {
            return list.innerHTML = "There's nothing in your pot yet!"
        } else {
                prepared.forEach((material) => {
                let li = document.createElement("li");
                li.innerText = material;
                list.appendChild(li);
            })
        }
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
            return 'Truelove Potion'
        } else if (this.materials.includes('Dragon saliva') &&
            this.materials.includes('Cat attention') &&
            this.materials.length === 2) {
            return 'Cutification Potion'
        } else if (this.materials.includes('Dizzy phantasy') &&
            this.materials.includes('Fragment of a nightmare') &&
            this.materials.includes('Sweet nothings') &&
            this.materials.length === 3){
            return 'Veritaserum'
        } else if (this.materials.includes('Happy face') &&
            this.materials.includes('Dizzy phantasy') &&
            this.materials.includes('Broken heart') &&
            this.materials.length === 3) {
            return 'Amortentia'
        } else if (this.materials.includes('Dragon saliva') &&
            this.materials.includes('Cat attention') &&
            this.materials.includes('Laughing flower') &&
            this.materials.includes('Dizzy phantasy') &&
            this.materials.includes('Happy face') &&
            this.materials.includes('Secret ingredient') &&
            this.materials.length === 6) {
            return 'Elixir of everlasting happiness: Thank you, I never knew I could be so happy before meeting you!'
        } else {
            return `You've made something strange...(definitely not a potion!)`
        }
    }

}

export default Ingredient; 