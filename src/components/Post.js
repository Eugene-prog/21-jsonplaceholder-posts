import "./Post.css";

function Post(props) {
  const {id, title, userId, body} = props;

  return (
    <div className='post'>
      <p>user: {userId}</p>
      <p>post: {id}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

export default Post;