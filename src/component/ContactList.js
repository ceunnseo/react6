import React from 'react'
import SearchBox from './SearchBox'
import ContactId from './ContactId'
import {useSelector} from "react-redux"
import {useState, useEffect} from "react"

const ContactList = ({}) => {
    const contactList = useSelector(state=>state.contactList)
    const keyword = useSelector(state=>state.keyword)
    const [filterList, setFilterList] = useState([]);
    useEffect(()=>{
      if (keyword === '') {
        setFilterList(contactList) 
      }
      else {
        setFilterList(contactList.filter((item)=>item.name.includes(keyword)))
      }
    }, [keyword, contactList])
    console.log("filterList :", filterList, "keyword : ", keyword)
    return (
    <div>
      <SearchBox size = {filterList.length}/>
      {filterList.map((item) => <ContactId item={item}/>)}
    </div>
  )
}

export default ContactList
