import React from 'react'
import './rightBar.css'

export default function RightBar() {
  return (
    <div className='rightBarDiv'>
      <div className='rightBarWrapper'>
        <div className='birthDayContain'>
        <img className='birthDayImage' src='\images\gift.png'/> 
        
        <span className='birthDayText'>
       <b> Shehari Parindaya</b> and <b> 3 other friends </b>have a birth day to day
        </span>
        </div>
      <img src='\images\add.jpg' className='addImage'></img> 

      <h4 className='rightBarTital'> Online Friends</h4>
      <ul className='rightBarFriendLIst'>
        <li className='rightBarFriend'>
          <div className='rightBarProfileImageContainer'>
               <img src='\images\temple.jpg' className='rightBarProfileImage'/> 
               <span className='online'></span>
             
          </div>
          <span className='rightUserName'>Shehan Rashmika</span>
        </li>
      </ul>
       
      
      </div>
    </div>
  )
}
