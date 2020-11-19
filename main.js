const { app, BrowserWindow, ipcMain } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 220,
    minWidth: 220,
    useContentSize: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    },
    frame: false
  })

  ipcMain.on('resize', (e, width, height) => {
    win.setContentSize(parseInt(width), parseInt(height));
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
