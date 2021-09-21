import Axios from 'axios'
import React, { useState, useEffect } from 'react';

function DemoCode() {


    const [message, setmessage] = useState({})


    useEffect(() => {
        fetchComments();
    }, {})
    useEffect(() => {
        console.log(message)
    }, { message })
    const fetchComments = async () => {
        const response = await Axios('http://159.65.95.188:4000/api/resend_otp');
        setmessage(response.data)
    }
    return (
        <div className="App">
            <h1>hello</h1>
            <h4>{message.name}</h4>
            <p>{message.email}</p>
        </div>
    );
}

export default DemoCode;