import axios from 'axios'
import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const FriendsList = () => {
    const [freinds, setFriends] = useState([])
    const [isfetching, setisFetching] = useState(true)
    useEffect(()=> {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            setFriends(res.data)
            setisFetching(false)
        })
    })
    return <div>
        <h2>My Friend List</h2>
        <div>
            {isfetching ? <p>fetching...</p> : freinds.map(e => {
                return (
                <div> name is : {e.name}, age is: {e.age} email is: {e.email}</div>
                )
            })}

        </div>

    </div>
}

export default FriendsList