import React, { useState } from 'react';

const BasicLoginFrom = () => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState([]);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.password.value);

        password.length <= 6 ? setError({ message: 'Password must be at least 6 characters', type: 'error' }) : setError({ message: 'Successfully set password!', type: 'Success' })
    }
    const handlePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)

    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input placeholder='email' type="email" required name='email' />
                <br />
                <input onChange={handlePassword} placeholder='password' type="password" required name='password' defaultValue={password} />
                <br />
                <input type="submit" />
            </form>
            <p style={{ color: error.type === "error" ? "red" : "green" }}>
                <span>
                    {
                        error.message
                    }
                </span>
            </p>
        </div>
    );
};

export default BasicLoginFrom;