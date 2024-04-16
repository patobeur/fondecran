class FullScreenManager {
	conslog = true
	FullScreenTriggerDiv = false
	isFullScreenOn = false
	topbutton = true
	constructor() {
		this.rootpath = 'vendor/';
	}
	init(conf = false) {
		if (typeof conf === 'object') {
			if (typeof conf.topbutton === 'boolean') this.topbutton = conf.topbutton
		}
		if (this.topbutton) {
			this.#addDiv()
			this.#activatebuttonsfullscreen()
		}

		document.documentElement.onfullscreenchange = (e) => {
			if (this.conslog) console.log('fullscreen change to ', this.isFullScreenOn)
			if (this.topbutton) this.FullScreenTriggerDiv.className = this.isFullScreenOn ? "full" : ""
		};
	}
	#addDiv() {
		this.FullScreenTriggerDiv = document.createElement('div')
		this.FullScreenTriggerDiv.id = 'fullscreen'
		let css = '#fullscreen {position: absolute;height: 40px;width: 40px;right: 5px;top: 5px;background-image: url(' + this.rootpath + 'FullScreenManager/resize_large.svg);background-position: center;background-size: cover;background-repeat: no-repeat;border-radius: 50%;display: flex;align-items: center;justify-content: center;font-size: 35px;line-height: 35px;cursor: pointer;z-index:9999}' +
			'#fullscreen.full{background-image: url(' + this.rootpath + 'FullScreenManager/resize_small.svg);z-index:9999}' +
			'#fullscreen.hidden{display:none;}';
		this.addCss(css, 'FullScreenManager');

		document.body.appendChild(this.FullScreenTriggerDiv)

	}
	get_FullScreenTriggerDiv() {
		return this.FullScreenTriggerDiv
		// return this.isFullScreenOn
	}
	addCss(stringcss, styleid) {
		let style = document.createElement('style');
		style.textContent = stringcss
		style.id = styleid
		document.getElementsByTagName('head')[0].appendChild(style);
	}
	triggerFullsScreen() {
		if (this.isFullScreenOn === true) {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) {
				window.top.document.msExitFullscreen();
			}
			this.isFullScreenOn = false;
		} else {
			const elem = document.documentElement;
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.mozRequestFullScreen) { /* Firefox */
				elem.mozRequestFullScreen();
			} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) { /* IE/Edge */
				elem = window.top.document.body; //To break out of frame in IE
				elem.msRequestFullscreen();
			}
			this.isFullScreenOn = true;
		}
	}
	#activatebuttonsfullscreen() {
		// 💻🖥️📱
		this.FullScreenTriggerDiv.addEventListener('click', (ele) => {
			this.triggerFullsScreen()
		})
	}
}
