import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { createUser } from '../store/usersSlice'

export const AddUser = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const dispatch = useDispatch()
    const submitHandler = (event) => {
        event.preventDefault()

        if(!name.trim() || !surname.trim()) return
    const user = {
        name, 
        surname,
        id: v4()
    }
    dispatch(createUser(user))
    
    setName(" ")
    setSurname(" ")
    }

  return (
    <div >
        <form onSubmit={submitHandler}>
            <div><input value={name} onChange={event => setName(event.target.value)} placeholder='Name' type="text" /></div>
            <div><input value={surname} onChange={event => setSurname(event.target.value)} placeholder='Surname' type="text" /></div>
            <button>ADD USER</button>
        </form>
    </div>
  )
}
