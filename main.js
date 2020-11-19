const { app, BrowserWindow, ipcMain } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 310,
    height: 200,
    useContentSize: true,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false,
    resizable: false
  })

  ipcMain.on('resize', (e, height) => {
    win.setContentSize(300, parseInt(height));
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
