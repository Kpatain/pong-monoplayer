class Joueur{
    /**
     *
     */
    constructor($element){
        this.$element = $element;
        this.score = 0;
    }

    /**
     * ajout du score
     */
    ajoutScore(){
        this.score += 10;
        this.$element.text(this.score);
    }
}
