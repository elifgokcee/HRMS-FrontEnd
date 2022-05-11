import axios from "axios";

export default class JobSeekerService{
    getAllJobSeekers(){
        return axios.get("http://localhost:8080/api/jobexperiences/getalljobexperiences");
    }
    addJobSeeker(jobseeker){
        return axios.post("http://localhost:8080/api/jobseekers/save",jobseeker);
    }
}