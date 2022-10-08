// webpack 入口文件 =>main.js
// react18 以前的用法
// 导入文件
import React from "react";
import ReactDOM from "react-dom";

// 创造元素
const h1=React.createElement('h1',null,'helloworld!!')
// 渲染元素到指定容器
ReactDOM.render(h1,document.querySelector('#root'))