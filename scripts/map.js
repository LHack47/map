var firebaseRef = new Firebase("https://maptester.firebaseio.com/");
  var userLocation = " ";
  var userGender = " ";
  var userAge = " ";
  var userComment = " ";
  var attackerGender = " ";
  var attackedBy = " ";
  var attackerRelationship = " ";
  var attackerComment = " ";
  var date = " ";
  var multipleAssaults = " ";
  var circumstancesComment = " ";
  var reported = " ";
  var circumstances2Comment = " ";
  var lastComment = " ";
/* SEND OBJECT TO FIREBASE */
  function post(){
    firebaseRef.push({
        location: userLocation,
         event_address: address,
        user_gender: userGender,
        user_age: userAge,
          user_page_comment: userComment,
        attacker_gender: attackerGender,
        num_of_attackers: attackedBy,
        attacker_relationship: attackerRelationship,
          attacker_page_comment: attackerComment,
        time_period: date,
        multiple_assaults: multipleAssaults,
          circumstances_page_comment: circumstancesComment,
        school_campus: schoolCampus,
        reported: reported,
          circumstances_page2_comment: circumstances2Comment,
          last_page_comment: lastComment
      }) //firebaseRef.push
  } //function post()

      var address;
    function geocodeThis(){
      var geocoder = new google.maps.Geocoder;
      var latLng = userLocation;
        geocoder.geocode({'location': latLng}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
              address = results[0].formatted_address;
              console.log(address);
            } else {
              console.log('No results found');
          }
        });
      }; //geocodeThis()

      function fadeThisIn(element){
      element.fadeIn("fast");
    };
    function fadeThisOut(element){
      element.fadeOut("fast");
    };
/* SEARCH BOX + MAP*/
 function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('googleMap'), {
      center: {lat: 37.734972, lng: -122.431297},
      zoom: 12,
      styles: [{"featureType":"all","elementType":"labels","stylers":[{"lightness":63},{"hue":"#ff0000"}]},{"featureType":"administrative","elementType":"all","stylers":[{"hue":"#000bff"},{"visibility":"on"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"color":"#4a4a4a"},{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"weight":"0.01"},{"color":"#727272"},{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"labels","stylers":[{"color":"#ff0000"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"color":"#ff0000"}]},{"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"color":"#545454"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text","stylers":[{"color":"#7c7c7c"},{"weight":"0.01"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text","stylers":[{"color":"#404040"}]},{"featureType":"landscape","elementType":"all","stylers":[{"lightness":16},{"hue":"#ff001a"},{"saturation":-61}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"color":"#828282"},{"weight":"0.01"}]},{"featureType":"poi.government","elementType":"labels.text","stylers":[{"color":"#4c4c4c"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"hue":"#00ff91"}]},{"featureType":"poi.park","elementType":"labels.text","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"color":"#999999"},{"visibility":"on"},{"weight":"0.01"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"hue":"#ff0011"},{"lightness":53}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#626262"}]},{"featureType":"transit","elementType":"labels.text","stylers":[{"color":"#676767"},{"weight":"0.01"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#0055ff"}]}],
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.LEFT_BOTTOM
           },
          zoomControl: true,
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
          },
           streetViewControl: false
    }); //styles

  //info box when you click map
  var questionString = "<div id='pinDrop-window'>" +
    "<h3>Report a sexual assault at this location?</h3>"+
    "<button type='button' class='btn btn-default btn-clicked' id='fireBase-no'>No</button>"+
    "<button type='button' class='btn btn-default btn-clicked' id='fireBase-yes'>Yes</button>" +
    "</div>"; // #pinDrop-window 

  var questionWindow = new google.maps.InfoWindow({
    content: questionString
  }); //Call by:: questionWindow.open(map, marker);

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }
      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {

        // Create a marker for each place.
        var marker = new google.maps.Marker({
          position: place.geometry.location,
          map: map,
          fillColor: "green"
        });

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }

        //question-window open
        questionWindow.open(map, marker);
        infoWindow.close();
  // SEND TO FIREBASE
      $("#pinDrop-window > #fireBase-yes").on("click", function(e){
        userLocation = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()};
        geocodeThis();
        fadeThisOut($("#pinDrop-window"));
        fadeThisIn($("#form-start-overlay"));
        questionWindow.close();
      });
      $("#pinDrop-window > #fireBase-no").on("click", function(){
        questionWindow.close();
        //REMOVE MARKER WHEN USER SELECTS NO
        marker.setVisible(false);
      });
    }); //place.forEach
    map.fitBounds(bounds);
      // console.log(bounds);
    }); //searchBox.addListener



     // Add marker on user click
  map.addListener('click', function(e) {
    var marker = new google.maps.Marker({
    position: {lat: e.latLng.lat(), lng: e.latLng.lng()},
    map: map
    }); // var marker
      questionWindow.open(map, marker);
      infoWindow.close();

 //ADD PINDROP OVERLAY 
      $("#pinDrop-window > #fireBase-yes").on("click", function(){
       userLocation = {lat: e.latLng.lat(), lng: e.latLng.lng()};
       geocodeThis();
        fadeThisOut($("#pinDrop-window"));
        fadeThisIn($("#form-start-overlay"));
        questionWindow.close();
      });
      $("#pinDrop-window > #fireBase-no").on("click", function(){
        questionWindow.close();
        marker.setVisible(false);
      });
    }); //map.addListener

var infoWindow = new google.maps.InfoWindow();


//DROP A MARKER WHEN MAP IS CLICKED 
  firebaseRef.on("child_added", function(snapshot, prevChildKey) {
    // Get latitude and longitude from the cloud.
    var eventObject = snapshot.val();
    
    // Create a google.maps.LatLng object for the position of the marker.
    var latLng = new google.maps.LatLng(eventObject.location.lat, eventObject.location.lng);

    // Place a marker at that location.
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: eventObject.user_gender
    });

  //info box when you click a pin
// console.log(infoWindow);
// TODO: TAKE OUT CALL BACK FUNCTION AND PUT INSIDE A CLICK HANDLER FUNCTION!
    google.maps.event.addListener(marker, 'click', function() {
      // infoWindow.close();
      infoWindow.setContent(
       '<div id="infoContent">'+
       '<h3>' + ' ' +
       '</h3>' +
       '<p>'+ eventObject.event_address + "," + eventObject.user_gender + ' , '+ 
       eventObject.user_age +' , '+ 
       eventObject.user_page_comment+' , '+
       eventObject.time_period + ' , '+ 
       eventObject.num_of_attackers + ' , ' + eventObject.attacker_gender + 
      ' , ' + eventObject.attacker_relationship + ' , ' + 
      eventObject.school_campus + ' , ' + eventObject.reported + ',' +
      eventObject.circumstances_page2_comment + ','+ eventObject.last_page_comment +
        '</p>'+
      '</div>'
      );
      infoWindow.open(map, marker);
      questionWindow.close();
    }); // addListender(marker)
  }); //firebase.on function
} //initAutocomplete()
