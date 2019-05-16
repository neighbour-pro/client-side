import axios from 'axios';
import config from '../config/config';

export default class ConversationService{
    constructor(){
        this.service = axios.create({
            baseURL: config.SERVER_URL+'/api/conversation',
            withCredentials: true
        });
    }

    getConversationBetweenUsers(clientId, professionalId){
        return this.service.get(`/between/${clientId}/${professionalId}`);
    }

    createConversation(clientId, professionalId){
        return this.service.post(`/add/${clientId}/${professionalId}`, {});
    }

    getConversations(userId){
        return this.service.get(`/${userId}`);
    }

    getConversationMessages(conversationId){
        return this.service.get(`/${conversationId}/messageList`);
    }

    sendMessage(conversationId, post){
        return this.service.post(`/${conversationId}/addMessage`, post)
    }

    

}