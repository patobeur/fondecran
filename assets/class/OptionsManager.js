"use strict";
class OptionsManager {
	constructor() {
	}
	init = (FSM) => {
		this._FSM = FSM
		this._FSM.init({ topbutton: false });

		this.FullScreenTriggerDiv = this._FSM.get_FullScreenTriggerDiv() ?? 'undefined';

		this.menuActive = true;
		this.infoscreenActive = false;


		this.optionMenu = document.getElementById('menu')
		this.logo = document.getElementById('logoimage')
		// this.logo = document.querySelector('img[alt="brand logo"]')
		this.zonelogo = document.getElementById('zonelogo')
		this.zonebackground = document.getElementById('zonebackground')
		this.backgroundSelect = document.getElementById('background-select')
		this.zonebgimage = document.getElementById('drop-zone-bg-image')




		this.display_Options();
		this.update_BackgroundColor();
		this.update_LogoImage_size();
		this.update_LogoImage_margintop();
		this.update_LogoImage_marginleft();
		this.upload_BackgroundImage();
		this.upload_LogoImage();
		this.dropZone_LogoImage();
		this.dropZone_BackgroundImage();
		this.display_BackgroundImage();
		this.display_LogoImage();
		this.display_infoscreen()
		this.screenCapture();
		this.updateWindowSize();
		this.toggle_FullScreen()

		window.onresize = this.updateWindowSize;
	}
	display_infoscreen() {
		// --------------------------------------------------------------------
		// Bouton pour afficher les informations concernant l'image générée
		// --------------------------------------------------------------------
		this.popinfoscreen = document.getElementById('popinfoscreen')
		this.popinfoscreen.onclick = () => {
			this.infoscreenActive = !this.infoscreenActive
			this.infoscreenActive
				? this.popinfoscreen.classList.add('active')
				: this.popinfoscreen.classList.remove('active');
		};
	}
	display_Options() {
		// --------------------------------------------------------------------
		// Affichage du menu option lors du clique
		// --------------------------------------------------------------------
		document.onclick = (event) => {
			if (event.target.id === 'html' || event.target.id === 'options' || event.target.id === 'body' || event.target.id === 'close') {
				this.menuActive = !this.menuActive
				this.menuActive ? this.optionMenu.classList.remove('hidden') : this.optionMenu.classList.add('hidden');
				this.menuActive ? document.body.classList.remove('zoom-in') : document.body.classList.add('zoom-in');
			}
		};
	}
	update_BackgroundColor() {
		// --------------------------------------------------------------------
		// Couleur d'arrière plan (background-color)
		// seul les values existante en option dans le html sont prisent.
		// elles doivent exister dans le :root{} dans style.css
		// pour l'instant le select est fait main et non généré en js
		// --------------------------------------------------------------------
		this.backgroundSelect.onchange = () => {
			var selectedValue = this.backgroundSelect.value;
			document.body.style.background = 'var(' + selectedValue + ')';
		};
	}
	update_LogoImage_size() {
		// --------------------------------------------------------------------
		// largeur du logo en pixel
		// --------------------------------------------------------------------
		this.widthlogo = document.getElementById('width-logo')
		this.widthlogo.onchange = () => {
			var value = this.widthlogo.value;
			if (!isNaN(value) && value !== '' && value > 0) {
				this.logo.style.width = value + 'px';
			} else {
				alert('Veuillez entrer une valeur numérique positive pour la largeur.');
			}
		};
	}
	update_LogoImage_margintop() {
		// --------------------------------------------------------------------
		// margin-top du logo
		// --------------------------------------------------------------------
		this.margintoplogo = document.getElementById('margin-top-logo')
		this.margintoplogo.onchange = () => {
			var value = this.margintoplogo.value;
			if (!isNaN(value) && value !== '') {
				this.logo.style.marginTop = value + 'px';
			} else {
				alert('Veuillez entrer une valeur numérique pour la marge au dessus.');
			}
		};
	}
	update_LogoImage_marginleft() {
		// --------------------------------------------------------------------
		// margin-left du logo
		// --------------------------------------------------------------------
		this.marginleftlogo = document.getElementById('margin-left-logo')
		this.marginleftlogo.onchange = () => {
			var value = this.marginleftlogo.value;
			if (!isNaN(value) && value !== '') {
				this.logo.style.marginLeft = value + 'px';
			} else {
				alert('Veuillez entrer une valeur numérique pour la marge de gauche.');
			}
		};
	}
	upload_BackgroundImage() {
		// --------------------------------------------------------------------
		// selection du fichier pour ajouter l'image en arrière plan du body
		// --------------------------------------------------------------------
		this.backgroundupload = document.getElementById('background-upload')
		this.backgroundupload.addEventListener('change', (event) => {
			if (event.target.files.length > 0) {
				var backgroundImageFile = event.target.files[0];
				var backgroundReader = new FileReader();

				backgroundReader.onload = (e) => {
					document.body.style.backgroundImage = 'url(' + e.target.result + ')';
					this.zonebackground.style.display = 'flex';
					this.zonebgimage.style.display = 'none';
				};
				backgroundReader.readAsDataURL(backgroundImageFile);
			}
		});
	}
	upload_LogoImage() {
		// --------------------------------------------------------------------
		// selection du fichier pour ajouter un logo
		// Gestion du téléchargement du logo
		// --------------------------------------------------------------------
		document.getElementById('logo-upload').addEventListener('change', (event) => {
			if (event.target.files.length > 0) {
				var logoFile = event.target.files[0];
				var logoReader = new FileReader();

				logoReader.onload = (e) => {
					this.logo.src = e.target.result;
				};
				logoReader.readAsDataURL(logoFile);
			}
		});
	}
	dropZone_LogoImage() {
		// --------------------------------------------------------------------
		// dropZone pour ajouter l'image en arrière plan du body
		// --------------------------------------------------------------------
		this.zonebgimage.ondragover = (event) => {
			event.preventDefault();
			this.style.borderColor = 'green';
		};
		this.zonebgimage.ondragleave = (event) => {
			this.style.borderColor = '#ccc';
		};
		this.zonebgimage.ondrop = (event) => {
			event.preventDefault();
			this.style.borderColor = '#ccc';
			var files = event.dataTransfer.files;
			if (files.length > 0) {
				var fileReader = new FileReader();
				fileReader.onload = (event) => {
					document.body.style.backgroundImage = 'url(' + event.target.result + ')';
					this.zonebackground.style.display = 'flex';
					this.zonebgimage.style.display = 'none';

				};
				fileReader.readAsDataURL(files[0]);
			}
		};
	}
	dropZone_BackgroundImage() {
		this.zonelogo.ondragover = function (event) {
			event.preventDefault();
			this.style.borderColor = 'green';
		};
		this.zonelogo.ondragleave = function (event) {
			this.style.borderColor = '#ccc';
		};
		this.zonelogo.ondrop = function (event) {
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
	}
	display_BackgroundImage() {
		// --------------------------------------------------------------------
		// Bouton pour supprimer l'image de fond
		// --------------------------------------------------------------------
		document.getElementById('remove-background').onclick = () => {
			document.body.style.backgroundImage = ''
			this.zonebackground.style.display = ''
			this.zonebgimage.style.display = 'flex'
		};
	}
	display_LogoImage() {
		// --------------------------------------------------------------------
		// Bouton pour ne pas aficher le logo ???
		// --------------------------------------------------------------------
		document.getElementById('toggle-logo').onclick = () => {
			this.logo.style.display = (this.logo.style.display === 'none') ? 'block' : 'none';
			this.zonelogo.style.display = (this.logo.style.display === 'none') ? 'none' : 'block';
		};
	}
	toggle_FullScreen() {
		// --------------------------------------------------------------------
		// Bouton pour switcher le Mode pleine écran ???
		// --------------------------------------------------------------------
		if (!this._FSM.isFullScreenOn) document.getElementById('toggle-fullscreen').checked = true
		document.getElementById('toggle-fullscreen').onclick = (e) => {
			console.log('switch')
			this._FSM.triggerFullsScreen()
		};
	}
	screenCapture() {
		// --------------------------------------------------------------------
		// Bouton pour la capture Écran
		// --------------------------------------------------------------------
		document.getElementById('screenshotBtn').addEventListener('click', () => {
			console.log('capture écran ...')
			// fullscreen
			if (this._FSM.topbutton && this.FullScreenTriggerDiv != 'undefined') {
				this.FullScreenTriggerDiv.classList.add('hidden');
			}

			this.menuActive = true;
			this.optionMenu.classList.add('hidden');
			html2canvas(document.body).then((canvas) => {
				// Convertir le canvas en une image
				var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

				// Créer un lien pour télécharger l'image
				var link = document.createElement('a');
				link.download = 'capture-decran.png';
				link.href = image;
				link.click();

				if (this._FSM.topbutton && this.FullScreenTriggerDiv != 'undefined') {
					this.FullScreenTriggerDiv.classList.remove('hidden');
				}
				this.optionMenu.classList.remove('hidden');
			});

		});
	}
	updateWindowSize() {
		this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		document.getElementById('ww').textContent = this.width;
		document.getElementById('wh').textContent = this.height;
	}
}
