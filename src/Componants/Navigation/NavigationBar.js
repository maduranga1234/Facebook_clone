import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import './NavigationBar.css';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { ForkLeft, Margin } from '@mui/icons-material';



export default function NavigationBar() {
  return (
  
    <div className='navBarContain'> 

    <div className='navBarLeft'>
    <img src="\images\iconLogo.png" className='icon'></img>

    <div className='searchBar'>

      
    <input placeholder='Search Peerhub' id='searchInput' ></input>
    <SearchIcon className='searchIcon'/>

    </div>
   
   



    </div>

    <div className='navBarCenter'>

    <HomeIcon className='icon' style={{ fontSize: 28 }}/>
    <OndemandVideoIcon className='icon'  style={{ fontSize: 28 }}/>
    <StorefrontIcon className='icon'  style={{ fontSize: 28 }}/>
    <PersonIcon className='icon'  style={{ fontSize: 28 }}/>
    

    </div>

    <div className='navBarRight'>
    
    <div className='rightIcon'>
    <AppsOutlinedIcon style={{ fontSize: 28 }}/>
      
       </div>
      <div className='rightIcon'>
      <MessageOutlinedIcon style={{ fontSize: 28 }}/>
      <span className='iconItem'>2</span>

      </div>
      <div className='rightIcon'>
      <NotificationsOutlinedIcon style={{ fontSize: 28 }}/>
      <span className='iconItem'>5</span>

      </div>
       
    

    </div>

    <div id='profileDiv'>

<img src="\images\profilePic.jpg" id='profileImg'></img>
</div>

    </div>



   
)
}

















    {/* <div className='navLeft'> 
   
   
    <SearchIcon style={{ fontSize: 26 }} className='searchIcon'/>


    <img src="\images\iconLogo.png" className='icon'></img>


      <input placeholder='Search Peerhub' id='searchText' >

      
      </input>

      

    
    </div>
    <div className='navCenter'> 
    
    <HomeIcon className='icon' style={{ fontSize: 28 }}/>
    <OndemandVideoIcon className='icon'  style={{ fontSize: 28 }}/>
    <StorefrontIcon className='icon'  style={{ fontSize: 28 }}/>
    <PersonIcon className='icon'  style={{ fontSize: 28 }}/>
    
  
    


    </div>
    <div className='navRight'>
       <div>
       <AppsOutlinedIcon style={{ fontSize: 28 }}/>
      
       </div>
      <div>
      <MessageOutlinedIcon style={{ fontSize: 28 }}/>
      <span className='iconItem'>2</span>

      </div>
      <div>
      <NotificationsOutlinedIcon style={{ fontSize: 28 }}/>
      <span className='iconItem'>5</span>

      </div>
       
      

       <div id='profileDiv'>

        <img src="\images\profilePic.jpg" id='profileImg'></img>
       </div>


    </div> */}
    
     
   
 
