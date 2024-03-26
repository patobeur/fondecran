


function updateWindowSize() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    document.getElementById('ww').textContent = width + 'px';
    document.getElementById('wh').textContent = height + 'px';
}
function initialisation() {
    // let w = 1920; // largeur en pixel de la captur écran
    // let h = 1200; // hauteur en pixel de la capture écran
let logoctif = true;
let menuactif = true;
let defaultbgimagefilename = 'capture_ecran'
let imagefilename = 'capture_ecran'
let menuElem = document.getElementById('menu')
let logo = document.getElementById('logoimage')

<<<<<<< HEAD

    // --------------------------------------------------------------------
    // Affichage du menu option lors du click
    // --------------------------------------------------------------------
    document.onclick = function (event) {
        if (event.target.id === 'html' || event.target.id === 'options' || event.target.id === 'body') {
            menuactif = !menuactif
            menuactif ? menuElem.classList.remove('hidden') : menuElem.classList.add('hidden');
        }
    };
    // --------------------------------------------------------------------
    // Couleur d'arrière plan (background-color)
    // seul les values existante en option dans le html sont prisent.
    // elles doivent exister dans le :root{} dans style.css
    // pour l'instant le select est fait main et non généré en js
    // --------------------------------------------------------------------
    document.getElementById('background-select').onchange = function () {
        var selectedValue = document.getElementById('background-select').value;
        document.body.style.background = 'var(' + selectedValue + ')';
    };

    // --------------------------------------------------------------------
    // largeur du logo en pixel
    // --------------------------------------------------------------------
    document.getElementById('width-logo').onchange = function () {
        var logoWidth = document.getElementById('width-logo').value;
        if (!isNaN(logoWidth) && logoWidth !== '' && logoWidth > 0) {
            document.querySelector('img[alt="brand logo"]').style.width = logoWidth + 'px';
        } else {
            alert('Veuillez entrer une valeur numérique positive pour la largeur.');
        }
    };
=======
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
>>>>>>> d0f82394dec68f9e313b1792b796f596b6fe74ce

// --------------------------------------------------------------------
// margin-top du logo
// --------------------------------------------------------------------
<<<<<<< HEAD
document.getElementById('margin-top-logo').onchange = function () {
	var logoMarginTop = document.getElementById('margin-top-logo').value;
	if (!isNaN(logoMarginTop) && logoMarginTop !== '') {
		document.querySelector('img[alt="brand logo"]').style.marginTop = logoMarginTop + 'px';
	} else {
		alert('Veuillez entrer une valeur numérique pour la marge au dessus.');
	}
};
// --------------------------------------------------------------------
// margin-left du logo
// --------------------------------------------------------------------
document.getElementById('margin-left-logo').onchange = function () {
	var logoMarginLeft = document.getElementById('margin-left-logo').value;
	if (!isNaN(logoMarginLeft) && logoMarginLeft !== '') {
		document.querySelector('img[alt="brand logo"]').style.marginLeft = logoMarginLeft + 'px';
	} else {
		alert('Veuillez entrer une valeur numérique pour la marge de gauche.');
	}
};

    // --------------------------------------------------------------------
    // margin du logo
    // --------------------------------------------------------------------
    // document.getElementById('margin-logo').onchange = function () {
    //     var logoMargin = document.getElementById('margin-logo').value;
    //     if (!isNaN(logoMargin) && logoMargin !== '') {
    //         document.querySelector('img[alt="brand logo"]').style.margin = logoMargin + 'px';
    //     } else {
    //         alert('Veuillez entrer une valeur numérique pour la marge.');
    //     }
    // };
=======
document.getElementById('width-logo').onchange = function () {
	var logoWidth = document.getElementById('width-logo').value;
	if (!isNaN(logoWidth) && logoWidth !== '' && logoWidth > 0) {
		document.querySelector('img[alt="brand logo"]').style.width = logoWidth + 'px';
	} else {
		alert('Veuillez entrer une valeur numérique positive pour la largeur.');
	}
};

// --------------------------------------------------------------------
// margin du logo
// --------------------------------------------------------------------
// document.getElementById('margin-logo').onchange = function () {
// 	var logoMargin = document.getElementById('margin-logo').value;
// 	if (!isNaN(logoMargin) && logoMargin !== '') {
// 		document.querySelector('img[alt="brand logo"]').style.margin = logoMargin + 'px';
// 	} else {
// 		alert('Veuillez entrer une valeur numérique pour la marge.');
// 	}
// };

// --------------------------------------------------------------------
// margin-top du logo
// --------------------------------------------------------------------
document.getElementById('margin-top-logo').onchange = function () {
	var logoMarginTop = document.getElementById('margin-top-logo').value;
	if (!isNaN(logoMarginTop) && logoMarginTop !== '') {
		document.querySelector('img[alt="brand logo"]').style.marginTop = logoMarginTop + 'px';
	} else {
		alert('Veuillez entrer une valeur numérique pour la marge au dessus.');
	}
};
// --------------------------------------------------------------------
// margin-left du logo
// --------------------------------------------------------------------
document.getElementById('margin-left-logo').onchange = function () {
	var logoMarginLeft = document.getElementById('margin-left-logo').value;
	if (!isNaN(logoMarginLeft) && logoMarginLeft !== '') {
		document.querySelector('img[alt="brand logo"]').style.marginLeft = logoMarginLeft + 'px';
	} else {
		alert('Veuillez entrer une valeur numérique pour la marge de gauche.');
	}
};
>>>>>>> d0f82394dec68f9e313b1792b796f596b6fe74ce

    // --------------------------------------------------------------------
    // dropZone pour ajouter l'image en arrière plan du body
    // --------------------------------------------------------------------
    
// --------------------------------------------------------------------
// dropZone pour ajouter l'image en arrière plan du body
// --------------------------------------------------------------------
var dropZoneBgImage = document.getElementById('drop-zone-bg-image');
var dropZoneLogo = document.getElementById('drop-zone-logo');

dropZoneBgImage.ondragover = function (event) {
	event.preventDefault();
	this.style.borderColor = 'green';
};
dropZoneBgImage.ondragleave = function (event) {
	this.style.borderColor = '#ccc';
};
dropZoneBgImage.ondrop = function (event) {
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
<<<<<<< HEAD
=======
};
dropZoneLogo.ondragover = function (event) {
	event.preventDefault();
	this.style.borderColor = 'green';
};
dropZoneLogo.ondragleave = function (event) {
	this.style.borderColor = '#ccc';
};
dropZoneLogo.ondrop = function (event) {
	event.preventDefault();
	this.style.borderColor = '#ccc';
	var files = event.dataTransfer.files;
	if (files.length > 0) {
		var fileReader = new FileReader();
		fileReader.onload = function (event) {
			console.log(logo)
			logo.src = event.target.result
			console.log(event)
		};
		fileReader.readAsDataURL(files[0]);
	}
>>>>>>> d0f82394dec68f9e313b1792b796f596b6fe74ce
};
    dropZoneLogo.ondragover = function (event) {
        event.preventDefault();
        this.style.borderColor = 'green';
    };
    dropZoneLogo.ondragleave = function (event) {
        this.style.borderColor = '#ccc';
    };
    dropZoneLogo.ondrop = function (event) {
        event.preventDefault();
        this.style.borderColor = '#ccc';
        var files = event.dataTransfer.files;
        if (files.length > 0) {
            var fileReader = new FileReader();
            fileReader.onload = function (event) {
                console.log(logo)
                logo.src = event.target.result
                console.log(event)
            };
            fileReader.readAsDataURL(files[0]);
        }
    };

<<<<<<< HEAD
    // --------------------------------------------------------------------
    // Bouton pour supprimer l'image de fond
    // --------------------------------------------------------------------
    document.getElementById('remove-background').onclick = function () {
        document.body.style.backgroundImage = '';
    };
    // --------------------------------------------------------------------
    // Bouton pour ne pas aficher le logo ???
    // --------------------------------------------------------------------
    document.getElementById('toggle-logo').onclick = function () {
        var logo = document.getElementById('logo');
        logo.style.display = (logo.style.display === 'none') ? 'block' : 'none';
    };
    // --------------------------------------------------------------------
    // Bouton pour la capture Écran
    // --------------------------------------------------------------------
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



    updateWindowSize();
    window.onresize = updateWindowSize;
}

window.onload = initialisation;
=======
// --------------------------------------------------------------------
// Bouton pour supprimer l'image de fond
// --------------------------------------------------------------------
document.getElementById('remove-background').onclick = function () {
	document.body.style.backgroundImage = '';
};
// --------------------------------------------------------------------
// Bouton pour ne pas aficher le logo ???
// --------------------------------------------------------------------
document.getElementById('toggle-logo').onclick = function () {
	var logo = document.getElementById('logo');
	logo.style.display = (logo.style.display === 'none') ? 'block' : 'none';
};
// --------------------------------------------------------------------
// Bouton pour la capture Écran
// --------------------------------------------------------------------
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
>>>>>>> d0f82394dec68f9e313b1792b796f596b6fe74ce
