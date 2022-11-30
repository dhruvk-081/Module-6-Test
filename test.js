var place = document.querySelector("#location");
var access_key = document.querySelector("#access_key");

async function getData() {
  if (place.value != "" && access_key.value != "") {
    let tableData = "";

    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place.value}?unitGroup=metric&key=${access_key.value}&contentType=json`;

    document.getElementById("error").style.display = "none";

    const response = await fetch(url);
    data = await response.json();
    console.log(data);
    tableData += `<tr>
    <td>Location: ${data.address}</td>
    </tr>

    <tr>
    <td>Lat: ${data.latitude}</td>
    <td>Lon: ${data.longitude}</td>
    </tr>

    <tr>
    <td>Timezone: ${data.timezone}</td>
    </tr>

    <tr>
    <td>Wind Speed: ${data.currentConditions.windspeed}</td>
    </tr>

    <tr>
    <td>Pressure: ${data.currentConditions.pressure}</td>
    </tr>

    <tr>
    <td>Humidity: ${data.currentConditions.humidity}</td>
    </tr>

    <tr>
    <td>Wind Direction: ${data.currentConditions.winddir}</td>
    </tr>

    <tr>
    <td>UV Index: ${data.currentConditions.solarradiation}</td>
    </tr>

    <tr>
    <td>Feels Like: ${data.currentConditions.feelslike}</td>
    </tr>
    `;

    document.getElementById("table_body").innerHTML = tableData;
    document.getElementById("success").style.visibility = "visible";
  }
  if (place.value == "" || access_key.value == "") {
    document.getElementById("success").style.visibility = "hidden";
    document.getElementById("error").style.display = "block";
    alert("Value of Location and Access Token is mandatory");
  }
}


// access token     YK2NKU2KV93248ASVBADNWUX2
// My API -  655167613b700f6c69cb56e73e13f23b

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Delhi?unitGroup=metric&key=YK2NKU2KV93248ASVBADNWUX2&contentType=json
