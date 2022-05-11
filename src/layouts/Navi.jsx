import React, { useState } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

import './Navi.css'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
export default function Navi() {
 
  
  const options = [
    { key: 1, text: 'ABOUT', value: 1 },
    { key: 2, text: 'SEARCH JOB', value: 2 },
    { key: 3, text: 'CONTACT US', value: 3 }]

    const[isAuthenticated,setisAuthenticated]=useState(true);
       function handleSignOut(){
        setisAuthenticated(false);
       }
       function handleSignIn(){
        setisAuthenticated(true);
       }
      return (
    <div >
       <Menu className='dropdown-menu' >
       <Dropdown className='user-menu' text='HOME' style={{textAlign:"center"}}
           
           options={options} pointing="top right">
           
           </Dropdown>
      <Menu.Menu position="right">
        {isAuthenticated? <SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
      
    
      </Menu.Menu>
      </Menu>
     
     
    
    </div>
  )
}
