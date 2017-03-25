import React from 'react';
import { connect }            from 'react-redux';
//import {sendMessage}  from '../actions/MessageActions';

export default connect(state => ({ message: state.message}))(
 class ErrorMessages extends React.Component {
  render() 
  {
  	let {error_messages} = this.props.message;
    console.log("error_messages");
    console.log(error_messages);
    error_messages = typeof error_messages === 'undefined' ? [] : error_messages;
    //utiliser un composant pour interprêter le contenu du serveur (et essayer de ne pas avoir à s'en soucier ici)
    return (
      <div id="error_messages">
          	<span> errors : </span>
          	{error_messages.map((message,index)=> <span key={"errormsg-"+index} className="message" style={message.style}> {message.text} </span>)}
      </div>

    );
  }
})