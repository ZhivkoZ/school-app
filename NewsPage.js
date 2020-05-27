import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";
import AddNews from '../components/AddNews';
import News from '../components/News';

class NewsPage extends Component {

    componentDidMount(){
        this.props.getNews('_id header description');
    }
    renderNews = () => {
        const newsList = this.props.students.map(news => {
            return <News key={news._id} news={news}/>
        })
        return newsList;
    }
    render() {
        return <div className="row">
            <div className="col">
                <AddNews/>
            </div>
            <div className="col">
                <div className="row">
                    {this.renderNews()}
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        news: state.news
    }
}

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        getNews: actions.getNews
    }, dispatch)
}

export default connect(mapStateToProps, mapStateToDispatch)(NewsPage);