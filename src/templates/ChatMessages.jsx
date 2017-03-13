import React from 'react';
import { connect }            from 'react-redux';
import {sendMessage}  from '../actions/MessageActions';

export default connect(state => ({ message: state.message}))(
 class ChatMessages extends React.Component {
  render() 
  {
  	let messages = this.props.message ? this.props.message.messages : [];
  	messages = typeof messages != "undefined" ? messages  : [];

    console.log("rendering message");
    console.log(this.props.message);
    //utiliser un composant pour interprêter le contenu du serveur (et essayer de ne pas avoir à s'en soucier ici)
    return (
      <div id="messages">
          	<span> Last message : </span>
          	{messages.map((message,index)=> <span id="{index}" className="message" style={message.style}> {message.login} > {message.message} </span>)}
      </div>

    );
  }
})