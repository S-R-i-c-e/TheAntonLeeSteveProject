let currencyContainer = document.querySelector("#currency");

let currencyArea = document.createElement("div");

currencyArea.innerHTML = `
<h2>CONVERT CURRENCY</h2>
<form id="input-button-container">
<div class="inline-block"><input id="amount" placeholder ="Enter amount"></input>
<select id="currency-from" name="currency-from">
<option disabled selected hidden>Select Currency</option>
  <option value="USD US Washington">USD United States Dollar</option>
  <option value="EUR BE Brussels">EUR European Euro</option>
  <option value="JPY JP Tokyo">JPY Japanese Yen</option>
  <option value="GBP GB London">GBP British Pound Sterling</option>
  <option value="AUD AU Canberra">AUD Australian Dollar</option>
  <option value="CAD CA Ottawa">CAD Canadian Dollar</option>
  <option value="CHF CH Zurich">CHF Swiss Franc</option>
  <option value="CNH CN Beijing">CNH Chinese Yuan</option>
  <option value="HKD HK Hong Kong">HKD Hong Kong Dollar</option>
  <option value="NZD NZ Wellington">NZD New Zealand Dollar</option>
  <option disabled>.......................</option>
  <option disabled>All other currencies below ↓</option>
  <option disabled>.......................</option>
  <option value="AED Abu Dhabi">AED United Arab Emirates Dirham</option>
    <option value="AFN AF Kabul">AFN Afghan Afghani</option>
    <option value="ALL AL Tirana">ALL Albanian Lek</option>
    <option value="AMD AM Yerevan">AMD Armenian Dram</option>
    <option value="ANG AN Willemstad">ANG Netherlands Antillean Guilder</option>
    <option value="AOA AO Luanda">AOA Angolan Kwanza</option>
    <option value="ARS AR Buenos Aires">ARS Argentine Peso</option>
    <option value="AWG AW Oranjestad">AWG Aruban Florin</option>
    <option value="AZN AZ Baku">AZN Azerbaijani Manat</option>
    <option value="BAM BA Sarajevo">BAM Bosnian Convertible Mark</option>
    <option value="BBD BB Bridgetown">BBD Barbadian Dollar</option>
    <option value="BDT BD Dhaka">BDT Bangladeshi Taka</option>
    <option value="BGN BG Sofia">BGN Bulgarian Lev</option>
    <option value="BHD BH Manama">BHD Bahraini Dinar</option>
    <option value="BIF BI Gitega">BIF Burundian Franc</option>
    <option value="BMD BM Hamilton">BMD Bermudian Dollar</option>
    <option value="BND BN Bandar Seri Begawan">BND Brunei Dollar</option>
    <option value="BOB BO La Paz">BOB Bolivian Boliviano</option>
    <option value="BRL BR Brazilia">BRL Brazilian Real</option>
    <option value="BSD BS Nassau"> BSD Bahamian Dollar</option>
    <option value="BTN BT Thimphu"> BTN Bhutanese Ngultrum</option>
    <option value="BWP BW Gaborone">BWP Botswana Pula</option>
    <option value="BYN BY Minsk">BYN Belarusian Ruble</option>
    <option value="BZD BZ Belmopan">BZD Belize Dollar</option>
    <option value="CDF CD Brazzaville">CDF Congolese Franc</option>
    <option value="CLP CL Santiago">CLP Chilean Peso</option>
    <option value="COP CO Bogotá">COP Colombian Peso</option>
    <option value="CRC San José">CRC Costa Rican Colón</option>
    <option value="CUP CU Havana">Cuban peso</option>
    <option value="CVE CV Praia">CVE Cape Verdean Escudo</option>
    <option value="CZK CZ Prague">CZK Czech Koruna</option>
    <option value="DJF DJ Djibouti">DJF Djiboutian Franc</option>
    <option value="DKK DK Copenhagen">DKK Danish Krone</option>
    <option value="DOP DO Santo Domingo">DOP Dominican Peso</option>
    <option value="DZD DZ Algiers">DZD Algerian Dinar</option>
    <option value="EGP EG Cairo">EGP Egyptian Pound</option>
    <option value="ERN ER Asmara">ERN Eritrean Nakfa</option>
    <option value="ETB ET Addis Ababa">ETB Ethiopian Birr</option>
    <option value="FJD FJ Suva">FJD Fijian Dollar</option>
    <option value="FKP FK Stanley">FKP Falkland Islands Pound</option>
    <option value="GEL GE Tbilisi">GEL Georgian Lari</option>
    <option value="GGP GG Saint Peter Port">GGP Guernsey Pound</option>
    <option value="GHS GH Accra">GHS Ghanaian Cedi</option>
    <option value="GIP GI Gibraltar">GIP Gibraltar Pound</option>
    <option value="GMD GM Banjul">GMD Gambian Dalasi</option>
    <option value="GNF GN Conakry">GNF Guinean Franc</option>
    <option value="GTQ GT Guatemala City">GTQ Guatemalan Quetzal</option>
    <option value="GYD GY Georgetown">GYD Guyanese Dollar</option>
    <option value="HNL HN Tegucigalpa">HNL Honduran Lempira</option>
    <option value="HRK HR Zagreb">HRK Croatian Kuna</option>
    <option value="HTG HT Port-au-Prince">HTG Haitian Gourde</option>
    <option value="HUF HU Budapest">HUF Hungarian Forint</option>
    <option value="IDR ID Jakarta">IDR Indonesian Rupiah</option>
    <option value="ILS IL Jerusalem">ILS Israeli Shekel</option>
    <option value="INR IN New Delhi">INR Indian Rupee</option>
    <option value="IQD IQ Baghdad">IQD Iraqi Dinar</option>
    <option value="IRR IR Tehran">IRR Iranian Rial</option>
    <option value="ISK IS Reykjavík">ISK Icelandic Króna</option>
    <option value="JMD JM Kingston">JMD Jamaican Dollar</option>
    <option value="JOD JO Amman">JOD Jordanian Dinar</option>
    <option value="KES KE Nairobi">KES Kenyan Shilling</option>
    <option value="KGS KG Bishkek">KGS Kyrgyzstani Som</option>
    <option value="KHR KH Phnom Penh">KHR Cambodian Riel</option>
    <option value="KMF KM Moroni">KMF Comorian Franc</option>
    <option value="KPW KP Pyongyang">KPW North Korean Won</option>
    <option value="KRW KR Seoul">KRW South Korean Won</option>
    <option value="KWD KW Kuwait City">KWD Kuwaiti Dinar</option>
    <option value="KYD KY George Town">KYD Cayman Islands Dollar</option>
    <option value="KZT KZ Astana">KZT Kazakhstani Tenge</option>
    <option value="LAK LA Vientiane">LAK Lao Kip</option>
    <option value="LBP LB Beirut ">LBP Lebanese Pound</option>
    <option value="LKR LK Colombo">LKR Sri Lankan Rupee</option>
    <option value="LRD LR Monrovia">LRD Liberian Dollar</option>
    <option value="LSL LS Maseru ">LSL Lesotho Loti</option>
    <option value="LYD LY Tripoli">LYD Libyan Dinar</option>
    <option value="MAD MA Rabat">MAD Moroccan Dirham</option>
    <option value="MDL MD Chișinău">MDL Moldovan Leu</option>
    <option value="MGA MG Antananarivo">MGA Malagasy Ariary</option>
    <option value="MKD MK Skopje">MKD Macedonian Denar</option>
    <option value="MMK MM Naypyidaw">MMK Burmese Kyat</option>
    <option value="MNT MN Ulaanbaatar">MNT Mongolian Tögrög</option>
    <option value="MOP MO Macau">MOP Macanese Pataca</option>
    <option value="MUR MU Port Louis">MUR Mauritian Rupee</option>
    <option value="MVR MV Malé">MVR Maldivian Rufiyaa</option>
    <option value="MWK MW Lilongwe">MWK Malawian Kwacha</option>
    <option value="MXN MX Mexico City">MXN Mexican Peso</option>
    <option value="MYR MY Kuala Lumpur">MYR Malaysian Ringgit</option>
    <option value="MZN MZ Maputo">MZN Mozambican Metical</option>
    <option value="NAD NA Windhoek">NAD Namibian Dollar</option>
    <option value="NGN NG Abuja">NGN Nigerian Naira</option>
    <option value="NIO NI Managua">NIO Nicaraguan Córdoba</option>
    <option value="NOK NO Oslo">NOK Norwegian Krone</option>
    <option value="NPR NP Kathmandu">NPR Nepalese Rupee</option>
    <option value="OMR OM Muscat">OMR Omani Rial</option>
    <option value="PAB PA Panama City">PAB Panamanian Balboa</option>
    <option value="PEN PE Lima">PEN Peruvian Sol</option>
    <option value="PGK PG Port Moresby">PGK Papua New Guinean Kina</option>
    <option value="PHP PH Manila">PHP Philippine Peso</option>
    <option value="PKR PK Islamabad">PKR Pakistani Rupee</option>
    <option value="PLN PL Warsaw">PLN Polish Złoty</option>
    <option value="PRB PR Tiraspol">PRB Transnistrian Ruble</option>
    <option value="PYG PY Asunción">PYG Paraguayan Guaraní</option>
    <option value="QAR QA Doha">QAR Qatari Riyal</option>
    <option value="RON RO Bucharest">RON Romanian Leu</option>
    <option value="RSD RS Belgrade">RSD Serbian Dinar</option>
    <option value="RUB RU Moscow">RUB Russian Ruble</option>
    <option value="RWF RW Kigali">RWF Rwandan Franc</option>
    <option value="SAR SA Riyadh">SAR Saudi Riyal</option>
    <option value="SEK SE Stockholm">SEK Swedish Krona</option>
    <option value="SGD SG Singapore">SGD Singapore Dollar</option>
    <option value="SHP SH Jamestown">SHP Saint Helena Pound</option>
    <option value="SLL SL Freetown">SLL Sierra Leonean Leone</option>
    <option value="SOS SO Mogadishu">SOS Somali Shilling</option>
    <option value="SRD SR Paramaribo">SRD Surinamese Dollar</option>
    <option value="SSP SS Juba">SSP South Sudanese Pound</option>
    <option value="STN ST São Tomé">STN São Tomé and Príncipe Dobra</option>
    <option value="SYP SY Damascus">SYP Syrian Pound</option>
    <option value="SZL SZ Mbabane">SZL Swazi Lilangeni</option>
    <option value="THB TH Bangkok">THB Thai Baht</option>
    <option value="TJS TJ Dushanbe">TJS Tajikistani Somoni</option>
    <option value="TMT TM Ashgabat">TMT Turkmenistan Manat</option>
    <option value="TND TN Tunis">TND Tunisian Dinar</option>
    <option value="TOP TO Nuku'alofa">TOP Tongan Paʻanga</option>
    <option value="TRY TR Ankara">TRY Turkish Lira</option>
    <option value="TTD TT Port of Spain">TTD Trinidad & Tobago Dollar</option>
    <option value="TVD TV Funafuti">TVD Tuvaluan Dollar</option>
    <option value="TWD TW Taipei City">TWD New Taiwan Dollar</option>
    <option value="TZS TZ Dodoma">TZS Tanzanian Shilling</option>
    <option value="UAH UA Kyiv">UAH Ukrainian Hryvnia</option>
    <option value="UGX UG Kampala">UGX Ugandan Shilling</option>
    <option value="UYU UY Montevideo">UYU Uruguayan Peso</option>
    <option value="UZS UZ Tashkent">UZS Uzbekistani Soʻm</option>
    <option value="VES VE Caracas">VES Venezuelan Bolívar Soberano</option>
    <option value="VND VN Hanoi">VND Vietnamese Dồng</option>
    <option value="VUV VU Port Vila">VUV Vanuatu Vatu</option>
    <option value="WST WS Apia">WST Samoan Tālā</option>
    <option value="XAF XA Yaoundé">XAF Central African Franc</option>
    <option value="XOF XO Dakar">XOF West African Franc</option>
    <option value="XPF XP Papeete">XPF CFP Franc</option>
    <option value="ZAR ZA Pretoria">ZAR South African Rand</option>
    <option value="ZMW ZM Lusaka">ZMW Zambian Kwacha</option>
    <option value="ZWB ZW Harare">ZWB Zimbabwean Bonds</option>
 

  </select>

<div id="convert-to-text">convert to</div>

<select id="currency-to" name="currency-to">
<option disabled selected hidden>Select Currency</option>
  <option value="USD US Washington DC">USD United States Dollar</option>
  <option value="EUR BE Brussels">EUR European Euro</option>
  <option value="JPY JP Tokyo">JPY Japanese Yen</option>
  <option value="GBP GB London">GBP British Pound Sterling</option>
  <option value="AUD AU Canberra">AUD Australian Dollar</option>
  <option value="CAD CA Ottawa">CAD Canadian Dollar</option>
  <option value="CHF CH Zurich">CHF Swiss Franc</option>
  <option value="CNH CN Beijing">CNH Chinese Yuan</option>
  <option value="HKD HK Hong Kong">HKD Hong Kong Dollar</option>
  <option value="NZD NZ Wellington">NZD New Zealand Dollar</option>
  <option disabled>.......................</option>
  <option disabled>All other currencies below ↓</option>
  <option disabled>.......................</option>
  <option value="AED Abu Dhabi">AED United Arab Emirates Dirham</option>
    <option value="AFN AF Kabul">AFN Afghan Afghani</option>
    <option value="ALL AL Tirana">ALL Albanian Lek</option>
    <option value="AMD AM Yerevan">AMD Armenian Dram</option>
    <option value="ANG AN Willemstad">ANG Netherlands Antillean Guilder</option>
    <option value="AOA AO Luanda">AOA Angolan Kwanza</option>
    <option value="ARS AR Buenos Aires">ARS Argentine Peso</option>
    <option value="AWG AW Oranjestad">AWG Aruban Florin</option>
    <option value="AZN AZ Baku">AZN Azerbaijani Manat</option>
    <option value="BAM BA Sarajevo">BAM Bosnian Convertible Mark</option>
    <option value="BBD BB Bridgetown">BBD Barbadian Dollar</option>
    <option value="BDT BD Dhaka">BDT Bangladeshi Taka</option>
    <option value="BGN BG Sofia">BGN Bulgarian Lev</option>
    <option value="BHD BH Manama">BHD Bahraini Dinar</option>
    <option value="BIF BI Gitega">BIF Burundian Franc</option>
    <option value="BMD BM Hamilton">BMD Bermudian Dollar</option>
    <option value="BND BN Bandar Seri Begawan">BND Brunei Dollar</option>
    <option value="BOB BO La Paz">BOB Bolivian Boliviano</option>
    <option value="BRL BR Brazilia">BRL Brazilian Real</option>
    <option value="BSD BS Nassau"> BSD Bahamian Dollar</option>
    <option value="BTN BT Thimphu"> BTN Bhutanese Ngultrum</option>
    <option value="BWP BW Gaborone">BWP Botswana Pula</option>
    <option value="BYN BY Minsk">BYN Belarusian Ruble</option>
    <option value="BZD BZ Belmopan">BZD Belize Dollar</option>
    <option value="CDF CD Brazzaville">CDF Congolese Franc</option>
    <option value="CLP CL Santiago">CLP Chilean Peso</option>
    <option value="COP CO Bogotá">COP Colombian Peso</option>
    <option value="CRC San José">CRC Costa Rican Colón</option>
    <option value="CUP CU Havana">Cuban peso</option>
    <option value="CVE CV Praia">CVE Cape Verdean Escudo</option>
    <option value="CZK CZ Prague">CZK Czech Koruna</option>
    <option value="DJF DJ Djibouti">DJF Djiboutian Franc</option>
    <option value="DKK DK Copenhagen">DKK Danish Krone</option>
    <option value="DOP DO Santo Domingo">DOP Dominican Peso</option>
    <option value="DZD DZ Algiers">DZD Algerian Dinar</option>
    <option value="EGP EG Cairo">EGP Egyptian Pound</option>
    <option value="ERN ER Asmara">ERN Eritrean Nakfa</option>
    <option value="ETB ET Addis Ababa">ETB Ethiopian Birr</option>
    <option value="FJD FJ Suva">FJD Fijian Dollar</option>
    <option value="FKP FK Stanley">FKP Falkland Islands Pound</option>
    <option value="GEL GE Tbilisi">GEL Georgian Lari</option>
    <option value="GGP GG Saint Peter Port">GGP Guernsey Pound</option>
    <option value="GHS GH Accra">GHS Ghanaian Cedi</option>
    <option value="GIP GI Gibraltar">GIP Gibraltar Pound</option>
    <option value="GMD GM Banjul">GMD Gambian Dalasi</option>
    <option value="GNF GN Conakry">GNF Guinean Franc</option>
    <option value="GTQ GT Guatemala City">GTQ Guatemalan Quetzal</option>
    <option value="GYD GY Georgetown">GYD Guyanese Dollar</option>
    <option value="HNL HN Tegucigalpa">HNL Honduran Lempira</option>
    <option value="HRK HR Zagreb">HRK Croatian Kuna</option>
    <option value="HTG HT Port-au-Prince">HTG Haitian Gourde</option>
    <option value="HUF HU Budapest">HUF Hungarian Forint</option>
    <option value="IDR ID Jakarta">IDR Indonesian Rupiah</option>
    <option value="ILS IL Jerusalem">ILS Israeli Shekel</option>
    <option value="INR IN New Delhi">INR Indian Rupee</option>
    <option value="IQD IQ Baghdad">IQD Iraqi Dinar</option>
    <option value="IRR IR Tehran">IRR Iranian Rial</option>
    <option value="ISK IS Reykjavík">ISK Icelandic Króna</option>
    <option value="JMD JM Kingston">JMD Jamaican Dollar</option>
    <option value="JOD JO Amman">JOD Jordanian Dinar</option>
    <option value="KES KE Nairobi">KES Kenyan Shilling</option>
    <option value="KGS KG Bishkek">KGS Kyrgyzstani Som</option>
    <option value="KHR KH Phnom Penh">KHR Cambodian Riel</option>
    <option value="KMF KM Moroni">KMF Comorian Franc</option>
    <option value="KPW KP Pyongyang">KPW North Korean Won</option>
    <option value="KRW KR Seoul">KRW South Korean Won</option>
    <option value="KWD KW Kuwait City">KWD Kuwaiti Dinar</option>
    <option value="KYD KY George Town">KYD Cayman Islands Dollar</option>
    <option value="KZT KZ Astana">KZT Kazakhstani Tenge</option>
    <option value="LAK LA Vientiane">LAK Lao Kip</option>
    <option value="LBP LB Beirut ">LBP Lebanese Pound</option>
    <option value="LKR LK Colombo">LKR Sri Lankan Rupee</option>
    <option value="LRD LR Monrovia">LRD Liberian Dollar</option>
    <option value="LSL LS Maseru ">LSL Lesotho Loti</option>
    <option value="LYD LY Tripoli">LYD Libyan Dinar</option>
    <option value="MAD MA Rabat">MAD Moroccan Dirham</option>
    <option value="MDL MD Chișinău">MDL Moldovan Leu</option>
    <option value="MGA MG Antananarivo">MGA Malagasy Ariary</option>
    <option value="MKD MK Skopje">MKD Macedonian Denar</option>
    <option value="MMK MM Naypyidaw">MMK Burmese Kyat</option>
    <option value="MNT MN Ulaanbaatar">MNT Mongolian Tögrög</option>
    <option value="MOP MO Macau">MOP Macanese Pataca</option>
    <option value="MUR MU Port Louis">MUR Mauritian Rupee</option>
    <option value="MVR MV Malé">MVR Maldivian Rufiyaa</option>
    <option value="MWK MW Lilongwe">MWK Malawian Kwacha</option>
    <option value="MXN MX Mexico City">MXN Mexican Peso</option>
    <option value="MYR MY Kuala Lumpur">MYR Malaysian Ringgit</option>
    <option value="MZN MZ Maputo">MZN Mozambican Metical</option>
    <option value="NAD NA Windhoek">NAD Namibian Dollar</option>
    <option value="NGN NG Abuja">NGN Nigerian Naira</option>
    <option value="NIO NI Managua">NIO Nicaraguan Córdoba</option>
    <option value="NOK NO Oslo">NOK Norwegian Krone</option>
    <option value="NPR NP Kathmandu">NPR Nepalese Rupee</option>
    <option value="OMR OM Muscat">OMR Omani Rial</option>
    <option value="PAB PA Panama City">PAB Panamanian Balboa</option>
    <option value="PEN PE Lima">PEN Peruvian Sol</option>
    <option value="PGK PG Port Moresby">PGK Papua New Guinean Kina</option>
    <option value="PHP PH Manila">PHP Philippine Peso</option>
    <option value="PKR PK Islamabad">PKR Pakistani Rupee</option>
    <option value="PLN PL Warsaw">PLN Polish Złoty</option>
    <option value="PRB PR Tiraspol">PRB Transnistrian Ruble</option>
    <option value="PYG PY Asunción">PYG Paraguayan Guaraní</option>
    <option value="QAR QA Doha">QAR Qatari Riyal</option>
    <option value="RON RO Bucharest">RON Romanian Leu</option>
    <option value="RSD RS Belgrade">RSD Serbian Dinar</option>
    <option value="RUB RU Moscow">RUB Russian Ruble</option>
    <option value="RWF RW Kigali">RWF Rwandan Franc</option>
    <option value="SAR SA Riyadh">SAR Saudi Riyal</option>
    <option value="SEK SE Stockholm">SEK Swedish Krona</option>
    <option value="SGD SG Singapore">SGD Singapore Dollar</option>
    <option value="SHP SH Jamestown">SHP Saint Helena Pound</option>
    <option value="SLL SL Freetown">SLL Sierra Leonean Leone</option>
    <option value="SOS SO Mogadishu">SOS Somali Shilling</option>
    <option value="SRD SR Paramaribo">SRD Surinamese Dollar</option>
    <option value="SSP SS Juba">SSP South Sudanese Pound</option>
    <option value="STN ST São Tomé">STN São Tomé and Príncipe Dobra</option>
    <option value="SYP SY Damascus">SYP Syrian Pound</option>
    <option value="SZL SZ Mbabane">SZL Swazi Lilangeni</option>
    <option value="THB TH Bangkok">THB Thai Baht</option>
    <option value="TJS TJ Dushanbe">TJS Tajikistani Somoni</option>
    <option value="TMT TM Ashgabat">TMT Turkmenistan Manat</option>
    <option value="TND TN Tunis">TND Tunisian Dinar</option>
    <option value="TOP TO Nuku'alofa">TOP Tongan Paʻanga</option>
    <option value="TRY TR Ankara">TRY Turkish Lira</option>
    <option value="TTD TT Port of Spain">TTD Trinidad & Tobago Dollar</option>
    <option value="TVD TV Funafuti">TVD Tuvaluan Dollar</option>
    <option value="TWD TW Taipei City">TWD New Taiwan Dollar</option>
    <option value="TZS TZ Dodoma">TZS Tanzanian Shilling</option>
    <option value="UAH UA Kyiv">UAH Ukrainian Hryvnia</option>
    <option value="UGX UG Kampala">UGX Ugandan Shilling</option>
    <option value="UYU UY Montevideo">UYU Uruguayan Peso</option>
    <option value="UZS UZ Tashkent">UZS Uzbekistani Soʻm</option>
    <option value="VES VE Caracas">VES Venezuelan Bolívar Soberano</option>
    <option value="VND VN Hanoi">VND Vietnamese Dồng</option>
    <option value="VUV VU Port Vila">VUV Vanuatu Vatu</option>
    <option value="WST WS Apia">WST Samoan Tālā</option>
    <option value="XAF XA Yaoundé">XAF Central African Franc</option>
    <option value="XOF XO Dakar">XOF West African Franc</option>
    <option value="XPF XP Papeete">XPF CFP Franc</option>
    <option value="ZAR ZA Pretoria">ZAR South African Rand</option>
    <option value="ZMW ZM Lusaka">ZMW Zambian Kwacha</option>
    <option value="ZWB ZW Harare">ZWB Zimbabwean Bonds</option>
</select>

<button id="submit">
SUBMIT
</button>
<form>
</div>
<p id="amount-error" class="invisible">* Enter amount for conversion</p>
<p id="currency-error-from" class="invisible">* Select initial currency</p>
<p id="currency-error-to" class="invisible">* Select final currency</p>


<div id="currency-1-to-1"></div>
<div id="currency-results"></div>

`;

currencyContainer.append(currencyArea);

