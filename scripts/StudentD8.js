let injectHere = document.getElementById("injectHere");
//console.log(returnHello);

helloSubBtn.addEventListener("click", function () {
  getData();
});

//now create the function
// this url is working, i tried it "https://api.adviceslip.com/advice", but not mine so far

function getData() {
  fetch(
    "https://allforonecmartinez.azurewebsites.net/StudentDirectory/GetStudentByEmail/saguirre-reyes@codestack.co"
  )
    .then(
      (response) => response.text()
      //response => response.json()
    )
    .then((data) => console.log(data));
}

// AddingNumbers;


