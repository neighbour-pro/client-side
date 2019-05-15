import axios from 'axios';

export default class AuthService{
    constructor(){
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/auth',
            withCredentials: true
        });
    }

    isLogged(){
        return this.service.get('/logged');
    }
}