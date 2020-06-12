import React, {useState} from 'react'
import Contacts from "./Contacts";
import {useDispatch, useSelector} from "react-redux";
import {sendDataTC} from "../../BLL/contactsReducer";


const ContactsContainer = () => {
    const dispatch = useDispatch();
    const {success, error} = useSelector(state => state.contacts)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const onSubmitClick = () => {
        dispatch(sendDataTC(name, email, message))
    }
    return (
        <Contacts success={success} error={error} name={name}
                  setName={setName} email={email} setEmail={setEmail}
                  message={message} setMessage={setMessage}
                  onSubmitClick={onSubmitClick}
        />
    )
}

export default ContactsContainer