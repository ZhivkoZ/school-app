import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";
import AddStudent from '../components/AddStudent';
import Student from '../components/Student';

class StudentsPage extends Component {

    componentDidMount(){
        this.props.getStudent('_id name subject level');
    }
    renderStudents = () => {
        
        const studentsList = this.props.students.map(student => {
            return <Student key={student._id} student={student}/>
        })
        return studentsList;
    }
    render() {
        return <div className="row">
            <div className="col">
                <AddStudent/>
            </div>
            <div className="col">
                <div className="row">
                    {this.renderStudents()}
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        students: state.students
    }
}

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        getStudent: actions.getStudent
    }, dispatch)
}

export default connect(mapStateToProps, mapStateToDispatch)(StudentsPage);