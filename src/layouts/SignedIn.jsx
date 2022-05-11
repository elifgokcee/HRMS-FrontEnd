import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
  const options = [
    { key: 1, text: 'PROFILE', value: 1 },
    { key: 2, text: 'APPLICATIONS', value: 2 },
    {key:4,   text:'RESUMES',    value: 4 },
    { key: 3, text: 'SIGN OUT', value: 3 }
  ]


      return (
    <div className='accountMenu' >
     
           <Dropdown className='user-menu' text='ACCOUNT' style={{textAlign:"center"}}
           
           options={options} pointing="top left">
           
           </Dropdown>
     
        </div>
   
  )
}
