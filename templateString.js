const myname = "tanvi";
const sender = "arjun gaikwad";

//if we break the tactic into multiple lines, then the output will me same as lines are modified
const email = `hey ${myname} ! 
how is it going? 
cheers ${sender}
`;
console.log(email);

//LOCAL-STORAGE
//localstorage only spport String key-value pair
localStorage.setItem("name", "gaikwad");
localStorage.clear();
console.log(localStorage.getItem("name")); //NULL

//Converting a Array into String in localstorage

//turing array to string
let arr = `["tanvi"]`;
//turning string to array
arr = JSON.parse(arr);
//pushing value in array
arr.push("gaikwad");
//turing back to staring
arr = JSON.stringify(arr);
console.log(typeof arr);

let arr2 = ["tanvi"];
arr2.push("gaikwad");
localStorage.setItem("myKey", JSON.stringify(arr2));
console.log(localStorage.getItem("myKey"));
localStorage.clear();
