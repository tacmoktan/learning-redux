import React from 'react';
import { connect } from 'react-redux';
//css
import '../css/styles.css';

const Post = () => {
    return (
        <div className="single-post">
            <h3>Title</h3>
            <p>
                Body
            </p>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {

}

export default connect(mapStateToProps)(Post);