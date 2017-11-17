const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let window;
function createWindow() {
	window = new BrowserWindow();
	window.maximize();
	process.env.GOOGLE_API_KEY = 'AIzaSyD3H6DflNeWKtlSNTMlvHaK9Z-6WnnqmLY';
	window.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}))
}

app.on('ready', createWindow)
