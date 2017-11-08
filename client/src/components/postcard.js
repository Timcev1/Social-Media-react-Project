import React from 'react';

const PostCard = ({ post }) => (
  <div>
      <div key={post.id} className="postcard">
      <h3>{post.title}</h3>
      <p> Content: {post.content}</p>
      </div>
  </div>
)

export default PostCard;
