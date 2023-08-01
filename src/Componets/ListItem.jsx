import React from 'react'
import DeleteButton from "./DeleteButton"
import EditButton from "./EditButton"
const ListItem = ({todo,deletebtn}) => {
  return (
   <> 
   <li className='list-group-item '>
    {todo.text}
   <DeleteButton todo={todo} deletebtn={deletebtn}/>
   <EditButton/>
   </li>
   </>
  )
}

export default ListItem