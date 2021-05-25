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
let couteau = new Couteau("Couteau","Coupé");
let bol = new Bol("Bol",[]);
let poele = new Poele("Poele",[]);
let ingredients = new Ingredients();

perso.seDeplacer(maison);

perso.seDeplacer(epicerie);

perso.mainDroite.push(epicerie.paniers[0]);
epicerie.paniers.shift();
    console.log(perso.mainDroite);
    console.log(epicerie.paniers);
console.log(`${perso.nom} a pris un ${perso.mainDroite[0].type}`);

for (let i in perso.mainDroite[0]) {
    
}










