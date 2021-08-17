import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useState } from 'react'

const AddFriend = (props) => {
    const [credentials, setCredentials] = useState({id: Date.now() ,email: '',username: '', password: ''})
    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
        console.log(credentials)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth().post('http://localhost:5000/friends',credentials)
        .then(res => {
            console.log(res)
            props.history.push('/friendslist')
        })
        .catch(e => console.log(e))

    }
    return(
        <div>
            <form onSubmit= {(e)=>handleSubmit(e)}>
                <label> Username:
                <input name="username" value={credentials.username} onChange = {(e)=> handleChange(e)}/></label>
                <label> Age:
                <input name="age" value={credentials.age} onChange = {(e)=> handleChange(e)}/></label>
                <label> Email:
                <input name="email" value={credentials.email} onChange = {(e)=> handleChange(e)}/></label>
            <button>Submit</button>
            </form>
        </div>
    )
}
export default AddFriend