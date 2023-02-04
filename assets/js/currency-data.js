let currencyContainer = document.querySelector('#currency');

let currencyArea = document.createElement("div");



currencyArea.innerHTML = `
<h2>CONVERT CURRENCY</h2>
<p><input id="amount" placeholder ="Enter amount"></input>

<select id="currency-from" name="currency-from">
  <option>Select Currency</option>
  <option value="USD Washington">United States Dollar</option>
  <option value="EUR Brussels">European Euro</option>
  <option value="JPY Tokyo ">Japanese Yen</option>
  <option value="GBP London">British Pound Sterling</option>
  <option value="AUD Canberra">Australian Dollar</option>
  <option value="CAD Ottowa">Canadian Dollar</option>
  <option value="CHF Zurich">Swiss Franc</option>
  <option value="CNH Beijing">Chinese Yuan</option>
  <option value="HKD Hong Kong">Hong Kong Dollar</option>
  <option value="NZD Wellington">New Zealand Dollar</option>
  <option>.......................</option>
  <option>All other currencies below ↓</option>
  </select>

<span>convert to</span>

<select id="currency-to" name="currency-to">
  <option>Select Currency</option>
  <option value="USD US Washington">United States Dollar</option>
  <option value="EUR BE Brussels">European Euro</option>
  <option value="JPY JP Tokyo">Japanese Yen</option>
  <option value="GBP GB London">British Pound Sterling</option>
  <option value="AUD AU Canberra">Australian Dollar</option>
  <option value="CAD CA Ottawa">Canadian Dollar</option>
  <option value="CHF CH Zurich">Swiss Franc</option>
  <option value="CNH CN Beijing">Chinese Yuan</option>
  <option value="HKD HK Hong Kong">Hong Kong Dollar</option>
  <option value="NZD NZ Wellington">New Zealand Dollar</option>
  <option>.......................</option>
  <option>All other currencies below ↓</option>
</select>

</p>

<button id="submit">
submit
</button>

<span id="convert-from"></span>
<span id="convert-to"></span>

<div id="currency-results"></div>

`;

currencyContainer.append(currencyArea);

