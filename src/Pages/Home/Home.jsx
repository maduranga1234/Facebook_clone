import React from 'react'
import NavigationBar from '../../Componants/Navigation/NavigationBar'
import './Home.css';
import SideBar from '../../Componants/SideBar/SideBar';
import Feed from '../../Componants/Feed/Feed';
import RightBar from '../../Componants/RightBar/RightBar';

export default function Home() {
  return (
  <>

  
   <NavigationBar/> 
   
   <div id='homeContent'>
   
     <SideBar></SideBar>
     <Feed></Feed>
     <RightBar></RightBar>
    </div>
  </>

    
   
  )
}

