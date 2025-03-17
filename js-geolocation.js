const x = "";
document.writeln(x);

function getLocation() {
  if (navigator.geolocation) {
    let t = navigator.geolocation.getCurrentPosition(showPosition);
    //   alert(t);
    if (t == "undefined") {
      x.innerHTML = "GEolocation is not supported";
    }
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred.";
      break;
    default:
      x.innerHTML = "geolocation not working in browser";
  }
}
