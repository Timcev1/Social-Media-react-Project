import React from 'react';
import Posts from '../components/posts.js'
import PostForm from '../components/postform.js'

const PostCotainer = () => {
    return (
      <div className="postcontainer">
        <div className="formforpost">
          <Posts />
          </div>
          <div>
            <PostForm />
          </div>
        </div>
    );
}

export default PostCotainer;
