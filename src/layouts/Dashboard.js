import React from 'react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import Navi from './Navi'
import { Grid } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import JobAdvertisementDetail from '../pages/JobAdvertisementDetail'
import "./advertDetail.css"
import CityList from '../pages/CityList'


export default function Dashboard() {
  return (
    <div>
        <Navi/>
       <Grid >
    <Grid.Row>
      <Grid.Column width={8}>
        <Routes>
          <Route exact path='/' element={<JobAdvertisementList/>}>
          </Route>
          <Route exact path='/jobAdvertisements' element={<JobAdvertisementList/>}>
          </Route>
          <Route  path='/jobadvertisements/:id' element={<JobAdvertisementDetail/>}>
          </Route>
        </Routes>
        <CityList/>
      </Grid.Column>
     
    </Grid.Row>

   
  </Grid>
    
     
    </div>
  )
}
