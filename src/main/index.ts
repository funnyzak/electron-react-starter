import { app, BrowserWindow } from 'electron';

const config = require('@/config');

let browerWindow;

function createWindow() {
  // https://www.electronjs.org/zh/docs/latest/api/browser-window
  browerWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    fullscreenable: false,
    maximizable: false,
    movable: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  const devMode = process.env.NODE_ENV === 'development';
  const winURL = devMode
    ? `http://${config.devServiceConfig.host}:${config.devServiceConfig.port}`
    : `file://${__dirname}/index.html`;
  browerWindow.loadURL(winURL);

  if (devMode) {
    browerWindow.resizable = true;
    browerWindow.webContents.openDevTools();
  }
}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', () => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
