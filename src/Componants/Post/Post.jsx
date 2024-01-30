import React from 'react';
import './Post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Post({ post }) {
  // Add a check for post existence
  if (!post) {
    return null; // or handle accordingly
  }

  // Add a check for the 'date' property
  const postDate = post.date ? new Date(post.date).toLocaleString() : '';

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img className='postProfileImage' src='\images\profilePic.jpg' alt='Profile' />
            <span className='postUserName'> Maduranga Sadaruwan</span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVertIcon />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post.des}</span>
          <img className='postImage' src={post.photo} alt='Post' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <ThumbUpAltIcon className='likeIcon' />
            <FavoriteIcon className='heartIcon' />
            <span className='likeCount'> You and{" "+post.like+" " } people like this </span>
            <span className='commentCount'> {post.comment} comment  </span>
          </div>
          <div className='postBottomRight'></div>
        </div>
      </div>
    </div>
  );
}
