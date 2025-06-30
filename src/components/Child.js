import React from 'react'

function Child(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.setIsLoggedIn(true);
    }
    console.log(props);
    return (
        <div>
            {props.isLoggedIn ? <p>You are logged in!</p> :
                <form name='login-form'>
                    <label htmlFor='name'>Username:</label>
                    <input type="text" name='name' />
                    <br />
                    <label htmlFor='password'>Password:</label>
                    <input type="password" name='password' />
                    <br />
                    <button type="submit" onClick={handleSubmit}>Login</button>
                </form>
            }
        </div>
    )
}
export default Child;