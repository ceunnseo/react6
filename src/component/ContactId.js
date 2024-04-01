import React from 'react'
import {Row, Col, Button} from "react-bootstrap"

const ContactId = ({item}) => {
  return (
    <Row className = "contactId">
        <Col lg = {2}>
            <img
                width = {50}
                src = "https://cdn-icons-png.flaticon.com/512/8847/8847419.png"/>
        </Col>
        <Col lg = {4}>
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>
        </Col>
        <Col className = "contactId-edit-delete" lg = {6}>
          <Button>수정</Button>
          <Button>삭제</Button>
        </Col>
    </Row>
  )
}

export default ContactId
