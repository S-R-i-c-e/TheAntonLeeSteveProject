/* 
Maps JavaScript API documentation:
https://developers.google.com/maps/documentation/javascript
*/

// Variables
const mapDiv = document.getElementById("map");
const currencyFrom = document.getElementById("currency-from");
const currencyTo = document.getElementById("currency-to");
const geocodeButton = document.getElementById("geocode");
const input = document.getElementById("country-input");
let map;
let mapCenter;
let zoom;
let marker;
let marker1;
let marker2;
let markers = [];
let infowindow;
let infowindow1;
let infowindow2;
let geocoder;
let linePath;
let lineCoordinates = [];
let countryCode;
let bounds;

//The main google map function
function initMap() {
  //Default map options
  let mapOptions = {
    center: { lat: 26.9693, lng: 18.2615 },
    zoom: 2,
  };

  //Creating the google maps objects
  map = new google.maps.Map(mapDiv, mapOptions);
  marker = new google.maps.Marker({ map });
  marker1 = new google.maps.Marker({ map });
  marker2 = new google.maps.Marker({ map });
  geocoder = geocoder = new google.maps.Geocoder();
  infowindow = new google.maps.InfoWindow({ content: "" });
  bounds = new google.maps.LatLngBounds();

  //Function to draw a line on the map, use a polylin
  function addLine() {
    linePath = new google.maps.Polyline({
      path: lineCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
    });
    linePath.setMap(map);
  }

  //Function to remove the line
  function removeLine() {
    linePath.setMap(null);
  }

  // Function to show all the markers on the map
  function centerMarkers() {
    for (i = 0; i < markers.length; i++) {
      bounds.extend(markers[i].getPosition);
    }

    // google.maps.event.addListenerOnce(map, "bounds_changed", function (event) {
    //   this.setZoom(map.getZoom() - 1);

    //   if (this.getZoom() > 15) {
    //     this.setZoom(15);
    //   }
    // });
    map.setCenter(bounds.getCenter());
    map.fitBounds(bounds);
  }

  // Event listener on change 
  currencyFrom.addEventListener("change", () => {
    let val1 = currencyFrom.value.slice(7);
    // console.log(val1);
    geocode1({ address: val1 });
    // map.setZoom(5);
    // centerMarkers();
  });

  currencyTo.addEventListener("change", () => {
    let val2 = currencyTo.value.slice(7);
    // console.log(val2);
    geocode2({ address: val2 });
    // map.setZoom(5);
    // centerMarkers();
  });

  function geocode1(request) {
    marker1.setMap(null);
    geocoder
      .geocode(request)
      .then((result) => {
        const { results } = result;
        // console.log(results);
        lineCoordinates[0] = results[0].geometry.location;
        addLine();
        map.setCenter(results[0].geometry.location);
        map.setZoom(5);
        // map.setCenter(lineCoordinates || results[0].geometry.location);
        // console.log(results[0].geometry.location);
        // marker1 = new google.maps.Marker({
        //   position: results[0].geometry.location,
        //   map: map,});
        marker1.setPosition(results[0].geometry.location);
        marker1.setMap(map);
        marker1.setTitle(currencyFrom.selectedOptions[0].text);
        // marker1.setLabel(currencyFrom.value.slice(0, 3));
        markers[0] = marker1;
        // markers.push(marker1);
        infowindow1 = new google.maps.InfoWindow({
          content: `<h6>${currencyFrom.value.slice(0, 3)}</h6>`,
          // content: currencyFrom.options[currencyFrom.selectedIndex].text
          // content: currencyFrom.selectedOptions[0]
        });
        infowindow1.open({
          anchor: marker1,
          map,
        });
        marker1.addListener("click", () => {
          infowindow1.open(map, marker1);
        });
        // return results[0].geometry.location;
      })
      .catch((e) => {
        alert("Geocode was not successful for the following reason: " + e);
      });
  }

  function geocode2(request) {
    marker2.setMap(null);
    geocoder
      .geocode(request)
      .then((result) => {
        const { results } = result;
        // console.log(results);
        lineCoordinates[1] = results[0].geometry.location;
        addLine();
        map.setCenter(results[0].geometry.location);
        map.setZoom(5);
        // map.setCenter(lineCoordinates || results[0].geometry.location);
        // console.log(results[0].geometry.location);
        // marker2 = new google.maps.Marker({
        //   position: results[0].geometry.location,
        //   map: map,});
        marker2.setPosition(results[0].geometry.location);
        marker2.setMap(map);
        marker2.setTitle(currencyTo.selectedOptions[0].text);
        // marker2.setLabel(currencyTo.value.slice(0, 3));
        markers[1] = marker2;
        // markers.push(marker2);
        // removeLine();
        infowindow2 = new google.maps.InfoWindow({
          content: `<h6>${currencyTo.value.slice(0, 3)}</h6>`,
          // content: currencyTo.options[currencyTo.selectedIndex].text
          // content: currencyTo.selectedOptions[0]
        });
        infowindow2.open({
          anchor: marker2,
          map,
        });
        marker2.addListener("click", () => {
          infowindow2.open(map, marker2);
        });
        // return results[0].geometry.location;
      })
      .catch((e) => {
        alert("Geocode was not successful for the following reason: " + e);
      });
  }

  document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault;
    // map.setCenter({ lat: geoLocationss.latitude, lng: geoLocationss.longitude });
    setTimeout(function () {
      // console.log("lat test: " + geoLocation.latitude);
      // console.log("lon test: " + geoLocation.longitude);
      // map.setCenter({ lat: geoLocation.latitude, lng: geoLocation.longitude });
      map.setZoom(6);
      // initMap();
      // marker.setPosition({
      //   lat: geoLocation.latitude,
      //   lng: geoLocation.longitude,
      // });
      marker2.setTitle("test");
      // marker.setMap(map);
      // console.log(marker.position);
      infowindow2.setContent(`<h6>${currencyResults.textContent}</h6>`);
      infowindow2.open({
        anchor: marker2,
        map,
      });
      // marker.addListener("click", () => {
      //   infowindow.open(map, marker2);
      // });
      // centerMarkers()
    }, 1000);
  });

  map.addListener("click", (event) => {
    // console.log(event);
    geocode({ location: event.latLng });
    // console.log(countryCode);
  });

  const options = {
    // componentRestrictions: { country: "us" },
    // fields: ["address_components", "geometry", "icon", "name"],
    // strictBounds: false,
    types: ["country"],
  };

  const autocomplete = new google.maps.places.Autocomplete(input, options);
  // autocomplete.bindTo("bounds", map);

  geocodeButton.addEventListener("click", () => {
    geocode({ address: input.value });
    input.value = "";
    // console.log(countryCode);
  });

  function clear() {
    marker.setMap(null);
  }

  function geocode(request) {
    clear();
    geocoder
      .geocode(request)
      .then((result) => {
        const { results } = result;
        console.log(results);
        map.setCenter(results[0].geometry.location);
        // map.setZoom(5);
        marker.setPosition(results[0].geometry.location);
        marker.setMap(map);
        // document.querySelector(".test").innerText = results[results.length -1].address_components[0].short_name;
        // document.querySelector(".test").innerText = JSON.stringify(result, null, 2);
        countryCode =
          results[results.length - 1].address_components[0].short_name;
        infowindow.setContent(
          `<h6><a href="#holidays">${
            results[results.length - 1].address_components[0].long_name
          } - Holidays & Events</a></h6>`
        );
        infowindow.open({
          anchor: marker,
          map,
        });
        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });
        // console.log(countryCode);
        retrieveNationalHoidays(countryCode);
      })
      .catch((e) => {
        alert("Geocode was not successful for the following reason: " + e);
      });
  }
} //End of initMap() function
