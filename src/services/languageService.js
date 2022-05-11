import axios from "axios";

export default class Language{
    getAllLanguages(){
        return axios.get("http://localhost:8080/api/languages/getAll");
    }
}