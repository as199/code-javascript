let map;

function initMap() {
  // JS API is loaded and available
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.866667, lng: 2.333333 },
    zoom: 8,
  });
}
