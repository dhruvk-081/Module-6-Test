var place = document.querySelector("#location");
var access_key = document.querySelector("#access_key");

async function getData() {
  if (place.value != "" && access_key.value != "") {
    let tableData = "";

    let url = `http://api.weatherstack.com/current?access_key=${access_key.value}&query=${place.value}`;

    document.getElementById("error").style.display = "none";

    const response = await fetch(url);
    data = await response.json();
    console.log(data);
    tableData += `<tr>
    <td>Location: ${JSON.stringify(data.location.country)} ${JSON.stringify(data.location.region)}</td>
    </tr>
    
    <tr>
    <td>Lat: ${JSON.stringify(data.location.lat)}</td>
    <td>Lat: ${JSON.stringify(data.location.lon)}</td>
    </tr>

    <tr>
    <td>Timezone: ${JSON.stringify(data.location.timezone_id)}</td>
    </tr>

    <tr>
    <td>Wind Speed: ${JSON.stringify(data.current.wind_speed)}</td>
    </tr>

    <tr>
    <td>Pressure: ${JSON.stringify(data.current.pressure)}</td>
    </tr>

    <tr>
    <td>Humidity: ${JSON.stringify(data.current.humidity)}</td>
    </tr>

    <tr>
    <td>Wind Direction: ${JSON.stringify(data.current.wind_dir)}</td>
    </tr>

    <tr>
    <td>UV Index: ${JSON.stringify(data.current.uv_index)}</td>
    </tr>

    <tr>
    <td>Feels Like: ${JSON.stringify(data.current.feelslike)}</td>
    </tr>`;

    document.getElementById("table_body").innerHTML = tableData;
    document.getElementById("success").style.visibility = "visible";
  }
  if (place.value == "" || access_key.value == "") {
    document.getElementById("success").style.visibility = "hidden";
    document.getElementById("error").style.display = "block";
    alert("Value of Location and Access Token is mandatory");
    
  }
}


// My API -  655167613b700f6c69cb56e73e13f23b

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Delhi?unitGroup=metric&key=YK2NKU2KV93248ASVBADNWUX2&contentType=json


