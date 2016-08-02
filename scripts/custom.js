$(document).ready(function(){

  $("#hamburger-overlay").hide();
  $(".home-elements").hide();
  $(".form-overlay").hide();
  $("#yesCampus").hide();

/* HAMBURGER OVERLAY */
  $(".glyphicon-menu-hamburger").on("click", function(){
    fadeThisIn($("#hamburger-overlay"));
    fadeThisOut($(".home-elements"));
    fadeThisOut($(".mapPrompts"));
  });

  $("#hamburgerAddEvent").on("click", function(){
    fadeThisOut($("#hamburger-overlay"));
    fadeThisIn($("#locationForm"));
    $(".home-elements").hide();
    $(".mapPrompts").hide();
    $("#pac-input").hide();
  });

  $("#hamburgerReturn").on("click", function(){
    fadeThisOut($("#hamburger-overlay"));
    fadeThisIn($(".home-elements"));
    fadeThisIn($("#seePrompt"));
  });

// Homepage Overlay
  $("#seeMap").on("click", function(){
    fadeThisOut($("#homepage-overlay"));
    fadeThisIn($(".home-elements"));
    fadeThisIn($("#seePrompt"));
    mapObject.seeMap = true;
  });

  $("#addEvent").on("click", function(){
    fadeThisOut($("#homepage-overlay"));
    fadeThisIn($("#locationForm"));
    $(".home-elements").hide();
    $(".mapPrompts").hide();
  });

  $(".exitLocationBtn").on("click", function(){
    fadeThisOut($("#locationForm"));
    fadeThisIn($(".home-elements"));
    fadeThisIn($("#seePrompt"));
  });

/* USER DENYS TO ADD MORE DETAILS */
  $("#deny").on("click", function(){
    fadeThisOut($("#form-start-overlay"));
    fadeThisIn($("#confirmExit"));
  });   

/* USER ACCEPTS TO ADD MORE DETAILS*/
  $("#accept").on("click", function(){
   fadeThisOut($("#form-start-overlay"));
   fadeThisIn($("#userGender"));
   $("#pac-input").hide();
  });

  $(".navyBtn").on("click", function(){
      $("#locationForm").fadeOut("slow");
      $(".home-elements").show();
      $("#addPrompt").show();
      mapObject.seeMap = false;
      userObject.locationSpecificity = $(this).val();
  })


// Form controls
  $(".answerBtn").on("click", function() {
     current_fs = $(this).parent();
	   next_fs = $(this).parent().next();
     current_fs.fadeOut("slow");
	   next_fs.fadeIn("slow"); 
     userKey = $(this).parent().data("value");
     userObject[userKey] = $(this).val();
    //  console.log(userObject);
  });

  $(".answerDateBtn").on("click", function() {
     current_fs = $(this).parent();
	   next_fs = $(this).parent().next();
     current_fs.fadeOut("slow");
	   next_fs.fadeIn("slow"); 
     userKey = $(this).parent().data("value");
     userObject[userKey] = $("#dateStart").val() + " - " + $("#dateEnd").val();
    //  console.log(userObject);
  });

  $(".subfieldBtn").on("click", function() {
     $("#yesCampus").show();
     $("#schoolCampus input").hide(); 
    //  $("#schoolCampus p").hide();
  });

  $(".backBtn").on("click", function() {
      current_fs = $(this).parent();
	    previous_fs = $(this).parent().prev();
      current_fs.hide();
	    previous_fs.show(); 
  });

  $(".skipBtn").on("click", function() {
    current_fs = $(this).parent();
	  next_fs = $(this).parent().next();
    current_fs.fadeOut("slow");
	  next_fs.fadeIn("slow"); 
    userKey = $(this).parent().data("value");
    userObject[userKey] = "no-record";
  });

//Exit Buttons
  $(".exitBtn").on("click", function() {
    $("#confirmExit").show();
  });

  $("#confirmExit > #exitYes").on("click", function() {
      $(".form-overlay").fadeOut();
      $("#seePrompt").fadeIn();
      $("#pac-input").fadeIn();
  });

  $("#confirmExit > #exitNo").on("click", function() {
      $("#confirmExit").hide();
  });

  $("#confirmExit > #exitYesDelete").on("click", function() {
      document.getElementById("resetForm").reset();
      $(".form-overlay").fadeOut();
      $("#seePrompt").fadeIn();
      $("#pac-input").fadeIn();
  });
    
// Submit
      
  $(".end-submit").on("click", function() {
    $("#confirmSubmit").hide();
    $("#form-thankYou").show();
    mapObject.seeMap = true;
  })

  $("#end-return").on("click", function(){
    fadeThisOut($(".form-overlay"));
    fadeThisOut($("#homepage-overlay"));
    fadeThisIn($(".home-elements"));
    fadeThisIn($("#seePrompt"));
    mapObject.seeMap = true;
  });

//Subforms
  
  $("#campus-yes").on("click", function() {
    $("#yesCampus").fadeIn("slow");
  });

});