let input1 = document.getElementById("input1");
//console.log(returnHello);

helloSubBtn.addEventListener("click", function () {
  GetData();
});



function GetData() {
  fetch(
    "https://allforonecmartinez.azurewebsites.net/StudentDirectory/GetStudentByFirstName/" +
      input1.value
  )
    .then((response) => response.json())
    .then((data) => {
      helloSubBtn.textContent =
        "Student first Name : " +
        data.firstName +
        "Student last Name : " +
        data.lastName +
        data.slackName;
    });
}

// function getData() {
//   fetch(
//     "https://allforonecmartinez.azurewebsites.net/StudentDirectory/GetStudentByEmail/" +
//       input1.value
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       helloSubBtn.textContent = data.firstName + " " + data.lastName;
//       console.log(data.lastName);
//     });
// }



//now create the function
// this url is working, i tried it "https://api.adviceslip.com/advice", but not mine so far

// function getData() {
//   fetch(
//     "https://allforonecmartinez.azurewebsites.net/StudentDirectory/GetStudentByEmail/saguirre-reyes@codestack.co"
//   )
//     .then(
//       (response) => response.text()
//       //response => response.json()
//     )
//     .then((data) => console.log(data));
// }

// AddingNumbers;


