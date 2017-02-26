var map;

function createMapChart() {
  console.log("map")
  var chartDiv = document.getElementById('chart');
  chartDiv.className = "map";
  map = new google.maps.Map(chartDiv, {
    zoom: 3,
    scrollwheel: false,
    mapTypeControl: false,
    streetViewControl: false,
    center: new google.maps.LatLng(45,-32),
    styles: [
      {
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#D3D3D3"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#FFFFFF"
          }
        ]
      }
    ]
  })

  var locations = $.ajax(
    {
      method: "GET",
      url: "/static/js/mapdata_mock.txt",
      dataType: "json"
    }
  ).then((res) => {
    res.latlong.forEach((coordinate) => {
      var latLng = new google.maps.LatLng(coordinate[0], coordinate[1])
      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: plotCircle()
      })
    })
  })


}

function plotCircle() {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'black',
    fillOpacity: .8,
    scale: 7,
    strokeWeight: 0
  };
}
