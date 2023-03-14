const PI = require("pi");

//On fixe la précision du nombre PI à 5 chiffres après la virgule
let precision = 5;
let numPi = Number(PI(precision));

//Fonction qui calcul le périmètre d'un cercle de rayon R
function calculerPerimetreCercle(rayon){
    return numPi*rayon*2;
}

// Export
module.exports = {calculerPerimetreCercle};