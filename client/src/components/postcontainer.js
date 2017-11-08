import React from 'react';
import Posts from './posts.js'
import PostForm from './postform.js'

const PostCotainer = () => {
    return (
      <div className="">
        <Posts />
        <div>
          <PostForm />
        </div>
      </div>
    );
}

export default PostCotainer;
