import React from 'react';

const News = props => {


    return <div className="col mb-3">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.news.header}</h5>
                <p className="card-text">{props.news.description}</p>
            </div>
        </div>
    </div>
}

export default News;