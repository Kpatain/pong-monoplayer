//on renprend les infos du css / création des objets
/**
 *
 * @type {Terrain}
 */
let terrain = new Terrain($("#terrain"));

/**
 *
 * @type {Balle}
 */
let balle = new Balle($("#balle"));

/**
 *
 * @type {Raquette}
 */
let raquetteD = new Raquette($("#droite"));

/**
 *
 * @type {Raquette}
 */
let raquetteG = new Raquette($("#gauche"));

/**
 *
 * @type {Joueur}
 */
let joueur = new Joueur($("#score"));

let vies = new Vies($("#vie"));

/**
 *
 * @type {boolean}
 */
let demarrer = false;

setInterval(function(){
    if(demarrer)
    {
        balle.bouger();
        raquetteG.bouger();
        raquetteD.bouger();
    }
}, 10);

//Start
$("#btn-jouer").on("mouseup", function (event) {
    event.preventDefault();
    demarrer = true;
    $("#ecran-debut").addClass("invisible");
});


//APPUIE
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {return}
    if (event.key === "ArrowUp")
    {
        raquetteG.monter();
        raquetteD.descendre();
    }

    else if (event.key === "ArrowDown")
    {
        raquetteG.descendre();
        raquetteD.monter();
    }

    event.preventDefault();
}, true);

//RELACHE
window.addEventListener("keyup", function (event)
{
    if (event.defaultPrevented) {return}
    if (event.key === "ArrowUp")
    {
        raquetteG.arret();
        raquetteD.arret();
    }

    else if (event.key === "ArrowDown")
    {
        raquetteD.arret();
        raquetteG.arret();
    }


    event.preventDefault();
}, true);
