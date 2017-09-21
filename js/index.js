
function myMap() {
    let mapOptions = {
        center: new google.maps.LatLng(31.452412,74.927772),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
   
let map = new google.maps.Map(document.getElementById("map"), mapOptions);
     let marker = new google.maps.Marker({
  position: mapOptions.center,
  animation:google.maps.Animation.BOUNCE
  });

marker.setMap(map);
}


