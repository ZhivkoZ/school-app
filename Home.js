import React, { Component } from 'react';
import StudentsList from './students-list/index';
import NewsList from './NewsList';

class Home extends Component{
render(){
    return(
        <div className="container">
            <div className="row ml-2 mr-2">
                <div className="col md-5 ml-1 mr-1 mt-1">
                    <StudentsList/>
                </div>
                <div className="col md-5 ml-1 mr-1 mt-1">
                    <NewsList/>
                </div>
            </div>
        </div>
    );
}
}

export default Home;