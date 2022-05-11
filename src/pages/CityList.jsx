import { useEffect, useState } from "react";
import React from 'react'
import { Dropdown, DropdownMenu } from 'semantic-ui-react'
import CityService from "../services/cityService";

export default function CityList(){
const[cities,setCities]=useState([]);
useEffect(()=>{
    let cityService = new CityService();
    
      cityService.getAllCities().then(result=>setCities(result.data.data));
   
   
  },[])
  const options=[]
  cities.map(city=>(
      options.push({key:city.cityId,value:city.cityName,text:city.cityName})

  )
  
  )
 
 
 return(
   
        <Dropdown selection options={options} placeholder='Choose a city' className="cities" />
      

)}
