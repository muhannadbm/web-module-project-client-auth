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
    }, [])
    return <div>
        <h2>My Friend List</h2>
        <div className="list">
            {isfetching ? <p>fetching...</p> : freinds.map(e => {
                return (
                <div> <span>name is : </span>{e.name}, <span> age is: </span>{e.age}  <span> email is: </span> {e.email}</div>
                )
            })}

        </div>

    </div>
}

export default FriendsList