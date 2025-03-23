
function choisirPhrasesOuMots(){
    res = prompt("Voulez vous jouer avec des phrases ou mot : ")
    while (res != "phrase" && res != "mot")
        res = prompt("Voulez vous jouer avec des phrases ou mot : ")
    return res
}
function affichResultat(res, nbMot){
    console.log("Vous avez eu ", res, " pour ", nbMot)
    switch(res){
        case nbMot :
            console.log("felicitations")
            break
        default : 
            console.log("nul")
    }
}

function lancerBoucleDeJeu(){
    phrase = ["il est", "tu es"]
    mot = ["bob", "bob2"]
    let score = 0

    let choix = choisirPhrasesOuMots()

    if(choix == "mot") choix = mot
    else choix = phrase

    for(let i = 0; i<choix.length; i++)
        res = prompt('Ecrivez : '+ choix[i])
        if(res == choix )score+=1
    affichResultat(score, choix.length)
}

lancerBoucleDeJeu()

