class Ingredients {
    constructor(nom,etats){
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