const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');

const basePath = path.resolve(__dirname, '..');

const ttfPath = path.join(basePath, 'icon-fonts/demo/iconfont.ttf');
const woffPath = path.join(basePath, 'icon-fonts/demo/iconfont.woff');
const targetName = 'element-icons'

const sourceCmd = `cp ${ttfPath} ${ttfPath.replace('demo/iconfont', targetName)}`;
const ttfCmd = `cp ${ttfPath} ${ttfPath.replace('icon-fonts/demo/iconfont', 'src/element/theme/fonts/' + targetName)}`;
const woffCmd = `cp ${woffPath} ${woffPath.replace('icon-fonts/demo/iconfont', 'src/element/theme/fonts/' + targetName)}`;

console.log('transferring fonts files:');
const queue = [sourceCmd, ttfCmd, woffCmd];
let tick = 200;
queue.forEach((cmd) => {
  setTimeout(() => {
    if (shell.exec(cmd).code !== 0) {
      console.log(`  ${cmd.replace(new RegExp(basePath, 'g'), '~')} ${chalk.red('failed!')}`)
    } else {
      console.log(`  ${cmd.replace(new RegExp(basePath, 'g'), '~')} ${chalk.cyan('successful!')}`)
    }
  }, tick += 200);
});
