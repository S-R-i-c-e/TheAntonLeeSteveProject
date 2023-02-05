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

    toString() {
        return `country: ${this._country}; date: ${this._date}; name: ${this._name}.`;
    }
}
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
    holidayList.innerHTML = "";             // clear display field
    let htmlString = "";                    // create empty display field
    for (let day of holidaysArray) {        // extract holiday data from each holiday object in the array
        htmlString += `<h4>${day.date.datetime.day}-
        ${day.date.datetime.month}-
        ${day.date.datetime.year}</h4>
        <h4>${day.description}</h4>`
        let newHoliday = NationalHoliday.calendarificConstructor(day);
        console.log(newHoliday.toString());
    }
    holidayList.innerHTML = htmlString;
}

function retrieveNationalHoidays(countryCode) {
    fetch(createHolidaysRequestURL(countryCode))
        .then(response => response.json())
        .then(holidayData => processHolidays(holidayData));
}

// test
retrieveNationalHoidays("BM");

