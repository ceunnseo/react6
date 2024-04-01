import React from 'react'
import {Row, Col, Form, Button} from "react-bootstrap"
import {useState} from "react";
import {useDispatch} from "react-redux"

const SearchBox = () => {
    const [keyword, setKeyword] = useState(""); 
    const dispatch = useDispatch();
    const search = (event) => {
        event.preventDefault();
        dispatch({type : "SEARCH-CONTACT", payload : {keyword}})
        console.log("search", keyword);
    }
  return (
    <Form onSubmit = {search}>
      <Row>
        <Col lg = {10}>
            <Form.Control type="text" placeholder="이름을 입력해주세요" onChange = {(event)=>setKeyword(event.target.value)}/>
        </Col>
        <Col lg = {2}>
            <Button type = "submit">찾기</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox
