let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

//console.log(returnHello);

helloSubBtn.addEventListener("click", function () {
  GetData();
  GetData1();
  GetData2();
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
        "Student email Name : " +
        data.slackName;
    });
}
function GetData1() {
  fetch(
    "https://allforonecmartinez.azurewebsites.net/StudentDirectory/GetStudentByLastName/" +
      input2.value
  )
    .then((response) => response.json())
    .then((data) => {
      helloSubBtn.textContent =
        "Student first Name : " +
        data.firstName +
        "Student last Name : " +
        data.lastName +
        "Student email Name : " +
        data.slackName;
    });
}
function GetData2() {
  fetch(
    "https://allforonecmartinez.azurewebsites.net/StudentDirectory/GetStudentByEmail/" +
      input3.value
  )
    .then((response) => response.json())
    .then((data) => {
      helloSubBtn.textContent =
        "Student first Name : " +
        data.firstName +
        "Student last Name : " +
        data.lastName +
        "Student email Name : " +
        data.slackName;
    });
}

// function GetData() {
//   fetch(
//     "https://allforonecmartinez.azurewebsites.net/StudentDirectory/GetStudentByLastName/" +
//       input1.value
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       helloSubBtn.textContent =
//         "Student first Name : " +
//         data.firstName +
//         "Student last Name : " +
//         data.lastName +

//         data.slackName;
//     });

// }

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
