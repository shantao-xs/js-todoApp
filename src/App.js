/**
 * 全局与局部作用域：函数之外声明的就是全局变量，在整个项目中都可使用，比如filterStatus和todos
 */
//! 计数正确，toggle正确，clear all正确（说明状态toggle正确），delete错误，筛选无显示
import React from "react";
import { TodoHeader, TodoList, TodoFooter,Banner } from "./components";

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


//todo 把所有在app组件的方法下放到子组件里
export const TodoApp = ()=>{
    const [todos,setTodos] = React.useState(defaultTodos);
    const [filterStatus, setFilterStatus] = React.useState('all');
    
    //* error1：一开始使用setTodoStatus(thisTodo)试图改变某条todo的id，toggle没有反应
    //* reason: 想要改变某条todo的值，必须通过遍历、修改todos数组才能做到，创建一个[todoStatus,setTodoStatus]并不能想当然地修改目标todo

    //* error2: 原来写的是handleToggle = (todo)=>{const updatedTodo = todos.map((todo)=>{....}，结果toggle没反应
    //* reason: 箭头函数命名冲突：本组件里如果已经传入了todo，就不要再在箭头函数里面用todo来命名局部变量了，以防出错
    const handleToggle = (targetTodo)=>{
        const updatedTodo = todos.map((todo)=>{
            if (todo.id === targetTodo.id){
              return {...todo, status: todo.status === 'active' ? 'completed' : 'active'};
            } else {
              return todo;
            }
          });
        setTodos(updatedTodo);
    }
    
    //* error:delete就报错 handleDelete is not a function
    //* reason:系方法拼写错误。这个错误表明handleDelete没有被ListItem识别为函数，也就是它没有正确传入。检查传输参数过程中有没有传错。
    const handleDelete = (targetTodo)=>{
        const updatedTodo = todos.map((todo)=>{
            if(todo.id===targetTodo.id){
                return {...todo,status:'deleted'};
            }else{
                return todo;
            }
        })
        setTodos(updatedTodo);
    }

    const handleClearAll = (todos) => {
        const updatedTodos = todos.map(todo => {
          if (todo.status === 'completed') {
            return { ...todo, status: 'deleted' };
          } else {
            return todo;
          }
        });
        setTodos(updatedTodos);
      }

    const [bgTheme,setBgTheme] = React.useState('dark');


    //切换背景的Theme，并在css中改变应该渲染的样式
    //! 注意：如果在修改样式后，没有把这个值传给setBgTheme，就会导致异步，无法实时更新状态。需要先判断点击日月按钮后应该出在什么theme里，然后再进行toggle，再更新这个状态
    const handleBgTheme = () => {
        const newTheme = bgTheme === 'dark' ? 'light' : 'dark';
    
        // 切换整个页面的样式类
        document.body.classList.toggle('dark-theme', newTheme === 'dark');
        document.body.classList.toggle('light-theme', newTheme === 'light');
    
        // 更新 bgTheme 状态
        setBgTheme(newTheme);
    }
    

    return(
        <div>
            <Banner bgTheme={bgTheme}/>
            <TodoHeader setTodos={setTodos} handleBgTheme={handleBgTheme} bgTheme={bgTheme}/>
            <TodoList 
                todos={todos} 
                filterStatus={filterStatus} 
                handleToggle={handleToggle} 
                handleDelete={handleDelete}
            />
            <TodoFooter 
                todos={todos}  
                setFilterStatus={setFilterStatus} 
                handleClearAll={handleClearAll}
            />
        </div>
    )
}