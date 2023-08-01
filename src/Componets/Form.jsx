import React, { useState } from 'react'

const Form = ({saveTodo}) => {
const [text , setText] =useState("")

const handleSubmit = (e) =>{
  e.preventDefault()
  saveTodo(text)
  setText("")
}

  return (
<form onSubmit={(e) => handleSubmit(e)}>
<input type="text" className="form-control w-100 m-2 bg-Secondary " placeholder='Enter a name' 
onChange={(e)=>setText(e.target.value)} value={text}  />
<button className="btn btn-danger w-100 m-2">Save</button>
</form>
  )
}

export default Form