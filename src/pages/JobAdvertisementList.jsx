import React,{ useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Icon, Menu, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService';

export default function JobAdvertisementList() {
    
       
      
    const [advertisements, setAdvertisements] = useState([]);
  
    useEffect(()=>{
      let jobAdvertisementService = new JobAdvertisementService();
      
        jobAdvertisementService.getJobAdvertisements().then(result=>setAdvertisements(result.data.data));
     
     
    },[])
   
    
  return (
    <div className='dataTable'>
          <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Job Position</Table.HeaderCell>
        <Table.HeaderCell>Explanation</Table.HeaderCell>
        <Table.HeaderCell>Last Apply</Table.HeaderCell>
        <Table.HeaderCell>Employer</Table.HeaderCell>
        <Table.HeaderCell>Number of Position</Table.HeaderCell>
        <Table.HeaderCell>Release Date</Table.HeaderCell>
       

      </Table.Row>
    </Table.Header>

    <Table.Body >
        {advertisements.map(advertisement=>(

<Table.Row key={advertisement.id}>
  
<Table.Cell><Link to={`/jobadvertisements/${advertisement.id}`}>{advertisement.jobName}</Link></Table.Cell>
<Table.Cell>{advertisement.explanation}</Table.Cell>
<Table.Cell>{(advertisement.lastApplicationDate)}</Table.Cell>
<Table.Cell>{advertisement.companyName}</Table.Cell>
<Table.Cell>{(advertisement.numberOfPosition)}</Table.Cell>
<Table.Cell>{(advertisement.releaseDate)}</Table.Cell>



</Table.Row>
        ))
        
       
        
        }
     
     </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='6'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>

    </div>
  )
}