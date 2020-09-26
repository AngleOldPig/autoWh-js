const { createWindowsInstaller } = require('electron-winstaller');
const path = require('path');

const iconPath = path.resolve(__dirname, '../icons/Icon.ico');

const result = createWindowsInstaller({
    title: 'autoWh',
    authors: 'OldPig',
    appDirectory: path.resolve(
        __dirname,
        '../build/autowh-win32-x64'
    ),
    outputDirectory: path.resolve(
        __dirname,
        '../build/autowh-win32-x64-installer'
    ),
    icon: iconPath,
    setupIcon: iconPath,
    name: 'autoWh',
    setupExe: 'autoWh-Setup.exe',
    setupMsi: 'autoWh-Setup.msi',
});

result
    .then(() => console.log('Success'))
    .catch(error => console.error('Failed', error));