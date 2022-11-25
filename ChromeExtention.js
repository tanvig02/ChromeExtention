let myLead = [];
let oldLead = [];
//const variable cannot be reassigned
const inputLead = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");

//rendering the elements of array from local storage
const leadLocalStorage = JSON.parse(localStorage.getItem("arr"));
console.log(leadLocalStorage);

//if elements are present in this variable, then it will be displayed using render() function
if (leadLocalStorage) {
  myLead = leadLocalStorage;
  renderLeads(myLead);
}

//*********DISPLAYING INPUT************
//DOM html comes with COST
//using parameters in function
//during call of the function use original datatype as argument
function renderLeads(leads) {
  let listItem = "";
  for (let j = 0; j < leads.length; j++) {
    //list item will run for each element
    listItem +=
      //   "<li> <a target='_blank' href=" +
      //   myLead[j] +
      //   ">" +
      //   myLead[j] +
      //   "</a> </li>";

      //TEMPLATE STRING --> using tactics ``
      `<li> 
        <a target='_blank' href='${leads[j]}'>
        ${leads[j]}
        </a> 
      </li>`;
    // console.log(listItem);
  }
  ulEl.innerHTML = listItem;
}

//******INPUT BUTTON*******
inputBtn.addEventListener("click", function () {
  // console.log("button clicked by addeventlistner");
  //.value is used to get value from the input tag
  myLead.push(inputLead.value);
  // console.log(myLead);
  // clearInput();
  inputLead.value = "";

  //Setting items of array into localstorage
  localStorage.setItem("arr", JSON.stringify(myLead));

  //only when the button is clicked, then only list items will be added
  renderLeads(myLead);
  console.log(localStorage.getItem("arr"));
});

//*************ARRAY OBJECT - TABS BUTTON ************
// const tabs = [{ url: "https://google.com" }];
tabBtn.addEventListener("click", function () {
  //0th index object url(key)
  //USING CHROME API TO GET THE TAB
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // console.log(tabs[0].url);
    myLead.push(tabs[0].url);
    localStorage.setItem("arr", JSON.stringify(myLead));
    renderLeads(myLead);
  });
});

//******DELETE BUTTON ********
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLead = [];
  renderLeads(myLead);
});

for (let i = 0; i < myLead.length; i++) {
  //creating an element
  //set text content
  //append to ul
  // ulEl.innerHTML += "<li>" + myLead[i] + "</li>";
  // const li = document.createElement("li");
  // li.textContent = myLead[i];
  // ulEl.append(li);/
}

// let a = document.getElementById("container");
// a.innerHTML = "<button onclick='thank()'>" + "BUY" + "</button>";
// function thank() {
//   a.innerHTML += "<p>" + "Thank you for Buying!!" + "</p>";
// }

// function clearInput() {
//   inputLead.value = "";
// }
