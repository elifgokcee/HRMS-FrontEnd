import axios from "axios";
import { act } from "react-dom/test-utils";

export default class JobExperienceService{
    getAllJobExperiences(){
        return axios.get("http://localhost:8080/api/jobexperiences/getalljobexperiences");
    }
    addJobExperience(experience){
        return axios.post("http://localhost:8080/api/jobexperiences/addjobexperience",experience)
    }
}