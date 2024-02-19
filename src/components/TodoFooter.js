import React from "react";
//*tips:箭头函数 :，如果函数体是一个表达式，那么可以省略大括号 {}，并且函数会隐式返回该表达式的值。如果函数体是一个语句块，那么需要使用大括号，并且可能需要显式使用 return 语句。


export const TodoFooter = (props)=>{
    const {todos, handleClearAll,setFilterStatus} = props;

    const handleFilter = (status)=>{
       setFilterStatus(status); 
    }
  

    const completedCount = todos.filter((todo)=> todo.status==='completed').length;

    return(
        <section>
            <div className="container d-flex justify-content-between align-items-center">
                <span>{completedCount} {completedCount>1?'items':'item'} left</span>
                <div class="btn-group">
                    <a onClick={()=>{handleFilter('all')}} class="btn btn-primary active" aria-current="page">all</a>
                    <a onClick={()=>{handleFilter('active')}} class="btn btn-primary">active</a>
                    <a onClick={()=>{handleFilter('completed')}} class="btn btn-primary">completed</a>
                </div>

                <button onClick={()=>{handleClearAll(todos)}} class="btn btn-primary">
                    clear all completed
                </button>
            </div>

            <div className="container text-center my-5">
                <p>drag and drop the button to reorder the list</p>
            </div>
        </section>
    )
}