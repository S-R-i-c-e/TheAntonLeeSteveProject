// Create variable for open weather api key
let api = "2a06c39ab528ae5260e7be3fb9a676eb";
let currency1To1 = document.querySelector('#currency-1-to-1');
let currencyResults = document.querySelector('#currency-results');

let geoLocation;

// Onclick event to run functions

$("#submit").on("click", function (event) {

  //Prevent default browser behaviour
  event.preventDefault();
  currencyConversion ();
})
  



function currencyConversion () {


  selectElement = document.querySelector('#amount');
        output = selectElement.value;

        let amount = $("#amount").textContent = output;

        // console.log(amount)

        selectElement = document.querySelector('#currency-from');
        output = selectElement.value;
        
        

       if (output == "Select Currency") {
        console.log("currency from error")
        document.querySelector("#currency-error").className="visible";
          return;

       }

        let convertFrom = $("#convert-from").textContent = output.slice(0, 3);
        // console.log("Coverting from " + convertFrom);
        
         selectElement = document.querySelector("#currency-to");
        output = selectElement.value;
       
        if (output == "Select Currency") {
          console.log("currency to error")
            return
         }

        let convertTo = $("#convert-to").textContent = output.slice(0, 3);
        // console.log("Converting to " + convertTo);

        let queryURL =
        "https://api.exchangerate.host/convert?from=" + convertFrom + "&" + "to=" + convertTo;
  
        // console.log(queryURL)
  
        $.ajax({
          url: queryURL,
          method: "GET",
        })
        
        .then(function (response) {

          let currencyUnit1 = response.info.rate.toFixed(2);
          console.log("1 " + convertFrom + " = " + currencyUnit1 + " " + convertTo);

        // Calculate the conversion based on the actual amount value user entered
        if (amount == "") {
          amount = 1;
          }

         

          let currencyUsersAmount = amount * currencyUnit1;
          let currencyUsersAmountRounded = currencyUsersAmount.toFixed(2)
          console.log("You converted " + amount + " " + convertFrom + " = " + currencyUsersAmountRounded + " " + convertTo);

          currency1To1.innerHTML = '<span style="color: black">EXCHANGE BASE RATE:</span><br>' + '1 ' + convertFrom + " &#187; " + currencyUnit1 + " " + convertTo;
          currencyResults.innerHTML = '<span style="color: black">YOU CONVERTED:</span><br>' + amount + " " + convertFrom + " &#187; " + currencyUsersAmountRounded + " " + convertTo;
          


          capitalCityLocation ();

        })  
        
}

//Find name of capital city, geo location via currency selection (the exchanging "to" currency)

function capitalCityLocation () {

  let capitalName = $("#convert-to").textContent = output.slice(7);
        // console.log(capitalName);

  let iso = $("#convert-to").textContent = output.slice(0, 2);

// Create function to find country code, capital city and longitude and latitude of city
// creating an object based on this return

  let city =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    capitalName +
    "&limit=5" +
    "&appid=" +
    api;
  // console.log(city);

  $.ajax({
    url: city,
    method: "GET",
  }).then(function (geoResponse) {
    let latitudeResult = geoResponse[0].lat;
    let longitudeResult = geoResponse[0].lon;
    // console.log(latitudeResult);
    // console.log(longitudeResult);



    // Create location Object
    geoLocation = {
      countryCode: iso,
      capital: capitalName,
      longitude: longitudeResult,
      latitude: latitudeResult,
    };
  
    console.log("Object storing Contry Code / Capital City / Longitude / Latitude ")
    console.log(geoLocation)
  
    retrieveNationalHoidays(geoLocation.countryCode)

  })
  }
  




