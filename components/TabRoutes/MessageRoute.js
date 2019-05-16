import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import ChatList from '../ChatList/ChatList';
import UniqueChat from '../UniqueChat/UniqueChat';
import OfferList from '../Offer/OfferList';
import MakeOffer from '../Offer/MakeOffer';
import ConversationService from '../../services/ConversationService';



export default class MessageRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: '',
        }
        this.conversationService = new ConversationService();
    }

    componentDidMount() {
        console.log(this.props.nextProps);
        if (this.props.nextProps && this.props.nextProps.professional_id) {
            this.conversationService.getConversationBetweenUsers(this.props.isLoggedIn._id, this.props.nextProps.professional_id)
                .then(conversation => {
                    console.log(conversation)
                    this.setState({
                        ...this.state,
                        view: 'uniquechat',
                        nextProps: conversation.data.conversation._id
                    });
                })
                .catch(() => {
                    this.conversationService.createConversation(this.props.isLoggedIn._id, this.props.nextProps.professional_id)
                        .then(conversation => {
                            console.log('Created: '+conversation)
                            this.setState({
                                ...this.state,
                                view: 'uniquechat',
                                nextProps: conversation.data._id
                            });
                        })
                })
                .catch(err => console.log(err));
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
            nextProps: next
        })
    }

    render() {
        {
            switch (this.state.view) {
                case 'addreview':
                    return <AddReview redirectTo={(where, props) => this.redirectTo(where, props)} nextProps={this.state.nextProps} isLoggedIn={this.props.isLoggedIn} changeMenu={(user) => this.props.changeMenu(user)} changeTabIndex={(n, props) => this.props.changeTabIndex(n, props)} />
                case 'offerlist':
                    return <OfferList redirectTo={(where, props) => this.redirectTo(where, props)} nextProps={this.state.nextProps} isLoggedIn={this.props.isLoggedIn} changeMenu={(user) => this.props.changeMenu(user)} changeTabIndex={(n, props) => this.props.changeTabIndex(n, props)} />
                case 'acceptedoffer':
                    return <AcceptedOffer redirectTo={(where, props) => this.redirectTo(where, props)} nextProps={this.state.nextProps} isLoggedIn={this.props.isLoggedIn} changeMenu={(user) => this.props.changeMenu(user)} changeTabIndex={(n, props) => this.props.changeTabIndex(n, props)} />
                case 'makeoffer':
                    return <MakeOffer redirectTo={(where, props) => this.redirectTo(where, props)} nextProps={this.props.nextProps} isLoggedIn={this.props.isLoggedIn} changeMenu={(user) => this.props.changeMenu(user)} changeTabIndex={(n, props) => this.props.changeTabIndex(n, props)} />
                case 'uniquechat':
                    return <UniqueChat redirectTo={(where, props) => this.redirectTo(where, props)} nextProps={this.state.nextProps} isLoggedIn={this.props.isLoggedIn} changeMenu={(user) => this.props.changeMenu(user)} changeTabIndex={(n, props) => this.props.changeTabIndex(n, props)} />
                case 'chatlist':
                    return <ChatList redirectTo={(where, props) => this.redirectTo(where, props)} nextProps={this.state.nextProps} isLoggedIn={this.props.isLoggedIn} changeMenu={(user) => this.props.changeMenu(user)} changeTabIndex={(n, props) => this.props.changeTabIndex(n, props)} />
                default:
                    return <ChatList redirectTo={(where, props) => this.redirectTo(where, props)} nextProps={this.state.nextProps} isLoggedIn={this.props.isLoggedIn} changeMenu={(user) => this.props.changeMenu(user)} changeTabIndex={(n, props) => this.props.changeTabIndex(n, props)} />
            }
        }
    }

}