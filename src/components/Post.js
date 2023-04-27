import { useState, useEffect } from 'react';

function Post() {

  const[post, setPost] = useState(null);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => setPost(json))
  }, [])

  return (
    <>
      {post && <h1>{post.title}</h1>}
    </>
  )
    
  
}

export default Post;