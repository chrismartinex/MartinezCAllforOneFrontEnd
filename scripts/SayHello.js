// alert()
let inputName = document.getElementById("inputName");
let returnHello = document.getElementById("returnHello");
let helloSubBtn = document.getElementById("helloSubBtn");

let injectHere = document.getElementById("injectHere");
//console.log(returnHello);

helloSubBtn.addEventListener('click', function(){

 getData()

});

//now create the function
// this url is working, i tried it "https://api.adviceslip.com/advice", but not mine so far

function getData(){
 fetch("https://allforonecmartinez.azurewebsites.net/Hola/Hello/Daniel").then(
    (response) => response.text()
   //response => response.json()
 ).then(
  data => console.log(data)
 )
}