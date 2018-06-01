"use strict";


// HERE I FETCH THE INQUEUE DATA

let link = "https://kea-alt-del.dk/kata-distortion/";

function getData() {
    console.log('hi mom');
    fetch(link).then(res => res.json()).then(showQueue);
};

function showQueue(data) {
console.log(data.inQueue);
let list = document.querySelector("#list");
document.querySelector('#inQueue').innerHTML = data.inQueue;

// HERE I ANIMATE THE BEER GLASS

let liquid = document.querySelector("#liquid");
let foam = document.querySelector(".beer-foam");

 if (data.inQueue == 0 ){
 fill.style.height = "0px";
  liquid.style.height = "0px";
  foam.style.bottom = "10px";
} 

if (data.inQueue > 0 && data.inQueue <= 5) {
    // console.log("hi there bigger 0")
  liquid.style.height = "30px";
    foam.style.bottom = "40px";
  } 

  if (data.inQueue > 5 && data.inQueue <= 10) {
    liquid.style.height = "50px";
    foam.style.bottom = "60px";
  } 

  if (data.inQueue > 10 && data.inQueue <= 15) {
    liquid.style.height = "100px";
    foam.style.bottom = "110px";
  }

if (data.inQueue > 15 && data.inQueue <= 22) {
    liquid.style.height = "150px";
    foam.style.bottom = "160px";
  }

  if (data.inQueue > 22 && data.inQueue <= 25 ) {
    liquid.style.height = "190px";
    foam.style.bottom = "198px";
  }


  let fill = document.querySelector(".pour");
  var oldNumber = 0;
if( oldNumber < data.inQueue){
    console.log("hi number")
    fill.style.height="600px";
    setTimeout(function(){fill.style.height="0px";}, 2000);
}
oldNumber = data.inQueue;

//console.log(bubbles);
let bubbles = [".bubble1", ".bubble2", ".bubble3", ".bubble4", ".bubble5"];
bubbles.forEach(bubble => {
    console.log("hi bubbles");
    let goUp = Math.floor((Math.random() * 100));
   
    document.querySelector(bubble).style.bottom = goUp+'px';
    // bubble.style.bottom = goUp;
    console.log(document.querySelector(bubble));
  
    
});

}
setInterval(() => getData(), 10000);
getData()



