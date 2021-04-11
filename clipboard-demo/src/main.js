const electron = require('electron')
const path = require('path')
const { app, Tray } = electron

app.on('ready', _ => {
    const tray = new Tray(path.join('src', 'electron-logo.png'))
    
})