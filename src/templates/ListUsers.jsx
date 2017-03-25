import React from 'react';
import { connect }            from 'react-redux';
const COMMAND_UPDATE_USR_LIST = 'update_user_list';

export default connect(state => ({ command:state.command}))(
 class ListUsers extends React.Component {
  render() 
  {
  	var {command_data,type} = this.props.command;
    console.log("----------command-----------");
    console.log(this.props.command); 
    var usersListHtml = null;

    if(command_data && type === COMMAND_UPDATE_USR_LIST)
      usersListHtml = command_data.map((userData,index) => <span key={'usrlist-'+index}>{userData.login} </span>);
    //utiliser un composant pour interprêter le contenu du serveur (et essayer de ne pas avoir à s'en soucier ici)
    return (
      <div id="userList">
          	{usersListHtml}
      </div>

    );
  }
})