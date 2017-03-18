import React  from 'react';

const smileysCharMapping = {
"<:)" : "::ange::" ,
">:(" : "::angry::",
"oO" : "::blink::",
";)" : "::clin::",
":p" : "::langue::"
};
const smileysMapping = {
"ange" : "http://www.infowebmaster.fr/img/sdz/ange.png",
"angry" : "http://www.infowebmaster.fr/img/sdz/angry.gif",
"blink" : "http://www.infowebmaster.fr/img/sdz/blink.gif",
"clin" : "http://www.infowebmaster.fr/img/sdz/clin.png",
"langue" : "http://www.infowebmaster.fr/img/sdz/langue.png"
};
/*
{
  type: 'button',
  props: {
    className: 'button button-blue',
    children: {
      type: 'b',
      props: {
        children: 'OK!'
      }
    }
  }
}

*/

function isOdd(num) { return num % 2;}

function replaceCharBySmileysCode(text)
{
	var str = text;
	var last = {};
	str = str.replace(/\<:\)|\>:\(|oO|;\)/gi, function(matched){
	  return smileysCharMapping[matched];
	});

	return str;
}
function getAllIndexOf(text,searchedString)
{
	var matches = [];
	var match = [];
	var texts = [];
	var previousStartIndex =0
	var previousSmileyIndex = 0;
	var regexp = new RegExp(searchedString,"g");
	var watchdog = 0;



	while ((match = regexp.exec(text)) !== null && watchdog <1000) {

		watchdog ++;

	  if(previousStartIndex<match.index)
	  {
	  	texts[previousSmileyIndex] = text.substring(previousStartIndex,match.index);
	  }

	  matches[previousSmileyIndex] = match.index;
	  previousSmileyIndex++;

	  previousStartIndex = regexp.lastIndex;
	  console.log("previousStartIndex"+ previousStartIndex);
	  console.log("match.index"+ match.index);

	}

	if(previousStartIndex < text.length)
	{

		texts[previousSmileyIndex] = text.substring(previousStartIndex);
	}


	console.log(" matches " + previousStartIndex);
	console.log(matches);

	return {matches:matches,texts:texts, size:previousSmileyIndex};
}


export default class Smiley{

  checkActivate = (type) =>
  {
  		return type === "SOCKET_MESSAGE_RECEIVED";
  }

 changeAction = (action) =>
 {
 	//console.log("change action :");
 	//console.log(action);
 	let newAction = action;
 	let searchedString = ":\\)";
 	var filterData = "";
 	var domValue = [];
 	console.log(action);
 	let {message} = action;
    let {type,login,text,timestamp} = message;

 	if(text)
 	{
 		
 		/*filterData = getAllIndexOf(text,searchedString);
 		console.log("filter data");
 		console.log(filterData);
 		let images = null;


	 	for(var i=0; i<=filterData.size;i++)
	 	{
	 		images = null;

	 		if(typeof filterData.matches[i] !== 'undefined')
	 			images = <img key={'msg-img'+i} src="http://www.infowebmaster.fr/img/sdz/rouge.png" alt='smiley'/>;

	 		if(typeof filterData.texts[i] !== 'undefined')
	 			domValue.push( <span key={'msg-text'+i}> {filterData.texts[i]} {images} </span>);
	 		else if(images != null )
	 			domValue.push(images);

		 	
	 	}

	 	domValue = domValue.length > 0 ?  domValue : text;*/

	 	var transformedText = replaceCharBySmileysCode(text);
	 	var tabTransform = transformedText.split("::");
	 	var newText = "";
	 	let currentText = "";
	 	for(let i=0; i<tabTransform.length;i++)
	 	{
	 		currentText = tabTransform[i];
	 		if(isOdd && smileysMapping[currentText])
	 			domValue.push(<img key={'msg-img'+i} src={smileysMapping[currentText]} alt='smiley' /> )
	 		else if(currentText.length > 0)
	 			domValue.push(<span key={'msg-text'+i}> {currentText} </span> )
	 	}
	 	
 		newAction = {...action,message:{...message,text:domValue}};
 		console.log("newAction smileys");
 		console.log(newAction);
 	}

 	return newAction;

 }

 render()
 {

 	return(null);
 }

};
