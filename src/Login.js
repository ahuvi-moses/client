import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Button from '@mui/material/Button';

function Login(props) {
    const [userName, setuserName] = useState(null)
    const [password, setpassword] = useState(null)

    // handlePassword = (pass) => {
    //     setpassword(pass)
    // }

    // handleUserName = (uName) => {
    //     setuserName(uName)
    // }
    const connect = async () => {
        console.log("in conncet");
        try {
            const token = await fetch('http://localhost:3600/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ userName: userName, password: password })
            })

            console.log(token);
        }
        catch (e) {
        }
    }

    return (
        <>
        <div className="divlogin">
            
            <input id="uname" type="text" name="Username" placeholder="Username" onChange={(e) => setuserName(e.target.value)}></input><br></br>
            <input id="pass" type="password" name="Password" placeholder="Password" onChange={(e) => setpassword(e.target.value)}></input><br></br><br></br>
            {/* <button class="button" onClick={connect}>Login</button> */}
            <Button variant="contained" onClick={connect}>Login</Button><br></br>
            <a href="#">Forgot Password<br /> </a>
        </div>
        </>
    )
}
export default Login;
