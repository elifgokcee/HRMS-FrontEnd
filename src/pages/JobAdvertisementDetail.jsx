import React from 'react'
import JobAdvertisementService from '../services/jobAdvertisementService';
import { useParams } from 'react-router';
import { useState,useEffect } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';


export default function JobAdvertisementDetail() {
    const [advertisement , setAdvertisement ]= useState([]);
    let{id}=useParams();

    useEffect(()=>{
      let jobAdvertisementService = new JobAdvertisementService();
     
        jobAdvertisementService.getJobAdvertisementById(id).then(result=>setAdvertisement(result.data.data));
     
    
    },[])

  return (
  
    <div className='advertDetail'>
  <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>{advertisement.employer&&advertisement.employer.companyName}</Card.Header>
        <Card.Meta>{advertisement.city}</Card.Meta>
        <Card.Description>{advertisement.explanation} </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Apply
          </Button>
          <Button basic color='brown'>
            Save
          </Button>
        </div>
      </Card.Content>
    </Card>
    
  </Card.Group>
    </div>
  )
}
