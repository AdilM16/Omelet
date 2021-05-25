class Lieu{
    constructor(nom,personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

class Maison extends Lieu{
    constructor(nom,personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

class Epicerie extends Lieu{
    constructor(nom,personnes){
        this.nom = nom;
        this.personnes = personnes;
        this.paniers = paniers;
    }
}

export {Maison,Epicerie};