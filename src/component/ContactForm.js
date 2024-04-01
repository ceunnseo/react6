import React from 'react'
import {Form, Button} from "react-bootstrap"
import {useState} from "react"
import {useDispatch} from "react-redux"
const ContactForm = () => {
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const dispatch = useDispatch();
    const addContact = (event) => {
        event.preventDefault();
        if (name === "" || phoneNumber === "") {
          alert("정보를 제대로 입력하지 않았습니다.")
        }
        else {
          dispatch({type : "ADD-CONTACT", payload : {name, phoneNumber}})
        }
        setName("")
        setPhoneNumber("")
    }
    return (
    <div>
    <Form onSubmit = {addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해주세요" value = {name} onChange = {(event)=>setName(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="text" placeholder="전화번호를 입력해주세요" value = {phoneNumber} onChange = {(event) => setPhoneNumber(event.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
    </div>
  )
}

export default ContactForm
