import React from 'react';
const Post = (props) => (

  <div className="postcard">
    <h1> Post Component </h1>
    {props.posts.map(post =>
      <div key={post.id} className="postcontainer">
      <h3>{post.title}</h3>
      <p> <strong>Content:</strong> {post.content}</p>
      </div>
    )}
  </div>
);

export default Post;
