'use strict';
const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');

// Adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// Prevent window being garbage collected
let mainWindow;

function onClosed() {
	// Dereference the window
	// For multiple windows store them in an array
	mainWindow = null;
}

function createMainWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		maxWidth: 800,
		maxHeight: 600,
		backgroundColor: '#080f1f',
		icon: path.join(__dirname, 'dist/images/light-icon-rb.ico'),
	});

	const menuTemplate = [
		{
			label: 'File',
			submenu: [
				{
					label: 'Save Profile',
					click() {
						app.quit();
					}
				},
				{
					label: 'Settings',
					click() {
						console.log('settings');
					}
				}
			]
		}
	];

	const menu = Menu.buildFromTemplate(menuTemplate);
	Menu.setApplicationMenu(menu);
	//win.setMenu(menu);
	//win.setMenu(null);
	win.loadURL(`file://${__dirname}/dist/index.html`);
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});
