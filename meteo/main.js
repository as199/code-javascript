let callBackSucess = function (data) {
  if (data) {
    for (let i = 0; i < data.list.length; i++) {
      ligne = document.createElement("tr");
      //td 1
      cell1 = document.createElement("td");
      texte1 = document.createTextNode(`${data.list[i].name}`);
      cell1.appendChild(texte1);

      //td2
      cell2 = document.createElement("td");
      texte2 = document.createTextNode(`${data.list[i].main.temp}`);
      cell2.appendChild(texte2);
      //td3
      cell3 = document.createElement("td");
      texte3 = document.createTextNode(`${data.list[i].coord.Lon}`);
      cell3.appendChild(texte3);
      //td4
      cell4 = document.createElement("td");
      texte4 = document.createTextNode(`${data.list[i].coord.Lat}`);
      cell4.appendChild(texte4);

      //on remplie le tbody
      ligne.appendChild(cell1);
      ligne.appendChild(cell2);
      ligne.appendChild(cell3);
      ligne.appendChild(cell4);
      document.getElementById("corps").appendChild(ligne);
    }
  }
};

function buttonClickGet() {
  const url =
    "https://api.meteo-concept.com/api/forecast/daily?token=46e111c0ef0fdbbfe3d42076f2e4b0797488d78332656167f81f6eb6e089826e&insee=35238";
  const url1 =
    "http://api.openweathermap.org/data/2.5/weather?q=London&appid=1ec12a4f1e2fe9a3cdbf5a5c254196d3";

  const url2 =
    "http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=1ec12a4f1e2fe9a3cdbf5a5c254196d3";
  /**** */
  const url5 =
    "http://api.openweathermap.org/data/2.5/box/city?bbox=12,12,16,17,50&appid=1ec12a4f1e2fe9a3cdbf5a5c254196d3";
  /*** */
  const url3 =
    "http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid=1ec12a4f1e2fe9a3cdbf5a5c254196d3";

  $.get(url5, callBackSucess)
    .done(function () {})
    .fail(function () {
      alert("error");
    })
    .always(function () {});
}
