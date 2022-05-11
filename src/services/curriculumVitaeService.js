import axios from "axios";

export default class CurriculumVitaeService{
    getAllCurriculumVitaes(){
        return axios.get("http://localhost:8080/api/myCurriculumVitaes/getAll");
    }
    getById(seekerId){
       return axios.get("http://localhost:8080/api/myCurriculumVitaes/getById?seekerId="+seekerId)
    }
    addCurriculumVitae(vitae){
        return axios.post("http://localhost:8080/api/myCurriculumVitaes/add",vitae);
    }
}