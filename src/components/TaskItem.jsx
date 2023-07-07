import React from 'react'
import MyButton from './button/MyButton'

const TaskItem = (props) => {
  return (
    <div className='task'>
        <div className='task_content'>
            <p>{props.number}. {props.task.text}</p>
        </div>
        <div className='task_btns'>
            <MyButton onClick={() => props.remove(props.task)}>Remove</MyButton>
        </div>
    </div>
  )
}

export default TaskItem