import React from "react";

/**组块：todo logo，黑白模式图标
 * 功能：切换黑白模式
 * ? 需要参数：
 * ? 样式：
 * 
 * todo：header组件的样式，我应该写在这里还是index.js还是index.html?
 */

export const TodoHeader = ()=>{
    const [bgMode,setBgMode] = React.useState('dark');

    //切换背景的mode，并在css中改变应该渲染的样式
    const handleBgMode=()=>{
        setBgMode(bgMode==='dark'?'light':'dark');
        document.body.classList.toggle(bgMode==='dark'?'dark-mode':'light-mode');
    }

    return(
        <header>
            <div className="container">
                <h1>TODO</h1>
                <button
                    onClick={handleBgMode}
                >
                    {bgMode==='dark'? '太阳图标' : '月亮图标'}
                </button>
            </div> 
        </header>
    )
}