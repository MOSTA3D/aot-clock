import { useState, useRef } from "react";
import shalabokka from "../assets/shalabokka.mp3";


const audio = new Audio(shalabokka);

function Todos(){
    const [ todos, setTodos ] = useState([]);
    const [ todo, setTodo ] = useState("");
    const id = useRef(0);

    const onTodoChange = e=>{
        setTodo(e.target.value);
    }

    const handleAddTodo = _e=>{
        if(todo) setTodos([ ...todos, {id:id.current++, todo} ]);
    }

    const handleRemove = e=>{
        const tmp = todos.map(el=>el);
        tmp.splice(e.target.dataset.index, 1);
        e.target.parentElement.style.opacity = 0;
        setTimeout(()=>{
            setTodos(tmp);
            audio.play();
        }, 200);
    }

    return(
        <div className="right">
            <h2>Add Todo</h2>
            <input type="text" value={todo} onChange={onTodoChange} />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((el, i)=>(
                    <li key={el.id} style={{opacity: "1"}}>
                        {el.todo}
                        <span data-index={i} onClick={handleRemove}>X</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos;