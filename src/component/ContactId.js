import React from 'react'
import {Row, Col} from "react-bootstrap"

const ContactId = ({item}) => {
  return (
    <Row>
        <Col lg = {2}>
            <img
                width = {50}
                src = "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"/>
        </Col>
        <Col lg = {10}>
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>
        </Col>
    </Row>
  )
}

export default ContactId
