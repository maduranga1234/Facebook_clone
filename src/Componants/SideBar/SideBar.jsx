import React from 'react'
import './sideBar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import SchoolIcon from '@mui/icons-material/School';

export default function SideBar() {
  return (
    <div className='sideBar'>
     <div className='sideBarRapper'>
        <ul className='sideBarList'>
            <li className='sideBarListItem'>
                
                    <RssFeedIcon className='sideBarIcon'></RssFeedIcon>
                     <span className='sideBarListText'> Feed</span>

            </li>

            <li className='sideBarListItem'>
                
                <ChatOutlinedIcon className='sideBarIcon'></ChatOutlinedIcon>
                 <span className='sideBarListText'> Chat</span>

           </li>

           <li className='sideBarListItem'>
                
                <GroupIcon className='sideBarIcon'></GroupIcon>
                 <span className='sideBarListText'> Groups</span>

           </li>

           <li className='sideBarListItem'>
                
                <BookmarkIcon className='sideBarIcon'></BookmarkIcon>
                 <span className='sideBarListText'> Bookmarks</span>

           </li>

           <li className='sideBarListItem'>
                
                <HelpOutlineOutlinedIcon className='sideBarIcon'></HelpOutlineOutlinedIcon>
                 <span className='sideBarListText'> Questions</span>

           </li>

            <li className='sideBarListItem'>
                
                <WorkOutlineOutlinedIcon className='sideBarIcon'></WorkOutlineOutlinedIcon>
                 <span className='sideBarListText'> Jobs</span>

           </li>

           <li className='sideBarListItem'>
                
                <TodayOutlinedIcon className='sideBarIcon'></TodayOutlinedIcon>
                 <span className='sideBarListText'> Events</span>

           </li>

           <li className='sideBarListItem'>
                
                <SchoolIcon className='sideBarIcon'></SchoolIcon>
                 <span className='sideBarListText'> Courses</span>

           </li>

        </ul>

        <button className='SliderBarButton'>Show more</button>
        <hr className='sliderBarHr'/>
        <ul className='sliderBarFriendList'>
            <li className='slidbarFriend'> 
            <img className='slidbarFriendImg' src='\images\bleser.jpg'></img>
            <span className='friendName'>Maduranga Sadaruwan</span>

            </li>
            <li className='slidbarFriend'> 
            <img className='slidbarFriendImg' src='\images\bleser.jpg'></img>
            <span className='friendName'>Maduranga Sadaruwan</span>


            </li>
            <li className='slidbarFriend'> 
            <img className='slidbarFriendImg' src='\images\bleser.jpg'></img>
            <span className='friendName'>Maduranga Sadaruwan</span>


            </li>
            <li className='slidbarFriend'> 
            <img className='slidbarFriendImg' src='\images\bleser.jpg'></img>
            <span className='friendName'>Maduranga Sadaruwan</span>


            </li>
            <li className='slidbarFriend'> 
            <img className='slidbarFriendImg' src='\images\bleser.jpg'></img>
            <span className='friendName'>Maduranga Sadaruwan</span>


            </li>
            <li className='slidbarFriend'> 
            <img className='slidbarFriendImg' src='\images\bleser.jpg'></img>
            <span className='friendName'>Maduranga Sadaruwan</span>


            </li>
            <li className='slidbarFriend'> 
            <img className='slidbarFriendImg' src='\images\bleser.jpg'></img>
            <span className='friendName'>Maduranga Sadaruwan</span>


            </li>
            <li className='slidbarFriend'> 
            <img className='slidbarFriendImg' src='\images\bleser.jpg'></img>
            <span className='friendName'>Maduranga Sadaruwan</span>


            </li>
            <li className='slidbarFriend'> 
            <img className='slidbarFriendImg' src='\images\bleser.jpg'></img>
            <span className='friendName'>Maduranga Sadaruwan</span>


            </li>
            <li className='slidbarFriend'> 
            <img className='slidbarFriendImg' src='\images\bleser.jpg'></img>
            <span className='friendName'>Maduranga Sadaruwan</span>


            </li>
            <li className='slidbarFriend'> 
            <img className='slidbarFriendImg' src='\images\bleser.jpg'></img>
            <span className='friendName'>Maduranga Sadaruwan</span>


            </li>
            <li className='slidbarFriend'> 
            <img className='slidbarFriendImg' src='\images\bleser.jpg'></img>
            <span className='friendName'>Maduranga Sadaruwan</span>


            </li>
            <li className='slidbarFriend'> 
            <img className='slidbarFriendImg' src='\images\bleser.jpg'></img>
            <span className='friendName'>Maduranga Sadaruwan</span>


            </li>
            <li className='slidbarFriend'> 
            <img className='slidbarFriendImg' src='\images\bleser.jpg'></img>
            <span className='friendName'>Maduranga Sadaruwan</span>


            </li>
            <li className='slidbarFriend'> 
            <img className='slidbarFriendImg' src='\images\bleser.jpg'></img>
            <span className='friendName'>Maduranga Sadaruwan</span>


            </li>
            
        </ul>

     </div>


    </div>
  )
}
