class Vies{
    /**
     *
     */
    constructor($element){
        this.$element = $element;
        this.vies = 5;
    }

    /**
     * - 1 vie
     */
    enlevie(){
        this.score -= 1;
        this.$element.text(this.vies);
    }
}
