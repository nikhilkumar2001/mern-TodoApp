import React from 'react'
import { MdModeEdit } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";
const Todo = ({text, updateMode, deleteMode}) => {
    
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <button onClick={updateMode}>Update{" "}<MdModeEdit className='iconsn' /></button>
        <button onClick={deleteMode}>Delete{" "}<FaDeleteLeft className='iconsn' /></button>
      </div>
    </div>
  )
}

export default Todo