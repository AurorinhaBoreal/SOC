import React from 'react'
import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3434'
});

export default API;