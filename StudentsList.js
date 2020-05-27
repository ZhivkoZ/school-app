import React, { Component } from 'react';
import Student from './student';

class StudentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: '',
            search: '',
            studentsList: [],
            filteredList: []
        }
    }

    handleSearchChange = e => {
        const search = e.target.value;
        this.setState({
            search
        }, () => {
            this.setFilteredList();
        })
    }

    setFilteredList = () => {
        let filteredList = [];
        const search = this.state.search;
        const studentsList = this.state.studentsList;
        studentsList.forEach((student, index) => {
            if (student.name.indexOf(search) !== -1) {
                filteredList.push({
                    name: student.name,
                    index
                })
            }
        })
        this.setState({
            filteredList
        })
    }

    handleKeyPress = e => {
        if (e === "Enter") {
            this.addStudent();
        }
    }

    addStudent = () => {
        if (!this.state.studentName) {
            return;
        }
        let studentsList = this.state.studentsList;

        studentsList.push({
            name: this.state.studentName
        })

        this.setState({
            studentsList,
            studentName: ''
        }, () => {
            this.setFilteredList();
        })
    }

    removeStudent = index => {
        let studentsList = this.state.studentsList;
        studentsList.splice(index, 1);
        this.setState({
            studentsList
        }, () => {
            this.setFilteredList();
        })
    }

    handleChange = e => {
        this.setState({
            studentName: e.target.value
        });
    }

    getListItems = () => {
        let items = this.state.filteredList;
        if (!items.length && this.state.search) {
            return <div className="alert alert-info">No students found</div>
        }
        if (!items.length) {
            return <div className="alert alert-warning">No inputs</div>
        }
        return items.map(student => {
            return <Student
                key={student.index}
                removeStudent={() => this.removeStudent(student.index)}
                name={student.name} />
        })
    }

    handleRefreshButton = e => {
        if(e === "Refresh list"){
            this.setState({
                studentsList: []
            })
        }        
    }

    render() {
        return <>
            <div className="input-group mb-2">
                <input type="text"
                    className="form-control"
                    onKeyPress={this.handleKeyPress}
                    value={this.state.studentName}
                    onChange={this.handleSearchChange} />
            </div>
            <div className="input-group mb-2">
                <input type="text"
                    className="form-control"
                    value={this.state.search}
                    onChange={this.handleSearchChange}
                />
            </div>
            <ul className="list-group mt-3">
                {this.getListItems()}
            </ul>
        </>
    }

}

export default StudentsList;