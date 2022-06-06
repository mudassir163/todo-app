import React from 'react'
import styles from '../style.module.css'
function Todo({todoItem,todoList,setTodoList}) {
const deleteTodo=()=>{
    
    setTodoList(todoList.filter((item) =>item.id!==todoItem.id))
}
  return (
    <div>
        <div className={styles.todoitem}>
            <h3 className={styles.todoname}>{todoItem.name}</h3>
            <button onClick={deleteTodo} className={styles.todobutton}>Done</button>
        </div>
    </div>
  )
}

export default Todo