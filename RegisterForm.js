import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addUser} from '../redux/actions';

const RegisterForm = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatchAddUser = () => {
        dispatch(addUser({
            email,
            username,
            userType: 'regular',
            password,
        }));
    }

    return <form>
        <div className='form-group'>
            <label htmlFor="register-email">Email</label>
            <input 
            type="text"
            className="form-control"
            onChange={e => setEmail(e.target.value)}
            id="register-email"
            placeholder="Enter email" />
        </div>
        <div className="form-group">
            <label htmlFor="register-username">Username</label>
            <input
            type="text"
            className="form-control"
            onChange={e => setUsername(e.target.value)}
            id="register-username"
            placeholder="Enter username" />
        </div>
        <div className="form-group">
            <label htmlFor="register-password">Password</label>
            <input
            type="text"
            className="register-password"
            onChange={e => setPassword(e.target.value)}
            id="register-password"
            placeholder="Enter password" />
        </div>
        <button className="btn btn-dark" type="text" onClick={dispatchAddUser}>Register</button>
    </form>    
}

export default RegisterForm;