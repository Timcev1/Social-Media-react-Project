import React from 'react';

const Post = (props) => (
  
  <div>
    <h1> Post Component </h1>
    {props.posts.map(post =>
      <div key={post.id} className="postcontainer">
      <h3>{post.title}</h3>
      <p> Content: {post.content}</p>
      </div>
    )}
  </div>
);

export default Post;
