const {app,BrowserWindow} =  require("electron");
app.on('ready', () => {
 
  mainWindow = new BrowserWindow({
      titleBarStyle: 'hidden',
      width: 1920,
      height: 1080,
      show: false
  });
  
  splash = new BrowserWindow({
      width: 1920, height: 1080, transparent: false, alwaysOnTop: true
    
    });
  splash.loadURL(`file://${__dirname}/splash.html`);
  mainWindow.loadURL(`file://${__dirname}/index.html`);

   mainWindow.once('ready-to-show', () => {
        splash.destroy();
        mainWindow.show();
})
});
