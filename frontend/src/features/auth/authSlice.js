import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

//get user from local storage
const user = JSON.parse(localStorage.getItem('user'))

const initalState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

