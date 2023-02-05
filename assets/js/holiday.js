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
*/

// NationalHoliday class to hold national holiday data for a country.
// Each instance holiday or natoable day in that countries calendar
class NationalHoliday {

    constructor(country, date, name, description, type) {
        this._country = country;
        this._date = date;
        this._name = name;
        this._description = description;
        this._type = type;
    }

    // calenderificCoustructor tailored to construct using a calenderific request
    // holiday[] array object
    // TODO some iso dates include a time - slice that out

    static calendarificConstructor(calendarObject) {
        return new NationalHoliday(
            calendarObject.country.name,
            calendarObject.date.iso,
            calendarObject.name,
            calendarObject.description,
            calendarObject.type[0])
    }
    // HTML creation string tailored to TheAntonLeeSteveProject
    toHTMLString() {
        return `<div class="card">
                    <div class="card-header">${this._date}</div>
                    <div class="card-body">
                        <h5 class="card-title">${this._name}</h5>
                        <p class="card-text">${this._description}</p>
                    </div>
                </div>`;
    }

    toString() {
        return `country: ${this._country}; date: ${this._date}; name: ${this._name}.`;
    }
}
// NationalHolidaysList class to encapsulate all the NationalHoliday data of a country.
class NationalHolidaysList {

    constructor(country, year, holidayArray) {
        this._country = country;
        this._year = year;
        this._holsList = holidayArray;
    }
    // calenderificCoustructor tailored to construct using a calenderific request data
    static calendarificHolidayListConstructor(calendarificObject) {
        let holidays = calendarificObject.response.holidays;
        let country = holidays[0].country.name;
        let year = holidays[0].date.datetime.year;
        let holidayArray = holidays.map(holiday => NationalHoliday.calendarificConstructor(holiday));
        return new NationalHolidaysList(country, year, holidayArray);
    }

    get year() {
        return this._year;
    }
    get country() {
        return this._country;
    }
    // HTML creation string tailored to TheAntonLeeSteveProject
    get toHTML() {
        return this._holsList.map(holiday => holiday.toHTMLString()).join("");
    }
}
// HTML index.html element handles
let holidayList = document.getElementById("holiday");
let holidayDestination = document.getElementById("destination-country");
// Constants for Calendarific api country codes and holidays requests.
const apiKeyCalendar = "66f395fca8dd55c192168f85f4ec5fcde1f2ae4a";
const nationsListRequestURL = `https://calendarific.com/api/v2/countries?&api_key=${apiKeyCalendar}`;

// createHolidaysRequestURL(ISO-3166 code) uses api key defined above and country code to create Calendarific
// URL request string - year is currently set to 2023
// TODO at least year to reflect current year?
function createHolidaysRequestURL(countryCode) {
    return `https://calendarific.com/api/v2/holidays?&api_key=${apiKeyCalendar}&country=${countryCode}&year=${new Date().getFullYear()}`
}
// processHolidays(Calendarific api data) converts data into HTML string ready for display on website
function processHolidays(calendarificData) {
    let newHolidaysData = NationalHolidaysList.calendarificHolidayListConstructor(calendarificData);
    displayHolidays(newHolidaysData);
    // holidayList.innerHTML = "";                         // clear display field
    // holidayList.innerHTML = newHolidaysData.toHTML;     // display holidays
}
// retrieveNationalHolidays(ISO-3166 code) fetches national holday data from Calendarific.com
function retrieveNationalHoidays(countryCode) {
    fetch(createHolidaysRequestURL(countryCode))            // create request URL string
        .then(response => response.json())
        .then(holidayData => processHolidays(holidayData)); // pass data on for processing
}
// displayHolidays(NationalHolidaysList Object) - refreshes display to show the national holidays of the destination country
function displayHolidays(nationalHolidaysData) {
    holidayDestination.innerHTML = "";
    holidayDestination.innerHTML = `Destination country ${nationalHolidaysData.country}`;
    holidayList.innerHTML = "";
    holidayList.innerHTML = nationalHolidaysData.toHTML;   
}
// test - TEST CODE HERE
retrieveNationalHoidays("ET");


//CORS error! goodness knows
//testRetrieveNationalHolidays();
// fetch('data.json')
//     .then((response) => response.json())
//     .then((json) => processHolidays(json));

// function testRetrieveNationalHolidays() {
//     fetch('./andorra.json')
//     .then((response) => response.json())
//     .then((json) => processHolidays(json));
// }
