import './Lesson07Styles.css';
import { getSinglePost } from './api';
import { useState } from 'react';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);

  async function handleClickGetPost() {
    const data = await getSinglePost(1);
    setPost(data);
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleClickGetPost}>
        Get post
      </button>
      <div className="content">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        )}
      </div>
    </div>
  );
}
