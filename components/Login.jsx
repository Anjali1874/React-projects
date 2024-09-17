import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

export default function Login() {
    const [user, setUsername] = useState(''); // Correcting variable name
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    function handleSubmit(event) {
        event.preventDefault();  // Prevent page refresh
        setUser({ user, password });  // Set the context with username and password
    }

    return (
        <>
            <h2>Login</h2>
            <label htmlFor="username">Enter Username: </label>
            <input
                type="text"
                id="username"
                value={user}  // Bind input to state
                onChange={(e) => setUsername(e.target.value)}  // Update local state
            />
            <br />
            <label htmlFor="password">Enter Password: </label>
            <input
                type="password"
                id="password"
                value={password}  // Bind input to state
                onChange={(e) => setPassword(e.target.value)}  // Update local state
            />
            <br /><br />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}
