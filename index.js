const { app, BrowserWindow } = require('electron');

//check for app updates
const { autoUpdater } = require('electron-updater');
autoUpdater.checkForUpdatesAndNotify();

app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });

    mainWindow.loadURL('https://www.mblogisticsgroup.co.uk/login');
    // hide menu
    mainWindow.setMenu(null);

    // if iframe goes to homepage redirect to login
    mainWindow.webContents.on('did-navigate', (event, url) => {
        if (url === 'https://www.mblogisticsgroup.co.uk/') {
            mainWindow.loadURL('https://www.mblogisticsgroup.co.uk/login');
        }
    });
    

    // Optional: Open DevTools for debugging
    // mainWindow.webContents.openDevTools();
});
