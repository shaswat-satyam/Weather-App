const API_KEY = "fc82b404db684531b8912026241004";

async function fetchWeather(city) {
  const url =
    "http://api.weatherapi.com/v1/forecast.json?key=" + API_KEY + "&q=" + city;
  let response = await fetch(url, { mode: "cors" });
  response = await response.json();
  return response;
}
async function addRow() {
  let response;
  let img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif",
  );
  img.setAttribute("width", "25em");
  heading.appendChild(img);
  try {
    response = await fetchWeather(input.value);
  } finally {
    heading.innerHTML = "";
  }
  let row = document.createElement("tr");

  let cell = document.createElement("td");
  cell.innerText = response.location.name;
  row.appendChild(cell);

  cell = document.createElement("td");
  cell.innerText = response.location.country;
  row.appendChild(cell);

  cell = document.createElement("td");
  cell.innerText = response.current.temp_c;
  row.appendChild(cell);
  cell = document.createElement("td");
  cell.innerText = response.current.wind_kph;
  row.appendChild(cell);

  cell = document.createElement("td");
  cell.innerText = response.current.wind_dir;
  row.appendChild(cell);

  cell = document.createElement("td");
  cell.innerText = response.current.humidity;
  row.appendChild(cell);

  cell = document.createElement("td");
  cell.innerText = response.current.feelslike_c;
  row.appendChild(cell);

  cell = document.createElement("td");
  img = document.createElement("img");
  img.setAttribute("src", "http:" + response.current.condition.icon);

  cell.appendChild(img);
  row.appendChild(cell);

  row.setAttribute("align", "right");

  table.append(row);
}
const input = document.querySelector("input#city");
const button = document.querySelector("button#submit");
const table = document.querySelector("table");
const heading = document.querySelector("h1");
const form = document.querySelector("div.form");

let formHidden = false;
function toggleForm() {
  console.log("toogle");
  formHidden = !formHidden;
  form.hidden = formHidden;
}
