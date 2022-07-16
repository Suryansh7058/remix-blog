import { Link, useLoaderData } from '@remix-run/react';
import { ReactChild, ReactFragment, ReactPortal } from 'react';

type Props = {};

export const loader = () => {
  const data = {
    posts: [
      { id: 1, title: 'Post 1', body: 'This is the first post' },
      { id: 1, title: 'Post 2', body: 'This is the second post' },
      { id: 1, title: 'Post 3', body: 'This is the third post' },
      { id: 1, title: 'Post 4', body: 'This is the fourth post' },
    ],
  };
  return data;
};

const Posts = (props: Props) => {
  const { posts } = useLoaderData();
  return (
    <div>
      <div className="page-header">
        <h1>Posts</h1>
        <Link to="/posts/new-post" className="btn">
          New Post
        </Link>
      </div>

      <ul className="posts-list">
        {posts.map(
          (post: { title: string | null; body: string | null; id: number }) => {
            return (
              <li key={post.id}>
                <Link to={`/posts/${post.title}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{post.body}</p>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Posts;
