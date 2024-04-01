import React from 'react'
import SearchBox from './SearchBox'
import ContactId from './ContactId'
import {useSelector} from "react-redux"

const ContactList = ({}) => {
    const contactList = useSelector(state=>state.contactList)
    const keyword = useSelector(state=>state.keyword)
    let filterList;
    if (keyword === '') {
      filterList = contactList.map((item) => item)
    }
    else {
      filterList = contactList.filter((item) => item.name === keyword)
    }
    console.log("filterList :", filterList, "keyword : ", keyword)
    return (
    <div>
      <SearchBox/>
      {filterList.map((item) => <ContactId item={item}/>)}
    </div>
  )
}

export default ContactList
