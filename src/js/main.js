import {Perso,Maison,Epicerie,Oignon,Oeuf,Epice,Fromage,Couteau,Bol,Poele, Ingredients} from "./obj.js";
let perso = new Perso("Franck","",20,[],[]);
let maison = new Maison("Maison",[]);
let epicerie = new Epicerie("Epicerie",[],[]);
epicerie.paniers=[
    {type:'panier medium', bac : []},
    {type:'panier large', bac : []},
];
let oignon = new Oignon("Oignon","Intact",1.10);
let oeuf = new Oeuf("Oeuf","Intact",0.2);
let epice = new Epice("Epice","Intact",0.8);
let fromage = new Fromage("Fromage","Intact",0.9);
let rayon = [oignon,oeuf,epice,fromage];
let couteau = new Couteau("Couteau","Coupé");
let bol = new Bol("Bol",[]);
let poele = new Poele("Poele",[]);
let Omelette = new Ingredients ("Omelette","cuite");

perso.seDeplacer(maison);

perso.seDeplacer(epicerie);

perso.mainDroite.push(epicerie.paniers[0]);
epicerie.paniers.shift();
    console.log(perso.mainDroite);
    console.log(epicerie.paniers);
    console.log(`${perso.nom} a pris un ${perso.mainDroite[0].type}`);

rayon.forEach(produits => {
    console.log(perso.nom + " a prit " + produits.nom);
    perso.mainDroite[0].bac.push(produits)
});
console.log(perso.mainDroite[0].bac);
console.log('____');

perso.mainDroite[0].bac.forEach(produits => {
    perso.payerArticle(produits)
});

console.log(`Il reste ${perso.argent} euro à ${perso.nom} `);

perso.seDeplacer(maison);

while (perso.mainDroite[0].bac.length > 0) {
    console.log(`${perso.nom} a posé ${perso.mainDroite[0].bac[0].nom} dans le ${bol.nom}`);
    bol.tableau.push(perso.mainDroite[0].bac.shift())
}

console.log(perso.mainDroite[0].bac);

perso.seDeplacer(epicerie);
epicerie.paniers.push(perso.mainDroite.shift());
console.log(`${perso.nom} a posé le ${epicerie.paniers[1].type}`);

perso.seDeplacer(maison);

console.log(`${perso.nom} est de retour à la ${perso.lieu.nom} pour faire son omelette`);

bol.tableau.forEach(ingredient => {
    perso.couper(ingredient)
    console.log(ingredient);
});

let OmeletteFinal = bol.meLanger(Omelette)


bol.tableau.forEach(element => {
    bol.tableau.shift(element)
    bol.tableau.shift(element)
});

bol.tableau.push(OmeletteFinal);
console.log(` Il ne reste que l'omelette ${bol.tableau[0].etats}`);

console.log(`${Omelette.nom} est ${Omelette.etats} !`);

