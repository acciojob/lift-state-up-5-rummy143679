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
                <form name='login-form' className='login-form'>
                    <label htmlFor='name'>Username:</label>
                    <input type="text" name='name' style={{ marginBottom: '10px' }} />
                    <br />
                    <label htmlFor='password'>Password:</label>
                    <input type="password" name='password' style={{ marginBottom: '10px' }} />
                    <br />
                    <button type="submit" onClick={handleSubmit}>Login</button>
                </form>
            }
        </div>
    )
}
export default Child;