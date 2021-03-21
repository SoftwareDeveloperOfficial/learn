/*
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', './audio/1.wav');
audioElement.play();
*/

function setCookie(cname,cvalue,exdays)
{
var d = new Date();
d.setTime(d.getTime()+(exdays*24*60*60*1000));
var expires = "expires="+d.toGMTString();
document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++) 
  {
  var c = ca[i].trim();
  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
return "";
}


window.onload=function(){
if(getCookie('hasPlayed') != null){

var audioElement = document.createElement('audio');
 audioElement.setAttribute('src', '1.wav');
 audioElement.play();
setCookie('hasPlayed', true, NUMBER-OF-DAYS-TO-KEEP-COOKIE);
}

};

