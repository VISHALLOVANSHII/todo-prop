import React from 'react'

const DeleteButton = ({deletebtn,todo}) => {
  return (   
     <button className=" btn btn-danger roumded-0 float-end" onClick={() => deletebtn(todo.id)}>Delete</button>
  );
};

export default DeleteButton;