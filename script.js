function creerDivAvecTexte() {
    const userInput = document.getElementById('userInput').value;
    const newDiv = document.createElement('div');
    newDiv.innerHTML = userInput;
    document.body.appendChild(newDiv);
}
