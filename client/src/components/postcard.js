import React from 'react';

const PostCard = ({ post }) => (
  <div>
      <div key={post.id} className="postcard">
      <h3>{post.title}</h3>
      <p> {post.content}</p>
      <div>
       <button className="like-button" onClick={this.handleLike}>
         Like
       </button>
     </div>

      </div>

  </div>
)

export default PostCard;
