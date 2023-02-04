/*
Passed a country name string fetch the national holidays object for that country from Calendarific, using:
urlRequest is `https://calendarific.com/api/v2/holidays?&api_key=${apiKey}&country=${countryCode}&year=${year}`,
where:  apiKey is valid Calendarific api key,
        countryCode is a two character ISO-3166 code,
        year is the four digit year YYYY.

Given ISO-3166 country code retrive national hoidays object from Calendarific api.
        
function:   retrieveNationalHoidays(ISO-3166CountryCode):
return:     nationalHolidaysObject, else false.


In order to obtain ISO-3166 country code fetch from Calendarific once and store as JSON file in the assets, using:
urlRequest is `https://calendarific.com/api/v2/countries?&api_key=${apiKey}`,
where:  apiKey is valid Calendarific api key.
Ideally this information retrived from localStorage, so
countryCodes retrived from localStorage if possible, else fetch from Calendarific, store locally, retrive from localStorage.

function:   retriveCountryCodes(localStorageName, urlRequestString).
return:     countryCodesObject, else error.
}

Given country name string search the country code object for a match, using:
function:   CountryCodeSearch(countryCodesObj, searchCountryStr).
return:     ISO-3166 two character code else false if not found.

** consider using Moment.js to handle dates.
** need to keep track of country along with dates

Rudimentary processing of nationalHolidaysObject - as yet unknown format. Return a list of dates (assumed).
function:   processNationalHolidays(nationalHolidaysObject).
return:     List of date strings - 
*/
// TEST purpose open weather calls
// const apiKeyWeather = "b815fef6c88c1e911e03dd1ab36f7ad3";
// const lon = 5;
// const lat = 25;
// const apiWeatherCall = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKeyWeather}&units=metric`;

// HTML index.html element handles
let holidayList = document.getElementById("holiday");

// Constants for Calendarific api country codes and holidays requests.
const apiKeyCalendar = "66f395fca8dd55c192168f85f4ec5fcde1f2ae4a";
const nationsListRequestURL = `https://calendarific.com/api/v2/countries?&api_key=${apiKeyCalendar}`;

// Constant and variable to reference the nationsReference array - 
const nationsReferenceStoreName = "nationsReference";
// global variable to hold most recent holiday information
let holidays = [];

function createHolidaysRequestURL(countryCode) {
    return `https://calendarific.com/api/v2/holidays?&api_key=${apiKeyCalendar}&country=${countryCode}&year=${new Date().getFullYear()}`
}

function processHolidays(calendarificData) {
    let holidaysArray = calendarificData.response.holidays
    let htmlString = "";
    for (let day of holidaysArray) {
        htmlString += `<h4>${day.description}</h4>
        <h5>${day.date.datetime.day}-
        ${day.date.datetime.month}-
        ${day.date.datetime.year}</h5>`
        // let holiday = {
        //     day: day.date.datetime.day,
        //     month: day.date.datetime.month,
        //     year: day.date.datetime.year,
        //     description: day.description,
        // }
        // addToPage(holiday);
        // holidays.push(holiday);
    }
    holidayList.innerHTML = htmlString;
}

function retrieveNationalHoidays(countryCode) {
    fetch(createHolidaysRequestURL(countryCode))
        .then(response => response.json())
        .then(holidayData => processHolidays(holidayData));
}

// test
retrieveNationalHoidays("BD");
