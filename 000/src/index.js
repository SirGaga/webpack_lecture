/**
 * index.js: webpack入口起点文件
 *
 * 1.运行指令
 *  开发环境：webpack ./src/index.js -o ./build/ --mode=development
 *      webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
 *      整体打包环境时开发环境
 *
 *  生产环境：webpack ./src/index.js -o ./build/ --mode=production
 * 2.结论：
 *  1）webpack能处理js和json资源，不能处理样式和图片资源
 *  2）生产环境和开发环境将ES模块化编译成浏览器能识别的模块化
 *  3）生产环境和开发环境的区别：多一个压缩js代码
 *
 */

import data from './data.json';

// import './index.css' webpack打包报错

console.log(data);

function sum(num1, num2){
    return num1 + num2;
}

console.log(sum(1, 2));