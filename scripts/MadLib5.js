// alert()
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");
let input6 = document.getElementById("input6");
let input7 = document.getElementById("input7");
let input8 = document.getElementById("input8");
let input9 = document.getElementById("input9");
let input10 = document.getElementById("input10");

let returnHello = document.getElementById("returnHello");
let helloSubBtn = document.getElementById("helloSubBtn");

let injectHere = document.getElementById("injectHere");
//console.log(returnHello);

helloSubBtn.addEventListener("click", function () {
  getData();
});

function getData() {
  fetch(
    "https://allforonecmartinez.azurewebsites.net/MadLib/MadLibStory/" +
      input1.value +
      "/" +
      input2.value +
      "/"  +
      input3.value +
      "/" +
      input4.value +
      "/" +
      input5.value +
      "/" +
      input6.value +
      "/" +
      input7.value +
      "/" +
      input8.value +
      "/" +
      input9.value +
      "/" +
      input10.value
  )
    .then((response) => response.text())
    .then((data) => (injectHere.textContent = data));
}

//now create the function
// this url is working, i tried it "https://api.adviceslip.com/advice", but not mine so far

// function getData() {
//   fetch(
//     "https://allforonecmartinez.azurewebsites.net/MadLib/MadLibStory/sunny/morning/now/yellow/jim/carrey/superspawn/cheesecake/usa/corona"
//   )
//     .then(
//       (response) => response.text()
//       //response => response.json()
//     )
//     .then((data) => console.log(data));
// }

// MADLib
//MadLib
//"MadLibStory/{weather}/{day}/{time}/{natPark}/{celeb}/{name}/{superHero}/{dessert}/{country}/{beer}"


