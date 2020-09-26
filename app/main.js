const { app, BrowserWindow } = require('electron');

// 应用准备就绪时，创建一个浏览器窗口，赋值给主窗口
app.on('ready', () => {
  console.log('OldPig render test');
  let mainWindow = new BrowserWindow({
    // 设置窗口的长和宽
    width: 300, 
    height: 400,
    webPreferences: {
      nodeIntegration: true
    }
  });
  // 主窗口加载页面
  mainWindow.loadFile('./app/index.html');

  // 使用electron-squirrel-startup返回true，则退出主程序
  if(require('electron-squirrel-startup'))
    return;
});