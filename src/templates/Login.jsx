import React from 'react';
import { connect }            from 'react-redux';
import {createSocket,disconnect} from '../actions/WebSocketActions';
const protocol = "chat";

export default connect(state => ({ socket:state.socket}))(
 class Home extends React.Component {
  login = (e) =>
  {
    var {dispatch} = this.props;
    e.preventDefault();
    var login = e.target.login.value;
    var channel = e.target.channel.value;
    dispatch(createSocket(protocol,login,channel));
  }
  disconnect = (e) => {
    var {dispatch} = this.props;
    e.preventDefault();
    dispatch(disconnect());
  }
  render() 
  {
  	var {socket} = this.props;
    var login = socket.login;
    let connected = socket.connected;

    var socketMessage = connected?"connected":"Not connected";
    var socketMessageStyle = connected?{color:"green"}:{color:"red"};
    console.log("rendering message");
    //utiliser un composant pour interprêter le contenu du serveur (et essayer de ne pas avoir à s'en soucier ici)
    return (
      <div id="login">
          	{!connected && <form id="login-form" onSubmit={this.login}>
              <input id="login" name="login" type="text" />
              <input id="channel" name="channel" type="text" />
              <button type="submit" disabled={connected}> Connect </button> 
            </form>}
            {connected && <div id='logininfos'>{login} <button id='disconnect' onClick={this.disconnect}>disconnect</button></div>}
            <span style={socketMessageStyle}>{socketMessage}</span><br/>
      </div>

    );
  }
})