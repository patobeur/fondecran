class Main {
	constructor() {
		this._FSM = new FullScreenManager()
		// this._LSF = new LocalStorageManager()
		this._OM = new OptionsManager()
	}
	init() {
		// this._LSF.init();
		this._OM.init(this._FSM);
	}
}
window.onload = () => {
	const _Main = new Main()
	_Main.init();
};
