import Post from './Post';
import { useState, useEffect } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => response.json())
      .then((posts) => {
        console.log(posts);
        setPosts(posts);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return <h1 style={{ color: 'red', margin: '40px auto' }}>Error: {error}</h1>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <hr />
      {isLoading ? <h2>Loading...</h2> : posts.length > 0 && posts.map((post) => <Post key={post.id} {...post} />)}
    </div>
  );
}

export default Posts;
