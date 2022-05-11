import axios from "axios";

export default class KnownTechnology{
    getAllKnownTech(){
        return axios.get("http://localhost:8080/api/knowntechnologies/getall");
    }
    addKnownTech(knownTechnology){
        return axios.post("http://localhost:8080/api/knowntechnologies/add",knownTechnology);
    }
}