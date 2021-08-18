import axiosWithAuth from '../utils/axiosWithAuth'
import React, { useEffect } from 'react'

const Logout = (props) => {
    useEffect(()=>{
        axiosWithAuth().post('http://localhost:5000/api/logout')
        .then(res =>
            console.log(res),
            localStorage.removeItem("token"),
            props.setIsLoggedin(false),
            props.history.push('/') )
            .catch(e => console.log(e))
    
    }, [])
    
return <div></div>
}

export default Logout