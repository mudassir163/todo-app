import React from 'react'
import styles from '../style.module.css'
import shortid from 'shortid';

function Form({todo,setTodo,todoList,setTodoList}) {

 const handlechange=(e)=>{
   setTodo(e.target.value);
 }
const handleSubmit=(e)=>{
  e.preventDefault()
  setTodoList([...todoList,{name:todo,id:shortid.generate()}])
  setTodo("")
}
  return (
    <div className={styles.todoform}>
        <form onSubmit={handleSubmit}>
            <input value={todo} onChange={handlechange} className={styles.todoinput} placeholder="Add Todo Items" ></input>
            <button type="submit" className={styles.todobutton}>Add</button>
        </form>

    </div>
  )
}

export default Form