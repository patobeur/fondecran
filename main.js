// let w = 1920; // largeur en pixel de la captur écran
// let h = 1200; // hauteur en pixel de la capture écran
let logoctif = true;
let menuactif = true;
let menuElem = document.getElementById('menu')

document.onclick = function (event) {
    if (event.target.id === 'html' || event.target.id === 'options' || event.target === document.body) {
        menuactif = !menuactif
        menuactif ? menuElem.classList.remove('hidden') : menuElem.classList.add('hidden');
    }
};
document.getElementById('background-select').onchange = function () {
    var selectedValue = document.getElementById('background-select').value;
    document.body.style.background = 'var(' + selectedValue + ')';
};

// largeur du logo
document.getElementById('width-logo').onchange = function () {
    var logoWidth = document.getElementById('width-logo').value;
    if (!isNaN(logoWidth) && logoWidth !== '') {
        document.querySelector('img[alt="brand logo"]').style.width = logoWidth + 'px';
    } else {
        alert('Veuillez entrer une valeur numérique pour la largeur.');
    }
};

// margin du logo
document.getElementById('margin-logo').onchange = function () {
    var logoMargin = document.getElementById('margin-logo').value;
    if (!isNaN(logoMargin) && logoMargin !== '') {
        document.querySelector('img[alt="brand logo"]').style.margin = logoMargin + 'px';
    } else {
        alert('Veuillez entrer une valeur numérique pour la marge.');
    }
};

// zone d'ajout de l'image de fond perso
var dropZone = document.getElementById('drop-zone');
dropZone.ondragover = function (event) {
    event.preventDefault();
    this.style.borderColor = 'green';
};
dropZone.ondragleave = function (event) {
    this.style.borderColor = '#ccc';
};
dropZone.ondrop = function (event) {
    event.preventDefault();
    this.style.borderColor = '#ccc';
    var files = event.dataTransfer.files;
    if (files.length > 0) {
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
            document.body.style.backgroundImage = 'url(' + event.target.result + ')';
        };
        fileReader.readAsDataURL(files[0]);
    }
};

// Bouton pour supprimer l'image de fond
document.getElementById('remove-background').onclick = function () {
    document.body.style.backgroundImage = '';
};
// Bouton pour ne pas aficher le logo ???
document.getElementById('toggle-logo').onclick = function () {
    var logo = document.getElementById('logo');
    logo.style.display = (logo.style.display === 'none') ? 'block' : 'none';
};
// Bouton pour la capture Écran
document.getElementById('screenshotBtn').addEventListener('click', function () {
    console.log('capture écran ...')
    menuactif = true;
    menuElem.classList.add('hidden');
    html2canvas(document.body).then(function (canvas) {
        // Convertir le canvas en une image
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

        // Créer un lien pour télécharger l'image
        var link = document.createElement('a');
        link.download = 'capture-decran.png';
        link.href = image;
        link.click();
    });
});
