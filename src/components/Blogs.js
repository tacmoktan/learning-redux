import React from 'react';
import '../css/styles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Blogs = (props) => {

    const { posts } = props;
    const allPost = posts.map(post => (
        <Link to={`/post/${post.id}`} key={post.id} >
            <div className="post" >
                <h3>{post.title}</h3>
                <p>
                    {post.body}
                </p>
            </div>
        </Link>
    ));

    const content = allPost.length > 0? allPost : <h3>No more posts</h3>;
    return (
        <>
        <h1>BLOGS</h1>
        <div className="blogs-container">

            {content}

        </div>
        </>
    );
}


const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Blogs);