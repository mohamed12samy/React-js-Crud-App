import React from 'react'
import {
    Container,
    Row,
    Col,
  } from "react-bootstrap";
import { Outlet } from 'react-router-dom';
  import Header from "../components/Header";

export const RootLaout = () => {
  return (
    <Container>
    <Header />
    <Row>
      <Col xs={{ span: 8, offset: 2 }}>
        <Outlet/>
      </Col>
    </Row>
  </Container>
  )
}
