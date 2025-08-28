import React, { useState } from 'react';

const ControlledFiled = () => {
    const [password, setPassword] = useState('')
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handlePreventDefault = (e) => {
        e.preventDefault()
        password.length<6 ? setError("must be contain 6 char"):setError("")
       
    }
    const handleOnChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
        
    }
    const handleName = (e) => {
        console.log(e.target.value);
        setName(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handlePreventDefault}>
                <input type="text" name='name' onChange={handleName} defaultValue={name} />
                <br />
                <input placeholder='email' type="email" />
                <br />
                <input type="password" placeholder='password' required onChange={handleOnChange} defaultValue={password} />
                <br />
                <input type="submit" />
            </form>
            <p style={{color: 'red'}}>{error}<small>

            </small></p>
        </div>
    );
};

export default ControlledFiled;