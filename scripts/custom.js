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

// Homepage
  $("#addEventHomepage").on("click", function(){
    fadeThisIn($("#locationForm"));
    $(".home-elements").hide();
    $(".mapPrompts").hide();
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

  $(".subfieldBtn").on("click", function() {
     $("#yesCampus").show();
     $("#schoolCampus input").hide(); 
    //  $("#schoolCampus p").hide();
  });

  $(".backBtn").on("click", function() {
      current_fs = $(this).parent().parent();
	    previous_fs = $(this).parent().parent().prev();
      current_fs.hide();
	    previous_fs.show(); 
  });

  $(".skipBtn").on("click", function() {
    current_fs = $(this).parent().parent();
	  next_fs = $(this).parent().parent().next();
    current_fs.fadeOut("slow");
	  next_fs.fadeIn("slow"); 
    userKey = $(this).parent().parent().data("value");
    userObject[userKey] = "Not recorded";
  });

//Subfields
/* DATE PAGES ********************** */
  $("#dateSpec-skipBtn").click(function(){
    currentPage = $(this).parent().parent();
    nextPage = $("#multipleAssaults");
    currentPage.fadeOut("slow");
    nextPage.fadeIn("slow");
    userKey = $(this).parent().data("value");
    userObject[userKey] = "Not reported";
  });

  $(".dateBtn1").click(function(){
   currentPage = $(this).parent();
   nextPage = $("#dateRange1");
   currentPage.fadeOut(1500);
   nextPage.fadeIn(1500);
   userKey = $(this).parent().data("value");
   userObject[userKey] = $(this).val();
 });

 $(".dateBtn2").click(function(){
   currentPage = $(this).parent();
   nextPage = $("#dateRange2");
   currentPage.fadeOut(1500);
   nextPage.fadeIn(1500);
   userKey = $(this).parent().data("value");
   userObject[userKey] = $(this).val();
 });

  $(".noDateBtn").click(function(){
   currentPage = $(this).parent();
   nextPage = $("#multipleAssaults");
   currentPage.fadeOut(1500);
   nextPage.fadeIn(1500);
 });

  $("#saveDate1").click(function(){
   currentPage = $(this).parent();
   nextPage = $("#multipleAssaults");
   currentPage.fadeOut(1500);
   nextPage.fadeIn(1500);
   userKey = $(this).parent().data("value");
   userObject[userKey] = $("#dateStart1").val() + " - " + $("#dateEnd1").val();
  });

 $("#date1-skipBtn").click(function(){
    currentPage = $(this).parent().parent();
    nextPage = $("#multipleAssaults");
    currentPage.fadeOut("slow");
    nextPage.fadeIn("slow");
    userKey = $(this).parent().data("value");
    userObject[userKey] = "Not reported";
  });


  $("#saveDate2").click(function(){
   currentPage = $(this).parent();
   nextPage = $("#multipleAssaults");
   currentPage.fadeOut(1500);
   nextPage.fadeIn(1500);
   userKey = $(this).parent().data("value");
   userObject[userKey] = $("#dateStart2").val() + " - " + $("#dateEnd2").val();
 });

$("#date2-backBtn").click(function(){
   currentPage = $(this).parent().parent();
   previousPage = $("#dateSpecificity");
   currentPage.fadeOut(1500);
   previousPage.fadeIn(1500);
 });

/* SCHOOL CAMPUS CONTROL BUTTONS */
  $(".notCampusBtn").click(function(){
    currentPage = $(this).parent();
    nextPage = $("#reported");
    currentPage.fadeOut(1500);
    nextPage.fadeIn(1500);
    userKey = $(this).parent().data("value");
    userObject[userKey] = $(this).val();
  });

  $("#saveCampusBtn").click(function(){
   currentPage = $(this).parent();
   nextPage = $(this).parent().next();
   currentPage.fadeOut(1500);
   nextPage.fadeIn(1500);
   userKey = $(this).parent().parent().data("value");
   userObject[userKey] = $("#campusC-box").val();
  });

  $("#campus-skipBtn").click(function(){
    currentPage = $(this).parent().parent();
    nextPage = $("#reported");
    currentPage.fadeOut("slow");
    nextPage.fadeIn("slow");
    userKey = $(this).parent().data("value");
    userObject[userKey] = "Not reported";
  });

/* REPORTED CONTROL BUTTONS ******* */
  $("#notReportedBtn").click(function(){
   currentPage = $(this).parent();
   nextPage = $("#confirmSubmit");
   currentPage.fadeOut(1500);
   nextPage.fadeIn(1500);
  }); 

  $("#reportedBackBtn").click(function(){
   currentPage = $(this).parent().parent();
   previousPage = $("#schoolCampus");
   currentPage.fadeOut(1500);
   previousPage.fadeIn(1500);
  });

//Exit Buttons
  $(".exitBtn").on("click", function() {
    $("#confirmExit").show();
  });

  $("#confirmExit > #exitYes").on("click", function() {
    $(".form-overlay").fadeOut();
    $("#seePrompt").fadeIn();
    $("#pac-input").fadeIn();
    fadeThisIn($(".home-elements"));
  });

  $("#confirmExit > #exitNo").on("click", function() {
    $("#confirmExit").hide();
  });

  $("#confirmExit > #exitYesDelete").on("click", function() {
    document.getElementById("resetForm").reset();
    $(".form-overlay").fadeOut();
    $("#seePrompt").fadeIn();
    $("#pac-input").fadeIn();
    fadeThisIn($(".home-elements"));
  });
    
// Submit
      
  $(".end-submit").on("click", function() {
    $("#confirmSubmit").hide();
    $("#form-thankYou").show();
    mapObject.seeMap = true;
  })

  $("#end-return").on("click", function(){
    $(".form-overlay").hide();
    fadeThisIn($(".home-elements"));
    fadeThisIn($("#seePrompt"));
    mapObject.seeMap = true;
  });

});