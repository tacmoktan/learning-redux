import React from 'react';
import '../css/styles.css';
//component 
import Post from './Post';

const posts = [
    { id: 1, title: 'Title 1', body: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero.' },
    { id: 2, title: 'Title 2', body: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero.' },
    { id: 3, title: 'Title 3', body: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero.' },
]

const Blogs = () => {

    const allPost = posts.map(post => (
        <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>
                {post.body}
            </p>
        </div>
    ));

    return (
        <>
        <h1>BLOGS</h1>
        <div className="blogs-container">
            {allPost}
            <Post />
        </div>
        </>
    );
}

export default Blogs;