import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'

function AddNewMovie({addnew}) {
    const [input, setInput] = useState()
    console.log(input)
    return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie name </Form.Label>
        <Form.Control type="text" onChange={(e)=>setInput({...input,title:e.target.value})} placeholder="Enter movie name " />
        <Form.Label>Movie description</Form.Label>
        <Form.Control type="text" onChange={(e)=>setInput({...input,description:e.target.value})} placeholder="Enter movie description" />
        <Form.Label>Movie image URL</Form.Label>
        <Form.Control type="text" onChange={(e)=>setInput({...input,posterUrl:e.target.value})} placeholder="Enter movie image url" />
  
    </Form.Group>
    <Button onClick={()=>addnew({...input,id:Math.random()})} variant="primary" >
        Submit
    </Button>
    </Form>
    )
}

export default AddNewMovie