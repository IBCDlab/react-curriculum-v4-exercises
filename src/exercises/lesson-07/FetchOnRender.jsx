import './Lesson07Styles.css';
import { getPosts } from './api.js';
import { useEffect } from 'react';
import { useState } from 'react';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const data = await getPosts();
      setPosts(data);
    }
    loadPosts();
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
