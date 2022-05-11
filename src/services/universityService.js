import axios from "axios";

export default class University{
    getAllUniversities(){
        return axios.get("http://localhost:8080/api/universities/getall");
    }
}