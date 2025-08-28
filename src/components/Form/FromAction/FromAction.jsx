import React from 'react';

const FromAction = () => {
    const handleAction =(e) =>{
            e.preventDefault();
            console.log(e.get('name'));
    }
    return (
        <div>
            <form action={handleAction}>
                <input type="text" name='name' placeholder='your name'/>
                <br />
                <input type="email" name='name' placeholder='you email'/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default FromAction;