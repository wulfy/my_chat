import React from 'react';
import { connect }    from 'react-redux';
import {sendMessage}  from '../actions/MessageActions';
import ChatMessages from './ChatMessages';
import ErrorMessages from './ErrorMessages';
import ListUsers from './ListUsers';
import Login from './Login';

export default connect(state => ({ message: state.message, socket:state.socket}))(
 class Home extends React.Component {

  onSendMessage = (e) =>
  {
  	var {dispatch,socket} = this.props;
  	e.preventDefault();

  	if(socket.connected)
  	{
      dispatch(sendMessage(e.target.message.value,'c1'));
  	}

  	//dispatch(MessageActions.sendMessage(e.target.message.value,e.target.color.value,socket));
  }
  render() 
  {
  	console.log(this.props.message);
  	var {socket} = this.props;
  	let messages = this.props.message ? this.props.message.messages : [];

  	let disabled = !socket.connected;
  	console.log(messages);
  	messages = typeof messages !== "undefined" ? messages  : [];

    console.log("rendering home");
    console.log(messages);
    //var socketMessage = !disabled?"connected":"Not connected";
    //var socketMessageStyle = !disabled?{color:"green"}:{color:"red"};
    //utiliser un composant pour interprêter le contenu du serveur (et essayer de ne pas avoir à s'en soucier ici)
    return (
      
      <div id="homecontent">
          	<h1> Hello you are in the chat home ! </h1>
            <Login/>
          	{!disabled && <form id="message-form" onSubmit={this.onSendMessage}>
          		 <button type="submit" disabled={disabled}> send message </button> <input id="message" name="message" type="text" />
          	</form>
            }
            <ErrorMessages/>
          	{!disabled && <ChatMessages/> }
            {!disabled && <ListUsers/> }
      </div>


    );
  }
})