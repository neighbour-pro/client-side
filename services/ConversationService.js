import axios from 'axios';

export default class ConversationService{
    constructor(){
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/conversation',
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

    

}