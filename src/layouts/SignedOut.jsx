import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
  return (
    <div>
      <Menu.Item>
      <Button className='signInButton' onClick={props.SignedIn}>Sign In</Button>
      <Button className='signOutButton'>Sign Up</Button>
      </Menu.Item>
     
    </div>
  )
}
