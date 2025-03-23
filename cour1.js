let maVariable = 42
const maVar = "bob"
maVariable += 5
maVariable += Number("100") //string -> int 

const maCollectionDeFilms = ["Titanic", "Jurassic Park", "Le Seigneur des Anneaux"]
const taille = maCollectionDeFilms.length
console.log("Tableau de taille : ", taille, maCollectionDeFilms, "Première valeur = ", maCollectionDeFilms[0])
maCollectionDeFilms.push(maVar)
console.log("Nouveau tab après ajout = ", maCollectionDeFilms)
maCollectionDeFilms.pop()
console.log("Nouveau tab après supression du dernier élément = ", maCollectionDeFilms)


console.log("Voici ma variable = ",maVar, "\nEt l'autre variale constante = ", maVariable)

let monPersonnage = { //objet js 
    nom: "Wayne",
    prenom: "Bruce",
    age: undefined, //si je ne veux pas initialisé 
    couleurPreferee: "noir",
    hobbies: "sortir la nuit"
}

const nomDeMonPersonnage = monPersonnage.nom
