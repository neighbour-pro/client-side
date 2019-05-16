import axios from 'axios';
import config from '../config/config';

export default class AuthService{
    constructor(){
        this.service = axios.create({
            baseURL: config.SERVER_URL+'/api/auth',
            withCredentials: true
        });
    }

    isLogged(){
        return this.service.get('/logged');
    }

    signup(post){
        return this.service.post('/signup', {...post});
    }

    login(post){
        return this.service.post('/login', {...post});
    }

    logout(){
        return this.service.post('/logout', {});
    }
}