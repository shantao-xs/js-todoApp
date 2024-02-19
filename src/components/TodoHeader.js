import React from "react";
import sunIcon from '../images/icon-sun.svg';
import moonIcon from '../images/icon-moon.svg';

/**组块：todo logo，黑白模式图标
 * 功能：切换黑白模式
 * ? 需要参数：
 * ? 样式：
 * 
 * todo：header组件的样式，我应该写在这里还是index.js还是index.html?
 */
/**组块：输入框
 * 功能：输入文本后回车可新增一个todo
 * ? 需要参数：value={inputText} onChange={onInput}
 * ? 样式：
 */

/**tips: 
 * html元素与方法之间的触发、执行顺序：
 * 0. 从上级组件接收addTodo方法
 * 1. input元素中，触发[onChange事件]，执行(handleInputChange方法)，将事件e对象的value录入inputText
 * 2. input元素中，触发[onKeyDown事件]，执行(handleKeyPress方法)，判断是否为回车键&文本不空，将inputText录入Todos
 * 3. input元素中，value可有可无，以防万一先写着
 * 
 * 关于useState：
 * 简易版的private variable和changeMethod，通过且只能通过setInputText(?)来改变inputText的内容，可以储存数组、字符串等数据类型
 * 调用setTodos()时， setTodos(xxx=>[...xxx,newTodo]);这里的xxx并不重要，可以随便替换，他们指向的就是实际上的全局变量数组todos
 */

export const TodoHeader = (props)=>{
    

    const {setTodos,bgTheme,handleBgTheme} = props;
    const [inputText, setInputText] = React.useState('');
    
    
    //input功能
    const handleInputChange = (e)=>{
        setInputText(e.target.value);
    }

    const handleKeyPress = (e)=>{
        if(e.key==='Enter' && inputText!==''){
            addTodo(inputText);
        }
    }

    const addTodo = (inputText)=>{
        const getID=()=>Date.now().toString();
        const newTodo = {
            id: getID(),
            label: inputText,
            status: 'active',
        }
        setTodos(todos=>[...todos,newTodo]);
    }
    

    return(
        <section>
           <div className="container"></div>
            <div class="container text-center my-1">
                <div className="row">
                    <div className="col text-start mainlogo">
                        <h1>DAILY TODO</h1>
                    </div>
                    <div className="col text-end">
                        <button 
                            className="btn"
                            onClick={handleBgTheme}>
                            {bgTheme==='dark'? <img src={sunIcon} alt="bootstrap-sun" /> : <img src={moonIcon} alt="bootstrap-moon"/> }
                        </button>
                    </div>
                </div>
                
            </div>
            
            <div class="input-group flex-nowrap container
                        my-5">
                <input 
                    type="text" 
                    placeholder="Create a new todo..." 
                    class="form-control rounded"
                    aria-label="Username" 
                    aria-describedby="addon-wrapping" 
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    value={inputText}
                />
            </div>
            
            
        </section>
    )
}