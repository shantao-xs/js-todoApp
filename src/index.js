/**react如何应用样式？
 * 1. 在每个组件的return里用className写样式，通过App.js继承后，通过index.js渲染后，应用在index.html上
 * 2. 在index.js中渲染每个组件，通过index.js渲染后，应用在index.html上（存疑）
 * 
 * 搭配bootstrap使用样式应用样式
 * 1.安装 Bootstrap
 * 2.创建 main.scss 文件
 * 3.编译，转为main.css
 * 3.在组件中引入main.css
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoApp } from './App';
import './css/style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
