import axios from "axios";

export default class KnownLanguageService{
    getAllKnownLanguages(){
        return axios.get("http://localhost:8080/api/knownlanguages/getall");
    }
    addKnownLanguage(knownLanguage){
        return axios.post("http://localhost:8080/api/knownlanguages/add",knownLanguage);
    }
}