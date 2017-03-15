import React                  from 'react';

export default class Calendrier extends React.Component {
  render() 
  {
  	let {chanId} = this.props.match.params;
    return (
      <div id="content">
          <div id="channel"> Le nom de la room : {chanId} </div>
      </div>
    );
  }
}

/*
const Channel = ({match}) => (

      <div id="content">
          <div id="channel"> Le nom de la room : {match.params.chanId} </div>
      </div>
    );

export default Channel;

*/