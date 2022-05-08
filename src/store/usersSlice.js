import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice(
    {
        name: "users",
        initialState: [],
        reducers: {
            createUser(state, action) {
                return [...state, action.payload]
            },
            editUser(state, action) {
                return state.map(user => {
                    if (user.id === action.payload.id) {
                        user.name = action.payload.name
                    }
                    return user
                })
            },
            deleteUser(state, action) {
                return state.filter(user => user.id !== action.payload)
            }
        }
    }
)

export const { createUser, editUser, deleteUser } = usersSlice.actions

export default usersSlice.reducer