class Perso {
    constructor(nom,lieu,argent,mainDroite,mainGauche){
        this.nom = nom
        this.lieu = lieu
        this.argent = argent
        this.mainDroite = mainDroite
        this.mainGauche = mainGauche
        this.seDeplacer=(lieu)=>{
            lieu.personnes.push(Perso.nom)
            console.log(`${this.nom} est actuellement à la ${lieu.nom}`);
        }
        this.payerArticle=(article)=>{
            this.argent-=article.prix
            console.log(`${article.nom} a couté ${article.prix} `);
            
        }
        
        this.couper=(ingredient)=>{
            ingredient.etats = "Coupé"
            
            console.log(`${this.nom} a coupé ${ingredient.nom}`);
        }
    }
}

export {Perso};

///Lieu///

class Lieu{
    constructor(nom,personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

class Maison extends Lieu{
    constructor(nom,personnes){
        super(nom,personnes)
    }
}

class Epicerie extends Lieu{
    constructor(nom,personnes,paniers){
        super(nom,personnes)
        this.paniers = paniers;
        this.ingredients = this.ingredients;
    }
}

export {Lieu,Maison,Epicerie};

///Ingrédients//

class Ingredients {
    constructor(nom,etats,prix){
        this.nom = nom;
        this.etats = etats;
        this.prix = prix;
    }
}

class Oignon extends Ingredients {
    constructor(nom,etats,prix){
        super(nom,etats,prix);
    }
}

class Oeuf extends Ingredients {
    constructor(nom,etats,prix){
        super(nom,etats,prix);
    }
}

class Epice extends Ingredients {
    constructor(nom,etats,prix){
        super(nom,etats,prix);
    }
}

class Fromage extends Ingredients {
    constructor(nom,etats,prix){
        super(nom,etats,prix);
    }
}

export {Ingredients, Oignon, Oeuf, Epice, Fromage};

//Outils//

class Outil{
    constructor(nom){
        this.nom = nom
    }
}

class Couteau extends Outil {
    constructor(nom,action){
        super(nom),
        this.action = action
    }
}

class Bol extends Outil {
    constructor(nom,tableau){
        super(nom)
        this.tableau = tableau,
        this.meLanger=(nomMelange)=>{
            let newMelange = new Ingredients(nomMelange,"pas cuit!")
            console.log(`Le ${this.nom} a été mélangé  pour obtenir une omelette ${newMelange.etats}`);
            return newMelange
        }
    }
    
}

class Poele extends Outil {
    constructor(nom){
        super(nom)
        this.tableau = []
        this.Cuir=()=>{
            setTimeout(()=> { this.tableau[0]="cuit";
                console.log(`blazblz`);
            }, 4000)
        }
    }
}

export {Outil, Couteau, Bol, Poele};