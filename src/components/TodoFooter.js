import React from "react";
//*tips:箭头函数 :，如果函数体是一个表达式，那么可以省略大括号 {}，并且函数会隐式返回该表达式的值。如果函数体是一个语句块，那么需要使用大括号，并且可能需要显式使用 return 语句。
export const TodoFooter = (props)=>{
    const {todos, setTodoStatus, setFilterStatus} = props;

    const handleFilter = (status)=>{
       setFilterStatus(status); 
    }

    const handleClearAll = (todos, status)=>{
        const completedTodos = todos.filter((todo)=> todo.status==='completed');
        completedTodos.forEach((todo)=>setTodoStatus('deleted'));
    }

    const completedCount = todos.filter((todo)=> todo.status==='completed').length;

    return(
        <div>
            <span>{completedCount} {completedCount>1?'items':'item'} left</span>
            
            <div>
                <button onClick={()=>{handleFilter('all')}}>
                    all
                </button>
                <button onClick={()=>{handleFilter('active')}}>
                    active
                </button>
                <button onClick={()=>{handleFilter('completed')}}>
                    completed
                </button>
            </div>

            <button onClick={()=>{handleClearAll(todos, 'deleted')}}>
                clear all completed
            </button>
        </div>
    )
}