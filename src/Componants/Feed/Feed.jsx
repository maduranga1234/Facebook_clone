import React from 'react';
import './feed.css';
import Share from '../Share/Share';
import Post from '../Post/Post';
import { Posts } from '../../postDataBase';

export default function Feed() {
  return (
    <div className='feedDiv'>
      <div className='feedWrapper'>
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

