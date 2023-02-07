/* Three classes to hold holidays data:
A NationalHoliday instance holds data for a single holiday for a given country for a given year.

NationalHolidaysList contains header information - country and year - and an array of NationalHoliday's, i.e. all the holidays for that year for that country.

StoredHolidays contains a static list of previously fetched holidays. It stores the data in localStorage.
*/
// NationalHoliday class to hold national holiday data for a country.
// Each instance is a holiday or notable day in that country's calendar.
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
    static calendarificNationalHolidayConstructor(calendarObject) {
        return new NationalHoliday(
            calendarObject.country.name,
            convertDate(calendarObject.date.iso),
            calendarObject.name,
            calendarObject.description,
            calendarObject.type[0])
    }
    // turn a stringified NationalHoliday object back into a full-fat one
    static stringifiedNationalHolidayConstructor(stringifiedObject) {
        return new NationalHoliday(stringifiedObject._country,
            stringifiedObject._date,
            stringifiedObject._name,
            stringifiedObject._description,
            stringifiedObject._type);
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
// NationalHolidaysList class to encapsulate all the NationalHoliday data of a country for a given year.
class NationalHolidaysList {

    constructor(country, id, year, holidayArray) {
        this._country = country;
        this._id = id;
        this._year = year;
        this._holsList = holidayArray;
    }
    // calenderificCoustructor tailored to construct using a calenderific request data
    static calendarificNationalHolidaysListConstructor(calendarificObject) {
        let holidays = calendarificObject.response.holidays;
        let country = holidays[0].country.name;
        let id = holidays[0].country.id.toUpperCase();
        let year = holidays[0].date.datetime.year;
        let holidayArray = holidays.map(holiday => NationalHoliday.calendarificNationalHolidayConstructor(holiday));
        return new NationalHolidaysList(country, id, year, holidayArray);
    }
    // convert a stringified NationalHolidaysList back into the real thing
    static stringifiedNationalHolidaysListConstructor(stringifiedObject) {
        return new NationalHolidaysList(stringifiedObject._country,
            stringifiedObject._id,
            stringifiedObject._year,
            stringifiedObject._holsList.map(plainElement => NationalHoliday.stringifiedNationalHolidayConstructor(plainElement)));
    }
    get year() {
        return this._year;
    }
    get country() {
        return this._country;
    }
    get id() {
        return this._id;
    }
    // HTML creation string tailored to TheAntonLeeSteveProject
    get toHTML() {
        return this._holsList.map(holiday => holiday.toHTMLString()).join("");
    }
}
// class LocalStorage - no more parse and stringify misery here - thx to ChatGPT
class LocalStorage {
    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    static getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}
// class StoredHolidays - store Calendarific holiday objects locally so as not annoy them by keep asking for the same data
class StoredHolidays {
    // initiate StoredHolidays by retrieving stored holidays if they exist, else create empty array
    static {
        // retrieve the stored data - data is plain objects until restored to NationalHolidaysList instances
        let countriesVisited = LocalStorage.getItem("countriesVisited") || [];
        // convert plain string objects into NationalHolidaysList instances
        this._visitedCountries = countriesVisited.map(plainObject => NationalHolidaysList.stringifiedNationalHolidaysListConstructor(plainObject));
    }
    // addHolidaysList - add a NationalHolidaysList instance to the StoredHolidays list, and push the lot to local storage
    static addToHolidaysList(nationalHolidaysListOject) {
        this._visitedCountries.push(nationalHolidaysListOject);           // append the country/year holiday data
        LocalStorage.setItem("countriesVisited", StoredHolidays._visitedCountries); // re-store the list each time
    }
    // getHolidayList(ISO-3166 code) searches the prevoiusly fetched holidays for the list matching the country code
    // returns that list if found, else returns false
    static getHolidayList(countryCode) {
        for (let holidays of this._visitedCountries) {   // loop through NationalHolidaysList's
            console.log(holidays.id);
            if (holidays.id === countryCode) {           // return the list if found
                return holidays;
            }
        }
        return false;                                   // else return false = not found
    }
    static get visitedCountries() {
        return this._visitedCountries;
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
    let newHolidaysData = NationalHolidaysList.calendarificNationalHolidaysListConstructor(calendarificData);
    displayHolidays(newHolidaysData);
    StoredHolidays.addToHolidaysList(newHolidaysData); // add this countries data to the list of visted - it will be added to localStorage

}
// retrieveNationalHolidays(ISO-3166 code) fetches national holday data from Calendarific.com
function retrieveNationalHoidays(countryCode) {
    let knownHolidays = StoredHolidays.getHolidayList(countryCode); // see if the holidays data is known already
    if (!knownHolidays) { 
        console.log("www");                                          // if not, fetch it from the calendarific api
        fetch(createHolidaysRequestURL(countryCode))                // create request URL string
            .then(response => response.json())
            .then(holidayData => processHolidays(holidayData));     // pass data on for processing
    } else {  
        console.log("local")                                                      // if it is known,
        displayHolidays(knownHolidays);                             // then display
    }
}
// displayHolidays(NationalHolidaysList Object) - refreshes display to show the national holidays of the destination country
function displayHolidays(nationalHolidaysData) {
    holidayDestination.innerHTML = "";
    holidayDestination.innerHTML = `Destination country ${nationalHolidaysData.country} - National holidays in ${nationalHolidaysData.year}.`;
    holidayList.innerHTML = "";
    holidayList.innerHTML = nationalHolidaysData.toHTML;
}
// convertDate(ISO date format) date, possibly with time stamp appended, converted to simple UK date format
function convertDate(isoDate) {
    return `${isoDate.slice(8, 10)} - ${isoDate.slice(5, 7)} - ${isoDate.slice(0, 4)}`;
}
// test - TEST CODE HERE
// retrieveNationalHoidays("PL");
// let test = StoredHolidays.getHolidayList("MX");
// console.log(test);
