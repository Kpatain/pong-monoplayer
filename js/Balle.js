//Création objet Balle
class Balle
{
    constructor($element)
    {

        this.$element = $element;
        this.largeur = $element.width();

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
        this.buf = Math.random();

        /**
         *
         * @type {number}
         */
        this.vitesseD = 1.8;

        /**
         *
         * @type {number}
         */
        this.vitesse = this.vitesseD;

        /**
         *
         * @type {number}
         */
        this.vitesseMax = 7;

        /**
         *
         * @type {number}
         */
        this.balleRayon = 20;

        /**
         *
         * @type {number}
         */
        this.angle = this.defAngle();

    }

    /**
     *
     * @returns {*}
     */
    get bas()
    {
        return this.haut + this.largeur;
    }

    /**
     *
     * @param value
     */
    set bas(value)
    {
        this.haut = value - this.balleRayon;
    }

    /**
     *
     * @returns {*}
     */
    get droite()
    {
        return this.gauche + this.largeur;
    }

    /**
     *
     * @param value
     */
    set droite(value)
    {
        this.gauche = value - this.balleRayon;
    }


    defAngle()
    {
        return this.buf < 0.5 ?(
            ((5*Math.PI/4) - Math.random()*(2*Math.PI/4))
        ):(
            ((Math.PI/4) - Math.random()*(2*Math.PI/4))
        );
    }


    //Mouvement de la balle
    bouger()
    {
        this.gauche += Math.cos(this.angle) * this.vitesse;
        this.haut += Math.sin(this.angle) * this.vitesse;

        this.limite();
        this.majHTML();
    }


    limite()
    {
        // On detecte les bords
        //Droite
        if(this.droite > terrain.largeur)
        {
            this.buf = 0.75;
            this.recentrer();
        }
        
        //Bas
        if(this.bas > terrain.hauteur)
        {
            this.angle = -(this.angle);
            this.bas = terrain.hauteur;
        }

        //Haut
        if (this.haut <= 0)
        {
            this.angle = -(this.angle);
            this.haut = 0;
        }
        //Gauche
        if (this.gauche <= 0)
        {
            this.buf = 0.25;
            this.recentrer();
        }

        this.rebond();
        this.majHTML();
    }

    rebond()
    {
        //DROITE
        if (this.droite > raquetteD.gauche) {       //si la balle dépasse à gauche la raquette gauche
            if (this.bas > raquetteD.haut) {        //et si la balle est plus basse que le haut de la raquette
                if (this.haut < raquetteD.bas) {    //et si la balle est plus haute que le bas de la raquette
                    raquetteD.tiltRaquette();       //tilt css de la raquette droite
                    this.ratioRebond(true);
                    joueur.ajoutScore();

                }
            }
        }

        //GAUCHE
        if (this.gauche < raquetteG.droite) {       //si la balle dépasse à gauche la raquette gauche
            if (this.bas > raquetteG.haut) {        //et si la balle est plus basse que le haut de la raquette
                if (this.haut < raquetteG.bas) {    // et si la balle est plus haute que le bas de la raquette
                    raquetteG.tiltRaquette();       //tilt css de la raquette gauche
                    this.ratioRebond(false);
                }
            }
        }
    }

    recentrer()
    {
        this.haut = terrain.hauteur/2;    //au milieu
        this.gauche = terrain.largeur/2;

        Vies.
        this.vitesse = this.vitesseD;
        this.angle = this.defAngle();

    }

    //acceleration de la balle quand elle touche les raquettes
    acceleration()
    {
        if (Math.abs(this.vitesse) < this.vitesseMax)
        {
            this.vitesse *= 1.1;
        }

    }

    ratioRebond(b)
    {
        if (b)
        {
            //this.vitesse = 2*Math.abs(raquetteD.ratio() - 0.5) + 1;
            this.vitesse *= raquetteD.ratio() + 1
            console.log(this.vitesse);
            this.angle = -3*Math.PI/4 - raquetteD.ratio() * Math.PI/2;

            if (Math.abs(this.vitesse) < this.vitesseMax)
            {
                this.vitesse *= 1.1;
            }
        }

        else
        {
            this.vitesse = 2*Math.abs(raquetteG.ratio() - 0.5) + 1;
            console.log(this.vitesse);
            this.angle = -Math.PI/4 + raquetteG.ratio() * Math.PI/2;

            if (Math.abs(this.vitesse) < this.vitesseMax)
            {
                this.vitesse *= 1.1;
            }

        }


    }


    //Update HTML
    majHTML()
    {
        this.$element.css("left", this.gauche);
        this.$element.css("top", this.haut);
    }

}
