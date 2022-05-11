import axios from "axios";

export default class JobAdvertisementService {

    getJobAdvertisements() {

        return axios.get("http://localhost:8080/api/jobadvertisements/getallactivejobadvertisement");

    }
    getallactivejobadvertisementsorteddatedesc(){
  return axios.get("http://localhost:8080/api/jobadvertisements/getallactivejobadvertisementsorteddatedesc");
    }
    getJobAdvertisementById(id){
      return axios.get("http://localhost:8080/api/jobadvertisements/getbyid?id="+id);
    }
}