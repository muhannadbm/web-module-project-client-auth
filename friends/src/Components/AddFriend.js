import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useState } from 'react'

const AddFriend = (props) => {
    const [credentials, setCredentials] = useState({email: '',name: '', password: ''})
    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth().post('http://localhost:5000/api/friends',credentials)
        .then(res => {
            props.history.push('/friendslist')
        })
        .catch(e => console.log(e))

    }
    return(
        <div>
            <form onSubmit= {(e)=>handleSubmit(e)}>
                <label> Username:
                <input name="name" value={credentials.username} onChange = {(e)=> handleChange(e)}/></label>
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