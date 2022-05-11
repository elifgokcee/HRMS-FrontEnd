import axios from "axios";

export default class CoverLetterService{
    getAllCoverLetter(){
        return axios.get("http://localhost:8080/api/coverletters/getAll");
    }
 
    getCoverLetterById(id){
        return axios.get("http://localhost:8080/api/coverletters/getById?id="+id);
    }
    addCoverLetter(coverLetter){
        return axios.post("http://localhost:8080/api/coverletters/add",coverLetter)
    }
    deleteCoverLetter(id){
        return axios.delete("http://localhost:8080/api/coverletters/delete?id="+id)
    }
    updateCoverLetter(id,text){
        return axios.put("http://localhost:8080/api/coverletters/update?letterId="+id&"text="+text)
    }
}