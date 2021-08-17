import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
            setIsloading(true)
            console.log('inside loading ', isloading)
            localStorage.setItem("token", res.data.payload)
            props.history.push('/friendslist')
        })
        .catch(e => console.log(e))


    }
return (
<div>
    {isloading ? <p>Loading...</p> : <form onSubmit= {(e)=>handleSubmit(e)}>
    <label>Username
    <input onChange = {(e)=> handleChange(e)} name ="username" value = {credentials.username}/> </label>
    <label>Password
    <input onChange = {(e)=> handleChange(e)} name ="password" value = {credentials.password}/> </label>
    <button>Submit</button>
</form>}

</div>)
}

export default Login