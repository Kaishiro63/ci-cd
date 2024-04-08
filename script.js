function creerDivAvecTexte() {
    var nouvelleDiv = document.createElement('div');
    var texte = document.createTextNode('J\'adore la vie');
    nouvelleDiv.appendChild(texte);
    document.body.appendChild(nouvelleDiv);
}