import axios from "axios";

export default class JobTitleService{
    getAllJobTitle(){
        return axios.get("http://localhost:8080/api/jobtitles/getall");
    }
    addJobTitle(title){
        return axios.post("http://localhost:8080/api/jobtitles/add",title);
    }
}