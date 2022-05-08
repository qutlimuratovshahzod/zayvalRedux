import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../store/usersSlice'

export const User = ({ user, index }) => {
    const dispatch = useDispatch()
    return (
        <tr>
            <td>{index}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>
                <button>edit</button>
                <button onClick={() => dispatch(deleteUser(user.id))}>delete</button>
            </td>
        </tr>
    )
}
