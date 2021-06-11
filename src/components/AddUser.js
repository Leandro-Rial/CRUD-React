import React, { useState } from 'react';

const Adduser = (props) => {

    const initialState = { id: null, name: '', username: '' }

    const [user, setUser] = useState(initialState)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]:value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(!user.name || !user.username) return alert('Please complete all the fields')

        props.addUser(user)
        setUser(initialState)
    }

    return (
        <form onSubmit={(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <button className="btn btn-success">Send</button>
        </form>
    )
}

export default Adduser
