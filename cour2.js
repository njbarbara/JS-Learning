const motApplication = "Bonjour" // Essayez de mettre un autre mot ici !
let motUtilisateur = prompt("Entrez un mot :" + motApplication)//text input window
console.log(motUtilisateur)

if (motUtilisateur === motApplication) {
    console.log("Bravo !")
} else {
    console.log("Vous avez fait une erreur de frappe.")
}

switch (motUtilisateur) {
    case motApplication:
        console.log("Bravo !")
        break
    case "Gredin":
        console.log("Restez correct !")
        break
    case "Mécréant":
        console.log("Restez correct !")
        break
    case "Vilain":
        console.log("Soyez gentil !")
        break
    default:
        console.log("Vous avez fait une erreur de frappe.")
}

for (let i = 0; i < 3; i++) {
    console.log(i)
}

while(motUtilisateur != "bob"){
    motUtilisateur = prompt("Entrez bob")   
}

function bob(x){console.log("Mot de la fonction : " + x)}

bob(3)