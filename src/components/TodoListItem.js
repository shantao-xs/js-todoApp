/**组块：复选框，todo条
 * 功能：显示todo条的内容，可以勾选、取消复选框（已完成则增加颜色变灰、删除线的样式），改变todo条的状态，×删除todo条
 * 功能联动：ListItem仅提供一条todo涉及到的动作，具体的呈现、筛选、“删除”操作，需要List来处理
 * ? 需要参数：value={inputText} onChange={onInput}
 * ? 样式：
 */
//* tips: 复选框的内置属性：checked决定是否勾选复选框；复选框-语法描述用toggle；所有的input元素，包括type=复选框，它的触发事件是onChange而不是onClick

import React from "react";



export const TodoListItem = (props)=>{
    const {todos, todo,setTodos,key,setTodoStatus} = props;
    //注意这里只修改todo的status
    //! 问题出在：1. 如果一定要把函数都写在组件里而不是app.js里，会出现setTodo is not a function的报错 2.如果直接用setTodoStatus('cleared')，它并不知道要让哪个todo的status被更新，还是useReact没搞清楚的问题
    const handleToggle = (status)=>{
        const updatedTodo = todos.map((todo)=>{
            if (todo.id === key){
              return {...todo, status: todo.status === 'active' ? 'completed' : 'active'};
            } else {
              return todo;
            }
          });
        setTodos(updatedTodo);
    }

    /**const handleToggle = () => {
        const updatedStatus = todo.status === 'active' ? 'completed' : 'active';
        setTodoStatus({ ...todo, status: updatedStatus });
    }*/
    
    const handleDelete = (status)=>{
        setTodoStatus({ ...todo, status: 'deleted' });
    }
    
    return(
        <div>
            <label>
                <input 
                    type="checkbox" 
                    onChange={()=>handleToggle(todo.status)}
                    checked={todo.status==='completed'}
                />
                {todo.label}
                <button
                    onClick={()=>handleDelete(todo.status)}
                >
                    delete
                </button>
            </label>
        </div>
    )
}