import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import addStudent from '../redux/actions';

const AddStudent = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [level, setLevel] = useState('');

    const dispatchAddStudent = () => {
        dispatch(addStudent({
            name,
            subject,
            level,
        }, '_id name subject level'));
    }

    return <form>
        <div className="form-group">
            <label htmlFor="student-name">Name</label>
            <input type="text"
                className="form-control"
                onChange={e => setName(e.target.value)}
                id="student-name" 
                placeholder="Enter student name"/>
        </div>
            <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input 
                type="text"
                onChange={e => setSubject(e.target.value)}
                className="form-control" 
                id="subject" 
                placeholder="Enter subject"/>
        </div>
        <div className="form-group">
            <label htmlFor="image">Level</label>
            <input 
                type="text" 
                className="form-control" 
                onChange={e => setLevel(e.target.value)}
                id="level"
                placeholder="Enter level"/>
        </div>
        <button type="button" className="btn btn-primary" onClick={dispatchAddStudent}>Save</button>
    </form>
}

export default AddStudent;