//Require
const Cercle = require('../geometrie');

//On calcule le paramèttre du cercle
let valPeri = Cercle.calculerPerimetreCercle(5);

//On réalise le test à l'aide de la bibliothèque jest
test('Périmètrre cercle de rayon 5 est égal à 31.4159', () => {
    expect(valPeri).toBe(31.4159);
});