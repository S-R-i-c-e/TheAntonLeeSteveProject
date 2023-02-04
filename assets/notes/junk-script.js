
// fetchWeather();
// console.log(JSON.parse(localStorage.getItem("BloodyWeather!")));
// // let weatherHere = JSON.parse(localStorage.getItem("BloodyWeather!"));
// // console.log(JSON.parse(weatherHere));

// function fetchWeather() {
//     fetch(apiWeatherCall)
//         .then(response => response.json())
//         .then(weatherObject => storeWeather(weatherObject));
//         }

// function storeWeather(weather) {
//     localStorage.setItem("BloodyWeather!", JSON.stringify(weather));
// }
// // setUpNations() : either loads the locally stored array of nation name string and ISO-3166 country code pairs,
// //                  else creates and stores the same after fectching data from Calendarific.
// function setUpNations() {
//     let nationsReference = JSON.parse(localStorage.getItem(nationsReferenceStoreName));
//     if(nationsReference === null) {
//         createNationsReference();
//         nationsReference = JSON.parse(localStorage.getItem(nationsReferenceStoreName));
//     }
// }
// // createNationsRefernce :  fetch data from Calendarific, process the data into an array of country & code pairs,
// //                          store locally and return (= nationsReference).
// function createNationsReference() {
//     fetch(nationssListURLRequest)
//         .then(response => response.json())
//         .then(nationsObject => processNations(nationsObject))
//         }

// function processNations(nationsData) {
//     localStorage.setItem(nationsReferenceStoreName, JSON.stringify(nationsData));
// }
// setUpNations()
// console.log("setUpNations test : ")
// console.log(nationsReference);
// console.log("local store test starts.");
// let testObject = {
//     key1: "string1",
//     key2: "string2",
// }
// console.log("testObject declared");
// console.log(testObject);
// localStorage.setItem("testStore", JSON.stringify(testObject));
// console.log("testObject stored locally");
// console.log("testObject retrieved without parsing");
// console.log(localStorage.getItem("testStore"));
// console.log("testObject retrieved parsed");
// console.log(JSON.parse(localStorage.getItem("testStore")));
// function varFetch() {
//     return JSON.parse(localStorage.getItem("testStore"));
// }
// console.log("testObject parsed and returned by fn");
// console.log(varFetch());
// localStorage.clear();
// if (JSON.parse(localStorage.getItem("testStore")) === null) {
//     console.log("nothing stored");
// } else {
//     console.log("something stored");
// }
localStorage.clear();
showStorage("initial");

if (localStorage.getItem("weatherStorage") === null) {
    fetchWeather();
}
let t = setTimeout(showStorage(), 10000);
showStorage("updated");

function showStorage(msg) {
console.log(`${msg} weatherStorage value`);
console.log(localStorage.getItem("weatherStorage"));
}

function fetchWeather() {
    fetch(apiWeatherCall)
        .then(response => response.json())
        .then(data => processData(data));
}

function processData(dataData) {
    localStorage.setItem("weatherStorage", JSON.stringify(dataData.list));
}