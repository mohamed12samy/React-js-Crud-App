import React from 'react'
import {
    Table,
    Button,
    ButtonGroup,
  } from "react-bootstrap";

export const PostList = ({data}) => {
  const records = data.map((post, index)=>{
    <tr key={post.id}>
    <td>{++index}</td>
    <td>{post.title}</td>
    <td>
      <ButtonGroup aria-label="Basic example">
        <Button variant="success">Edit</Button>
        <Button variant="danger">Delete</Button>
      </ButtonGroup>
    </td>
  </tr>
    
  }) ;

  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th style={{ width: "70%" }}>Title</th>
        <th style={{ width: "10%" }}></th>
      </tr>
    </thead>
    <tbody>
      {records     
      }
      
    </tbody>
  </Table>
  )
}
