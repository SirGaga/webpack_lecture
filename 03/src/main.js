// 1.使用commonjs的模块化的规范
const {sum,mul} = require('./js/mathUtils');

console.log(sum(20,30));
console.log(mul(20,50));
// 2.使用ES6的模块化的规范
import {height,name,age} from './js/info';

require('./css/normal.css');

import './css/special.less';


console.log(name);
console.log(height);
console.log(age);

document.writeln("<h2>hello webpack</h2>");