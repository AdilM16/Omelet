import {Perso,Maison,Epicerie,Oignon,Oeuf,Epice,Fromage,Couteau,Bol,Poele} from "./obj.js";
let perso = new Perso("Franck","",20,[],[]);
let maison = new Maison("Maison",[]);
let epicerie = new Epicerie("Epicerie",[],"Paniers");
epicerie.paniers=[
    {type:'Panier 1', bac : []},
    {type:'Panier 2', bac : []},
];
let oignon = new Oignon("Oignon","Intact",1.10);
let oeuf = new Oeuf("Oeuf","Intact",0.2);
let epice = new Epice("Epice","Intact",0.8);
let fromage = new Fromage("Fromage","Intact",0.9);
let couteau = new Couteau("Couteau","Coupé");
let bol = new Bol("Bol",[]);
let poele = new Poele("Poele",[]);

perso.seDeplacer(maison);

perso.seDeplacer(epicerie);






