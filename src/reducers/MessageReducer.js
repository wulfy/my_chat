import {default as PluginsHelper}  from '../lib/pluginsHelper'; 

const defaultState = {messages:[]};
const TYPE_ERROR = 'error';
const SERVER_LOGIN = 'server';
const pluginsHelperObj = new PluginsHelper();
console.log(PluginsHelper);

export default function MessageReducer(state = defaultState, action) {

  var {messages,...rest} = state;
  switch(action.type) {
    case "SOCKET_ERROR_MESSAGE":
    console.log("error ");
    console.log(action);

    return action;
    case "SOCKET_MESSAGE_RECEIVED":
      console.log("message reducer"); 
      console.log(action);
      var currentAction = action;
      let {data,login} = currentAction.message;
      let {text,date} = data;
      let color = login===SERVER_LOGIN?'blue':'';
      console.log("data");
      console.log(data);
      console.log(text);
      let newMessage = {text:text,login:login, style:{color:color}, timestamp:date};

      currentAction = {...currentAction,message:newMessage};

      console.log("currentAction");console.log(currentAction);
      
      currentAction = {...currentAction,...pluginsHelperObj.apply(currentAction)};
      console.log("currentAction");
      console.log(currentAction);
      messages.push(currentAction.message)
      return {...currentAction,type:'message',messages:messages} ;
    case "SOCKET_ERROR_MESSAGE":
        messages.push({text:action.message,style:{color:"red"}})
        return {...rest,type:"message",messages:messages} ;
    default:
      return state;
  }
}