import React, { useState } from 'react'
import Form from './Componets/Form'
import Navbar from './Componets/Navbar'
import ListGroup from './Componets/ListGroup';
import Footer from './Componets/Footer';
const App = () => {
// const name = "software devlopar";
const [name ,setName] = useState("I am web devlopar")
const work = "coding";
const Gendar = "male"

// const website ="www.vishallovanshi6@gmail.com"
const [Todos,setTodos] = useState([ 
{id : 1 , text : "java"},
{id : 2 , text : "python"},
{id : 3 , text : "oracle"},
{id : 4 , text : "vishal"} ,
{id : 5 , text : "lovanshi"},
]);



// save todo
const saveTodo= (text) =>{

  const newTodo = {
    id : crypto.randomUUID(),
    text : text
    
  }

setTodos([...Todos, newTodo])
 
  }


const deletebtn =(id) => {
console.log(id);
 setTodos(
  Todos.filter((todo)=>{
    if(todo.id !== id){
      return true
    }
  })
 )
}




  return ( 
<>
<Navbar name={name} work={work} Gendar={Gendar}/>
<button className="btn btn-warning  rounded-0" onClick={()=>setName("i am boy")}>call</button>
<div className="container p-5">
<Form saveTodo={saveTodo}/>
<ListGroup Todos={Todos} deletebtn={deletebtn} />

<Footer />
</div>
</>
  );
};

export default App

