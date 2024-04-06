
console.log(Date())

function updateWindowSize() {
	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

	document.getElementById('ww').textContent = width;
	document.getElementById('wh').textContent = height;
}
function initialisation() {
	// let w = 1920; // largeur en pixel de la captur écran
	// let h = 1200; // hauteur en pixel de la capture écran
	// let logoctif = true;
	let menuactif = true;
	// let defaultbgimagefilename = 'capture_ecran'
	// let imagefilename = 'capture_ecran'
	let menuElem = document.getElementById('menu')
	let logo = document.getElementById('logoimage')
	// let close = document.getElementById('close')
	let zonelogo = document.getElementById('zonelogo')
	let zonebackground = document.getElementById('zonebackground')
	let zonebgimage = document.getElementById('drop-zone-bg-image')
	// var zonebgimage = document.getElementById('drop-zone-bg-image');
	// var zonelogo = document.getElementById('drop-zone-logo');

	// --------------------------------------------------------------------
	// Affichage du menu option lors du click
	// --------------------------------------------------------------------
	document.onclick = function (event) {
		if (event.target.id === 'html' || event.target.id === 'options' || event.target.id === 'body' || event.target.id === 'close') {
			menuactif = !menuactif
			menuactif ? menuElem.classList.remove('hidden') : menuElem.classList.add('hidden');
			menuactif ? document.body.classList.remove('zoom-in') : document.body.classList.add('zoom-in');
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

	// --------------------------------------------------------------------
	// dropZone pour ajouter l'image en arrière plan du body
	// --------------------------------------------------------------------

	zonebgimage.ondragover = function (event) {
		event.preventDefault();
		this.style.borderColor = 'green';
	};
	zonebgimage.ondragleave = function (event) {
		this.style.borderColor = '#ccc';
	};
	zonebgimage.ondrop = function (event) {
		event.preventDefault();
		this.style.borderColor = '#ccc';
		var files = event.dataTransfer.files;
		if (files.length > 0) {
			var fileReader = new FileReader();
			fileReader.onload = function (event) {
				document.body.style.backgroundImage = 'url(' + event.target.result + ')';
				zonebackground.style.display = 'flex';
				zonebgimage.style.display = 'none';

			};
			fileReader.readAsDataURL(files[0]);
		}
	};
	zonelogo.ondragover = function (event) {
		event.preventDefault();
		this.style.borderColor = 'green';
	};
	zonelogo.ondragleave = function (event) {
		this.style.borderColor = '#ccc';
	};
	zonelogo.ondrop = function (event) {
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
			fileReader.readAsDataURL(files[0])
		}
	};

	// --------------------------------------------------------------------
	// Bouton pour supprimer l'image de fond
	// --------------------------------------------------------------------
	document.getElementById('remove-background').onclick = function () {
		document.body.style.backgroundImage = ''
		zonebackground.style.display = ''
		zonebgimage.style.display = 'flex'
	};
	// --------------------------------------------------------------------
	// Bouton pour ne pas aficher le logo ???
	// --------------------------------------------------------------------
	document.getElementById('toggle-logo').onclick = function () {
		logo.style.display = (logo.style.display === 'none') ? 'block' : 'none';
		zonelogo.style.display = (logo.style.display === 'none') ? 'none' : 'block';
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
