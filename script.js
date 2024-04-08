function creerDivAvecTexte() {
    var nouvelleDiv = document.createElement('div');
    var texte = document.createTextNode('Bravo c\'est en prod');
    nouvelleDiv.appendChild(texte);
    document.body.appendChild(nouvelleDiv);
}