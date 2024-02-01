/**需要功能：
 *  - 新增todo
    - 勾选todo状态：完成、未完成
    - 删除todo
    - 筛选todo状态：all/active/complete
    - 清除所有complete状态todo
    - bonus：拖动todo排序
 */

    /**
 * 全局与局部作用域：函数之外声明的就是全局变量，在整个项目中都可使用，比如filterStatus和todos
 */

import React, { useState } from "react";
import { TodoHeader, TodoInput, TodoList, TodoFooter } from "./components";

//!使用一个参数，用来收集所有待筛选的数据集合，比如用于status筛选或者delete筛选
const defaultTodos = [
    {
        id:'01',
        label:'example: finished the todoApp challenge',
        status: 'active',
    },{
        id:'02',
        label:'example: share your experience in the community',
        status: 'active',
    }
]

export const TodoApp = ()=>{
    const [todos,setTodos] = React.useState(defaultTodos);
    const [todoStatus,setTodoStatus] = React.useState('active');
    const [filterStatus, setFilterStatus] = React.useState('all');
    
    return(
        <div>
            <TodoHeader />
            <TodoInput setTodos={setTodos}/>
            <TodoList todos={todos} setTodoStatus={setTodoStatus} filterStatus={filterStatus}/>
            <TodoFooter todos={todos} setTodoStatus={setTodoStatus} setFilterStatus={setFilterStatus} />
        </div>
    )
}