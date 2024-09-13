import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const baseUrl = 'http://localhost:3005/';

const removeUser = createAsyncThunk('users/delete', async (user) => {
    await axios.delete(`${baseUrl}users/${user.id}`)

    return user;
});

export {removeUser};