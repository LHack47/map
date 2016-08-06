//FIREBASE LINK
var firebaseRef = new Firebase("https://mapmain.firebaseio.com/");

//Create object for firebase
var userObject = {};

//Create object for map toggleing
var mapObject ={};

//Function to send object to firebase
function post(){
    firebaseRef.push(userObject);//firebaseRef.push
    userObject = {};
    document.getElementById("resetForm").reset();
} 

//Function to send object to firebase after final submit (with comment)
function submitPost(){
    userKey = "submitComment";
    userObject[userKey] = $("#endComment").val();
    firebaseRef.push(userObject);//firebaseRef.push
    userObject = {};
    document.getElementById("resetForm").reset();
} 

//Function to geocode location
function geocodeThis(){
    var geocoder = new google.maps.Geocoder;
    var latLng = userObject.userLocation;
    geocoder.geocode({'location': latLng}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            userObject.Address = results[0].formatted_address;
        } else {
            console.log('No results found');
        }
    });
}; //geocodeThis()

//Function to fade in elements
function fadeThisIn(element){
    element.fadeIn("slow");
};

//Function to fade out elements
function fadeThisOut(element){
    element.fadeOut("slow");
};


//Moving through pages
var current_fs, next_fs, previous_fs, userKey;

/* SEARCH BOX + MAP*/
 function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('googleMap'), {
      center: {lat: 37.734972, lng: -122.431297},
      zoom: 12,
      styles: [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#4b4b4b"}]},{"featureType": "administrative.province",
        "elementType": "geometry",
        "stylers": [{"saturation": "7"}]},{"featureType": "administrative.province",
        "elementType": "geometry.fill",
        "stylers": [{"visibility": "on"},{"saturation": "17"},{"lightness": "20"}]},{"featureType": "landscape",
        "elementType": "all",
        "stylers": [{"color": "#f2f2f2"}]},{"featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#f2f2f2"}]},{"featureType": "poi",
        "elementType": "all",
        "stylers": [{"visibility": "off"}]},{"featureType": "road",
        "elementType": "all",
        "stylers": [{"saturation": -100},{"lightness": 45}]},{"featureType": "road.highway",
        "elementType": "all",
        "stylers": [{"visibility": "simplified"}]},{"featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#9fce48"}]},{"featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{"color": "#32879c"}]},{"featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{"invert_lightness": true}]},{"featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [{"color": "#ffffff"},{"visibility": "off"},{"weight": "0.57"}]},{"featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{"visibility": "off"}]},{"featureType": "transit",
        "elementType": "all",
        "stylers": [{"visibility": "off"}]},{"featureType": "water",
        "elementType": "all",
        "stylers": [{"color": "#46bcec"},{"visibility": "on"}]},{"featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#6bccdd"}]},{"featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#ffffff"}]},{ "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [{"visibility": "off"}]}],
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.RIGHT_BOTTOM
           },
          zoomControl: true,
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
          },
           streetViewControl: false
    }); //styles

    var pinIcon = "styles/images/";

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    var questionWindow = new google.maps.InfoWindow;
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    // Listen for the event fired when the user selects a prediction and retrieve more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();

     places.forEach(function(place) {
        //Creating the if statement for the 'view only' map
        if (mapObject.seeMap === false) {  
        // Create a marker for each place.
        var marker = new google.maps.Marker({
          position: place.geometry.location,
          map: map,
          icon: pinIcon + "redStar.png"
        });
        } //closing the if statement

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
        
        //Creating the if statement for the 'view only' map
        if (mapObject.seeMap === false) {  
        //question-window open
        questionWindow.setContent( "<div id='pinDrop-window'>" +
        "<h3>Report a sexual assault at this location?</h3>"+
        "<button type='button' class='btn btn-default btn-clicked' id='fireBase-no'>No</button>"+
         "<button type='button' class='btn btn-default btn-clicked' id='fireBase-yes'>Yes</button>" +
        "</div>"); // #pinDrop-window 
        questionWindow.open(map, marker);
        if(infoWindow.open()){
        infoWindow.close();
        }
        $(".gm-style-iw").next("div").hide();

        // SEND TO FIREBASE
      $("#pinDrop-window > #fireBase-yes").on("click", function(e){
        userObject.userLocation = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()};
        geocodeThis();
        fadeThisOut($("#pinDrop-window"));
        fadeThisIn($("#form-start-overlay"));
        questionWindow.close();
        $("#pac-input").hide();
        $(".mapPrompts").hide();
        $(".home-elements").hide();
        $("#exitMap").hide();
        mapObject.seeMap = true;  
      });

      $("#pinDrop-window > #fireBase-no").on("click", function(){
        questionWindow.close();
        //REMOVE MARKER WHEN USER SELECTS NO
        marker.setVisible(false);
      });
    } //Closing the if statement
    }); //place.forEach

    map.fitBounds(bounds);
      // console.log(bounds);

    }); //searchBox.addListener

//Creating the if statement for the 'view only' map
 
     // Add marker on user click
  map.addListener('click', function(e) {

    if (mapObject.seeMap === false) {   
    var marker = new google.maps.Marker({
    position: {lat: e.latLng.lat(), lng: e.latLng.lng()},
    map: map,
    icon: pinIcon + "redStar.png"
    }); // var marker
     //info box when you click map
    questionWindow.setContent( 
      "<div id='pinDrop-window'>" +
      "<h3>Report a sexual assault at this location?  </h3>"+
      "<button type='button' class='btn btn-default btn-clicked' id='fireBase-no'>No</button>"+
      "<button type='button' class='btn btn-default btn-clicked' id='fireBase-yes'>Yes</button>" +
      "</div>"); // #pinDrop-window 

   //Call by:: questionWindow.open(map, marker);
      questionWindow.open(map, marker);
        if(infoWindow.open()){
          infoWindow.close();
        }
      $(".gm-style-iw").next("div").hide();
 //ADD PINDROP OVERLAY 
      $("#pinDrop-window > #fireBase-yes").on("click", function(){
       userObject.userLocation = {lat: e.latLng.lat(), lng: e.latLng.lng()};
       geocodeThis();
        fadeThisOut($("#pinDrop-window"));
        fadeThisIn($("#form-start-overlay"));
        questionWindow.close();
        $("#pac-input").hide();
        $(".mapPrompts").hide(); 
        $(".home-elements").hide();
        $("#exitMap").hide();
        mapObject.seeMap = true; 
      });
      $("#pinDrop-window > #fireBase-no").on("click", function(){
        questionWindow.close();
        marker.setVisible(false);
      });
      } //if statement
    }); //map.addListener


var infoWindow = new google.maps.InfoWindow();

//DROP A MARKER WHEN MAP IS CLICKED 
  firebaseRef.on("child_added", function(snapshot, prevChildKey) {
    // Get latitude and longitude from the cloud.
    var eventObject = snapshot.val();
    // Create a google.maps.LatLng object for the position of the marker.
    var latLng = new google.maps.LatLng(eventObject.userLocation.lat, eventObject.userLocation.lng);
    // Place a marker at that location.
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: pinIcon + "redStar.png"
    });

  //info box when you click a pin
      google.maps.event.addListener(marker, 'click', function() {
        //Items not to be in InfoWindow
        var uL = eventObject.hasOwnProperty("userLocation");
        var cI = eventObject.hasOwnProperty("campusInfo");
        var sC = eventObject.hasOwnProperty("submitComment");
        var p = eventObject.hasOwnProperty("prosecuted");
        var rT = eventObject.hasOwnProperty("reportedTo");
        //Creating info window content
        var outer = document.createElement('div');
        var inner = document.createElement('div');
        $(inner).attr("id", "infoContent");
        var content = "";
        for (var key in eventObject){ 
          content = content + "<strong> " + key + ": </strong>" + eventObject[key]+ "<br>";

          if(uL === true){
            delete eventObject.userLocation;
          } 
          if(cI === true){
            delete eventObject.campusInfo;
          }
          if(sC === true){
            delete eventObject.submitComment;
          }
          if(p === true){
            delete eventObject.prosecuted;
          }
          if(rT === true){
            delete eventObject.reportedTo;
          }

        };
        //Setting info window content
        $(inner).html(content);
        $(outer).append(inner);
        infoWindow.setContent($(outer).html());
      
      infoWindow.open(map, marker);
        if(questionWindow.open()){
          questionWindow.close();
          marker.setVisible(false);
        }
    }); // addListender(marker)
  }); //firebase.on function
} //initAutocomplete()

