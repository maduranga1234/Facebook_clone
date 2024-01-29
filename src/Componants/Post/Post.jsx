import React from 'react'
import './Post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Post() {
  return (
    <div className='post'>
        <div className='postWrapper'>
         
         <div className='postTop'> 
         
            <div className='postTopLeft'>
            <img className='postProfileImage' src='\images\profilePic.jpg'></img>
            <span className='postUserName'> Maduranga Sadaruwan</span>
            <span className='postDate'>5 minite ago</span>


            </div>
            <div className='postTopRight'>
              <MoreVertIcon/>

            </div>

         
         </div>
         <div className='postCenter'>
         
         <span className='postText'>Temple Of The Tooth</span>
         <img className='postImage' src='\images\temple.jpg'></img>

         </div>
         <div className='postBottom'>

          <div className='postBottomLeft'>

           <ThumbUpAltIcon className='likeIcon'/>
           <FavoriteIcon className='heartIcon'/>
           <span className='likeCount'> You and 65 others</span>
           <span className='commentCount'> 10 comments </span>

          </div>
          <div className='postBottomRight'>

             

          </div>


         </div>


        </div>
    </div>
  )
}
