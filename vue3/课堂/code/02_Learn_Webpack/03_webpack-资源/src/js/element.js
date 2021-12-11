// import "css-loader!../css/style.css";
import "../css/style.css";
import "../css/title.less";
import "../css/image.css";
import "../font/iconfont.css";

import zzhnImage from '../img/zznh.png';

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好啊,李银河";

// 设置背景图片
const bgDivEl = document.createElement('div');
bgDivEl.className = "image-bg";

// 设置img元素的src
const imgEl = document.createElement('img');
// imgEl.src = '../img/zznh.png'; 不可以这么写, 这么到时候渲染到页面上是根据根目录来查找, 就找不到, 要像一个模块一样引进来, require('../img/zznh.png')
imgEl.src = zzhnImage;

// i元素
const iEl = document.createElement('i');
iEl.className = "iconfont icon-ashbin";

document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgEl);
document.body.appendChild(iEl);
