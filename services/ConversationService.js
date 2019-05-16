import axios from 'axios';

export default class ConversationService{
    constructor(){
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/conversation',
            withCredentials: true
        });
    }

    

}