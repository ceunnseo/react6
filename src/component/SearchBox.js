import React from 'react'
import {Row, Col, Form, Button} from "react-bootstrap"
import {useState} from "react";
import {useDispatch} from "react-redux"

const SearchBox = ({size}) => {
    const [keyword, setKeyword] = useState(""); 
    const dispatch = useDispatch();
    const search = (event) => {
        event.preventDefault();
        dispatch({type : "SEARCH-CONTACT", payload : {keyword}})
        console.log("search", keyword);
    }
  return (
    <Form onSubmit = {search}>
      <Row className = "searchBox">
        <Col md = {9}>
            <Form.Label>총 {size}명</Form.Label>
            <Form.Control className = "searchBox-input" type="text" placeholder="찾고자 하는 사람의 이름을 입력해주세요" onChange = {(event)=>setKeyword(event.target.value)}/>
        </Col>
        <Col md = {3}>
            <Button className = "searchBox-button" type = "submit">찾기</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox
