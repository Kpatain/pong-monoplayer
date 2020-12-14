
//Création objet this
class Raquette
{
    constructor($element)
    {
        this.$element = $element;

        /**
         *
         * @type {number}
         */
        this.haut = parseInt($element.css("top"));

        /**
         *
         * @type {number}
         */
        this.gauche = parseInt($element.css("left"));

        /**
         *
         * @type {number}
         */
        this.vitesseY = 2;

        this.hauteur = $element.height();
        this.largeur = $element.width();

    }

    /**
     *
     * @returns {*}
     */
    get bas()
    {
        return this.haut+this.hauteur;
    }

    /**
     *
     * @param value
     */
    set bas(value)
    {
        this.haut = value - this.hauteur;
    }

    /**
     *
     * @returns {*}
     */
    get droite()
    {
        return this.gauche+this.largeur;
    }

    /**
     *
     * @param value
     */
    set droite(value)
    {
        this.gauche = value - this.largeur;
    }

    bouger()
    {
        //Mouvement raquette
        this.haut += this.vitesseY * this.direction;
        this.limite();
        this.majHTML();
    }

    //Liste des fonctions de mouvement
    monter()
    {
        this.direction = -1;
    }

    descendre()
    {
        this.direction = 1;
    }

    arret()
    {
        this.direction = 0;
    }

    /**
     * evite que les raquettes sortent du terrain
     */
    limite()
    {
        //Colision raquette
        if(this.bas > terrain.hauteur)
        {
            this.bas = terrain.hauteur;
        }

        if (this.haut < 0)
        {
            this.haut = 0;
        }
    }

    ratio()
    {
        return ((balle.haut - this.haut) / this.hauteur);
    }

    tiltRaquette()
    {
        //on met la Classe css
        this.$element.addClass("tiltRaquette");
        let ici = this;
        //on retire la Classe css
        setTimeout(
            function()
            {
                ici.$element.removeClass("tiltRaquette");
            },100
        );
    }

    
    //J'ai une blague sur les magasins
    //Mais elle a pas supermarché
    
    
    //update
    majHTML()
    {
        this.$element.css("top", this.haut);
    }

}
