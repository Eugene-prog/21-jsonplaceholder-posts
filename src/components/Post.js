function Post(props) {
  const {id, title, userId, body} = props;
  
  return (
    <div key={id} className='post'>
      <p>user: {userId}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

export default Post;