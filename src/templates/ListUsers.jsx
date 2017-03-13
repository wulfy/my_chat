import React from 'react';
import { connect }            from 'react-redux';

export default connect(state => ({ command:state.command}))(
 class ListUsers extends React.Component {
  render() 
  {
  	var {command} = this.props;
    console.log("----------command-----------");
    console.log(command); 
    var command_data = command.command_data;
    var usersListHtml = null;

    if(command_data)
      usersListHtml = command_data.map((userData) => <span>{userData.login} </span>);
    //utiliser un composant pour interprêter le contenu du serveur (et essayer de ne pas avoir à s'en soucier ici)
    return (
      <div id="userList">
          	{usersListHtml}
      </div>

    );
  }
})