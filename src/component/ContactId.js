import React from 'react'
import {Row, Col} from "react-bootstrap"

const ContactId = ({item}) => {
  return (
    <Row className = "contactId">
        <Col lg = {2} md = {3}>
            <img
                width = {50}
                src = "https://cdn-icons-png.flaticon.com/512/8847/8847419.png"/>
        </Col>
        <Col lg = {10} md = {9}>
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>
        </Col>
    </Row>
  )
}

export default ContactId
