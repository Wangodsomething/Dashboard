/*mars tsag
    delhii tgag 
    gps uzeh
    compass
    level uzuuleh batteru o2 temp pressure*/
function mapContent(){
	var api_key = 'dS0bUbqlBcxJTkhaVESN5uCAlMUVpVbh';
	var latAndLong = {lat: 47.91893, lng: 106.91756}; 
	var zoomLevel = 16;
	var yourAddress = 'Default';

	var map = tt.map({
	    container: 'map',
	    key: api_key,
	    center: latAndLong,
	    zoom: zoomLevel
	});

	var marker = new tt.Marker().setLngLat(latAndLong).addTo(map);
	 	
	 	// FOR CUSTOM MARKER
		//var customMarker = document.createElement('div');
		//customMarker.id = 'marker';
		//var marker = new tt.Marker({element: customMarker}).setLngLat(latAndLong).addTo(map);

	var popupOffsets = {
	  top: [0, 0],
	  bottom: [0, -70],
	  'bottom-right': [0, -70],
	  'bottom-left': [0, -70],
	  left: [25, -35],
	  right: [-25, -35]
	}

	//var popup = new tt.Popup({offset: popupOffsets}).setHTML(yourAddress);
	//marker.setPopup(popup).togglePopup();

    }
	var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
} else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}