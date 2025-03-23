let baliseZoneProps = document.getElementById("bob")
console.log(baliseZoneProps)

let baliseZonePropositionSpan = document.querySelector("#bob span");
console.log(baliseZonePropositionSpan);

let listeInputRadio = document.querySelectorAll(".zoneChoix input");
console.log(listeInputRadio);//récuperer tout les input de type radio

for (let i = 0; i < listeInputRadio.length; i++) {
    console.log(listeInputRadio[i]);
}

baliseZoneProps.innerText ="bobbdfsd"


let contenuTitre = "Azertype"
let contenuParagraphe = "L'application  !"

let div = `
    <div>
        <h1>${contenuTitre}</h1>
        <p style="color : blue">${contenuParagraphe}</p>
    </div>
    ` 
let body = document.querySelector("body")
body.innerHTML = div

//    event.target : renvoie l’élément HTML qui a déclenché l’événement ;
//event.key : la touche appuyée quand l’événement écouté est lié au clavier ;
//event.clientX et event.clientY : les coordonnées de la souris quand l’événement écouté est lié à la souris.

let bouton2 = document.createElement("button");
bouton2.id = "monBouton";
bouton2.textContent = "Cliquez-moi !";

body.appendChild(bouton2);
let nb = 0 
let monBouton = document.getElementById("monBouton");
monBouton.addEventListener("click", () => {
        nb++
        console.log("Vous avez cliqué "+ nb +" fois sur le bouton")
});

document.addEventListener('mousemove', (event) => {
    console.log(event.clientX);

});

let nouvelElement = document.createElement("div");//créer un nouvel élt sur la page 

// Récupérer un élément parent existant

let parentElement = document.getElementById("conteneur");


// Ajouter le nouvel élément au parent

parentElement.appendChild(nouvelElement);

// autre méthode : interpolation 



let baliseImage = document.getElementById("premiereImage");
baliseImage.setAttribute("alt", "Ceci est la nouvelle valeur de alt");//change l'attribut de l'élt désigné 

//<div class="listeMots centree actif photo"></div>
baliseImage.alt = "Ceci est une image de test modifiée";
baliseImage.classList.add("nouvelleClasse")//changer les class appliqués, pour les styles css
baliseImage.classList.remove("photo")


