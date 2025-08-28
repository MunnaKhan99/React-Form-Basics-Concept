import React from 'react';

const SingleFrom = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' />
            <br />
            <input type="email" name='email' />
            <br />
            <input type="Submit" value='submit'/>
        </form>
    );
};

export default SingleFrom;