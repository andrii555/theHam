function myMap() {
    var myCenter = new google.maps.LatLng(49.833038, 23.994617);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 16};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter,
        icon: 'img/marker.png'
    });
    marker.setMap(map);
    google.maps.event.addListener(marker, 'click', function () {
        var infowindow = new google.maps.InfoWindow({
            content: "Hello World!"
        });
        infowindow.open(map, marker);
    });
}


