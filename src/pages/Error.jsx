import { Button } from 'react-bootstrap';
import React from 'react'
import {
    Container,
    Row,
    Col,
  } from "react-bootstrap";
import { useNavigate, useRouteError } from 'react-router-dom';
export const Error = () => {
    const error = useRouteError();
    const navigate = useNavigate();
  return (
    <Container>
    <Row>
      <Col xs={{ span: 8, offset: 2 }}>
        <div>
        displaying error here
        <Button variant = "link" onClick={()=>navigate("/",{replace:true})}>back</Button>
        </div>
      </Col>
    </Row>
  </Container>
  )
}
