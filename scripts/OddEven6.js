// alert()
let input1= document.getElementById("input1");
let returnHello = document.getElementById("returnHello");
let helloSubBtn = document.getElementById("helloSubBtn");

let injectHere = document.getElementById("injectHere");
//console.log(returnHello);

helloSubBtn.addEventListener("click", function () {
  getData();
});

function getData() {
  fetch(
    "https://allforonecmartinez.azurewebsites.net/OddEven/OddOrEven/" +
      input1.value
  )
    .then((response) => response.text())
    .then((data) => (injectHere.textContent = data));
}



//now create the function
// this url is working, i tried it "https://api.adviceslip.com/advice", but not mine so far

// function getData() {
//   fetch("https://allforonecmartinez.azurewebsites.net/OddEven/OddOrEven/45")
//     .then(
//       (response) => response.text()
//       //response => response.json()
//     )
//     .then((data) => console.log(data));
// }

// odd or even OddEven OddOrEven/{numeros}

