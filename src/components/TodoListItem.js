/**组块：复选框，todo条
 * 功能：显示todo条的内容，可以勾选、取消复选框（已完成则增加颜色变灰、删除线的样式），改变todo条的状态，×删除todo条
 * 功能联动：ListItem仅提供一条todo涉及到的动作，具体的呈现、筛选、“删除”操作，需要List来处理
 * ? 需要参数：value={inputText} onChange={onInput}
 * ? 样式：
 */
//* tips: 复选框的内置属性：checked决定是否勾选复选框；复选框-语法描述用toggle；所有的input元素，包括type=复选框，它的触发事件是onChange而不是onClick

import React from "react";



export const TodoListItem = (props)=>{
    const {targetTodo,handleToggle,handleDelete} = props;
    //注意这里只修改todo的status
   

    
    
    
    return(
        <li className="list-group-item rounded container
                        d-flex justify-content-between align-items-center">
            <label className="form-check-label">
                <input 
                    className="form-check-input me-2"
                    type="checkbox" 
                    onChange={()=>{handleToggle(targetTodo)}}
                    checked={targetTodo.status==='completed'}
                />
                {targetTodo.label}
            </label>
            <button 
                type="button" 
                className="btn-close" 
                aria-label="Close"
                onClick={()=>{handleDelete(targetTodo)}}
            />         
        </li>
    )
}