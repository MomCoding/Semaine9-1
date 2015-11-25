$liste = document.querySelector("#liste");
$texte = document.querySelector("#texte");
$ajouter = document.querySelector("#ajouter");
$annuler = document.querySelector("#annuler");


tableau = ["Bob", "Julien", "Roger"];

function afficherListe() {
    elements = "";
    for (i = 0; i < tableau.length; i++) {
        elements += "<li>" + tableau[i] + "</li>";
    }
    $liste.innerHTML = elements;
}

function ajouter() {
    tableau.push($texte.value);
    afficherListe();
}

function annuler() {
    tableau.pop();
    afficherListe();
}


$ajouter.onclick = ajouter;
$annuler.onclick = annuler;
afficherListe();