//Création objet Terrain
class Terrain{
    constructor($element)
    {
        this.$element = $element;
        this.largeur=$element.width();
        this.hauteur=$element.height();
    }

    tiltHaut()
    {
        //on met la Classe css
        this.$element.addClass("tiltHaut");
        let ici = this;
        
        //on retire la Classe css
        setTimeout(
            function()
            {
                ici.$element.removeClass("tiltHaut");
            },200
        );
    }

    tiltBas()
    {
        //on met la Classe css
        this.$element.addClass("tiltBas");
        let ici = this;

        //on retire la Classe css
        setTimeout(
            function()
            {
                ici.$element.removeClass("tiltBas");
            },200
        );
    }

    tiltEchecG()
    {
        //on met la Classe css
        this.$element.addClass("tiltEchecG");
        let ici = this;

        //on retire la Classe css
        setTimeout(
            function()
            {
                ici.$element.removeClass("tiltEchecG");
            },100
        );
    }

    tiltEchecD()
    {
        //on met la Classe css
        this.$element.addClass("tiltEchecD");
        let ici = this;

        //on retire la Classe css
        setTimeout(
            function()
            {
            ici.$element.removeClass("tiltEchecD");
            },100
        );

    }
    
}
