import axios from "axios";

export default class EducationService{
getAllEducations(){
    return axios.get("http://localhost:8080/api/educations/getAll");
}
deleteEducation(educationId){
    return axios.delete("http://localhost:8080/api/educations/delete?educationId="+educationId);
}
addEducation(education){
    return axios.post("http://localhost:8080/api/educations/add",education);
}
}