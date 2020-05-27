import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteStudent } from '../redux/actions';

const Student = props => {

    const dispatch = useDispatch();

    const dispatchDeleteStudent = () => {
        dispatch(deleteStudent({
            _id: props.student._id
        }, '_id, name, sunject, level'));
    }

    return <div className="col mb-3">
        <div className="card">
            <div className="card-body">
                <button type="button" className="btn btn-danger mb-1" onClick={dispatchDeleteStudent}>Delete</button>
                <h5 className="card-title">{props.student.name}</h5>
                <p className="card-text">{props.student.subject}{props.student.level}</p>
            </div>
        </div>
    </div>
}

export default Student;