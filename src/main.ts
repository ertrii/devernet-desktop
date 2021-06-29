import { app, BrowserWindow } from 'electron'
import * as path from 'path'

function createWindow() {
    const mainWindow = new BrowserWindow({
        height: 1200,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        width: 800
    })
    mainWindow.loadFile(path.join(__dirname, '../index.html'))
    mainWindow.webContents.openDevTools()
}

app.on('ready', () => {
    createWindow()
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
