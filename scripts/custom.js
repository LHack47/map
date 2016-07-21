$(document).ready(function(){

  $("#hamburger-overlay").hide();
  $(".home-elements").hide();
  $(".form-overlay").hide();

/* HAMBURGER OVERLAY   HAMBURGER OVERLAY */
  $(".glyphicon-menu-hamburger").on("click", function(){
    fadeThisIn($("#hamburger-overlay"));
    fadeThisOut($(".home-elements"));
  });

  $("#hamburger-overlay").on("click", function(){
    fadeThisOut($("#hamburger-overlay"));
    fadeThisIn($(".home-elements"));
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
    $(".homepage-elements").hide();
    $(".mapPrompts").hide();
  });

  $("#locationForm > .formControls > .exitBtn").on("click", function(){
    fadeThisOut($("#locationForm"));
    fadeThisIn($("#homepage-overlay"));
  });

/* USER DENYS TO ADD MORE DETAILS */
  $("#deny").on("click", function(){
    fadeThisOut($("#form-start-overlay"));
    fadeThisIn($("#form-thankYou"));
  });   

/* USER ACCEPTS TO ADD MORE DETAILS*/
  $("#accept").on("click", function(){
   fadeThisOut($("#form-start-overlay"));
   fadeThisIn($("#userGender"));
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
     console.log(userObject);
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
	next_fs.show(); 
    });

    $(".exitBtn").on("click", function() {

    })

});