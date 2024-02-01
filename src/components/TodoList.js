/**组块：todo条们
 * 功能：根据要求的status，显示对应的todos；根据要求的delete，显示未删除的todos
 * 功能联动：承接ListItem
 * ? 需要参数：
 * ? 样式：
 */
/** tips:
 * 呈现、筛选、删除todo条的执行顺序：
 * 1. ListItem组件中，更新每个todo条的status（<1>被delete了，<2>被复选框toggle了）
 * 2. List组件中，根据用户选中的[filterStatus]，筛选对应的todos，产生filteredTodos
 * 3. List组件中，遍历filteredTodos，返回每一个ListItem组件
 * 4. ListItem组件的key属性并没有用到，但这是确保map todos数组时保证通过唯一标识符todo.id来遍历数组的保险手段，所以放在这里
 * 
 * 何为筛选、删除？
 * 本质是filter/map出指定的数据集合，不显示其他的集合，而不是删除了数据
 * 
 * 关于.filter()和.map()：
 * .filter():遍历数组，[筛选]出符合条件的后，返回新数组
 * .map():遍历数组，执行[改变]后，返回新数组
 */

//? 如果从上级组件传入的参数特别多特别冗长怎么办
import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = (props)=>{
    const {todos,filterStatus,setTodos,setTodoStatus}=props;
    
    //! 只筛选没被清除的内容/被选中status的内容——后者需要一个参数filterStatus记录现在被选中的status是什么
    const filteredTodos = todos.filter(
        (todo)=> {
            if(todo.status==='deleted'){
                return false;
            }
            if(filterStatus==='all'){
                return true;
            }else if(filterStatus==='active'){
                return (todo.id==='active');
            }else if(filterStatus==='completed'){
                return(todo.id==='completed');
            }
            return false;
        }
    )
    
    return(
        <div>
            <li>
                {filteredTodos.map((todo)=>
                    <TodoListItem
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        setTodoStatus = {setTodoStatus}
                        key={todo.id}
                    />
                )}
            </li>
        </div>
    )
}