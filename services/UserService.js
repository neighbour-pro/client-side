import axios from 'axios';
import config from '../config/config';

export default class UserService{
    constructor(){
        this.service = axios.create({
            baseURL: config.SERVER_URL+'/api/user',
            withCredentials: true
        });
    }

    getClientById(id){
        return this.service.get('/'+id)
    }
    getProfessionalById(id){
        return this.service.get('/'+id)
    }

    getProfessionalNearMe(lng, lat, query){
        console.log(config.SERVER_URL+'/api/user'+`/nearme/${lng}/${lat}/20000/${query}`)
        return query !== '' ?
        this.service.get(`/nearme/${lng}/${lat}/20000/${query}`) :
        this.service.get(`/nearme/${lng}/${lat}/20000`)
    }

    getReviewsFromProfessional(professionalId){
        return this.service.get(`/professional/${professionalId}/reviews`)
    }

    updateClient(clientId, post){
        return this.service.put(`/update/${clientId}`, post);
    }

}