import React from 'react';
import { connect } from 'react-redux';
//css
import '../css/styles.css';

const Post = (props) => {
    const { post, deletePost, history } = props;
    //console.log(props)

    const handleClick = () => {
        deletePost(post.id);
        history.push('/');
    }

    return (
        <div className="single-post">
            <h3>{post.title}</h3>
            <p>
                {post.body}
            </p>
            <button onClick={handleClick}>DELETE POST</button>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {

    const { posts } = state;                    //check console.log(state)
    const postId = ownProps.match.params.id;    //check console.log(ownProps)

    const filteredPost = posts.find(singlePost => singlePost.id === parseInt(postId));

    return {
        post: filteredPost
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deletePost: (id) => {
            dispatch({ type: 'DELETE_POST', id: id })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);