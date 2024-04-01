import React from 'react'
import {Row, Col, Button} from "react-bootstrap"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"

const ContactId = ({item}) => {
  console.log("contactId 컴포넌트 재실행")
  const dispatch = useDispatch();
  const deleteUser = (event) => {
    const id = event.target.id
    dispatch({type : "DELETE-CONTACT", payload : {id}})
  }
  const editUser = (event) => {
    console.log("edit!", event)
  }

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
          <Button id = {item.id}  onClick = {(event)=>editUser(event)}>수정</Button>
          <Button id = {item.id}  onClick = {(event)=>deleteUser(event)}>삭제</Button>
        </Col>
    </Row>
  )
}

export default ContactId
