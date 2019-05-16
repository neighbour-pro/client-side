import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import ChatList from '../ChatList/ChatList';
import UniqueChat from '../UniqueChat/UniqueChat';
import OfferList from '../Offer/OfferList';
import MakeOffer from '../Offer/MakeOffer';



export default class MessageRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: '',
        }
    }

    componentDidMount(){
        if(this.props.nextProps && this.props.nextProps.professional_id){
            
            this.setState({
                ...this.state,
                view: 'uniquechat',
                nextProps: this.props.nextProps.professional_id
            });
            return;
        }

        this.setState({
            ...this.state,
            view: 'chatlist'
        });
    }

    redirectTo = (where, next) => {
        this.setState({
            ...this.state,
            view: where,
            nextProp: next
        })
    }

    render() {
        {
            switch(this.state.view){
                case 'addreview':
                return <AddReview/>
                case 'offerlist':
                return <OfferList/>
                case 'acceptedoffer':
                return <AcceptedOffer/>
                case 'makeoffer':
                return <MakeOffer/>
                case 'uniquechat':
                return <UniqueChat/>
                case 'chatlist':
                return <ChatList/>
                default:
                return <ChatList/>
            }
        }
    }

}