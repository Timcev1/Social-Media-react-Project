export function addPost(post){
  return {
    type: 'POST',
    post: post,
    datatype: 'json',
    contentType: 'application/json',
    data: JSON.stringify({ post: {title: "post.title", content: "post.content"}}),
    success: function(json){}
  };
}
