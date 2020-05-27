import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {editUser} from '../redux/actions';


const RegisterForm = () => {

    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.currentUser);
    
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatchEditUser = () => {
        dispatch(editUser({
            _id: currentUser._id,
            username,
            email,
            password,
        }));
    }

    useEffect(() => {
        if(Object.keys(currentUser).length){
            setUsername(currentUser.firstName);
        }
    }, [currentUser]);

    return  <div className="row">
        <div className="col-md-3">
                <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                        className="form-control"
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        id="register-email" 
                        placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text"
                        className="form-control"
                        value={username} 
                        onChange={e => setUsername(e.target.value)}
                        id="register-username" 
                        placeholder="Enter username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="register-password">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        onChange={e => setPassword(e.target.value)}
                        id="register-password" 
                        placeholder="Enter password"/>
                </div>
                <button type="button" className="btn btn-success" onClick={dispatchEditUser}>Save</button>
            </form>
        </div>
</div>
    
    
    
}

export default RegisterForm;