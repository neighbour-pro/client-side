import axios from 'axios';

export default class AuthService{
    constructor(){
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/user',
            withCredentials: true
        });
    }

    getClientById(id){
        return this.service.get('/'+id)
    }
    getProfessionalById(id){
        return this.service.get('/'+id)
    }

    getProfessionalNearMe(lng, lat){
        return this.service.get(`/nearme/${lng}/${lat}/20000`)
    }

    getReviewsFromProfessional(professionalId){
        return this.service.get(`/professional/${professionalId}/reviews`)
    }

}