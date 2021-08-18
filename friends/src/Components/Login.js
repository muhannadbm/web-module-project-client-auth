import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const  Login = (props) => {
const [credentials, setCredentials] = useState({username: '', password: ''})
const [isloading, setIsloading] = useState(false)

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
        console.log(credentials)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/login',credentials)
        .then(res => {
            console.log(res)
            props.setIsLoggedin(true)
            setIsloading(true)
            console.log('inside loading ', isloading)
            localStorage.setItem("token", res.data.payload)
            props.history.push('/friendslist')
        })
        .catch(e => console.log(e))


    }
    if(!props.login){
return (
<div>   {isloading ? <p>Loading...</p> : 
        <div className="login">
            <h2>Welcome to Friends App</h2>
    <form onSubmit= {(e)=>handleSubmit(e)}>
    <label>Username
    <input onChange = {(e)=> handleChange(e)} name ="username" value = {credentials.username}/> </label>
    <label>Password
    <input onChange = {(e)=> handleChange(e)} name ="password" value = {credentials.password}/> </label>
    <button>Submit</button>
</form>
</div>
}
</div>
)
}
else{
    return <div>You are already Logged in!</div>
}
}


export default Login