import React from 'react'
import ListItem from './ListItem'
const ListGroup = ({Todos,deletebtn}) => {
  return (
<ul className='list-group my-3'>
{
Todos.map((todo) =>(
<ListItem key={todo.id} todo = {todo} deletebtn={deletebtn} />
))}

</ul>
  );
};

export default ListGroup;