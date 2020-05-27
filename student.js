import React from 'react';

const Student = props => {
    return <li className="list-group-item
    d-flex justify-content-between
    align-items-center">
        {props.label}
    </li>
}

export default Student;