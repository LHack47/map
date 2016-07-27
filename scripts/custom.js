$(document).ready(function(){

  // $("#hamburger-overlay").hide();
  $(".form-overlay").hide();
  $(".form-comments").hide();
  $(".elements").hide();
  $("#transparent-overlay").hide();
  $("#homePage-overlay").show();
  // $("#dateRange1").show();
  



/* HAMBURGER OVERLAY   HAMBURGER OVERLAY */
  $(".glyphicon-menu-hamburger").on("click", function(){
    fadeThisIn($("#hamburger-overlay"));
    fadeThisOut($(".elements"));
  });

  $("#hamburger-overlay").click(function(){
    fadeThisOut($("#hamburger-overlay"));
    fadeThisIn($(".seeMap-Elements"));
  });

  $("#hamburgerAddBtn").click(function(){
    // fadeThisOut($("#hamburger-overlay"));
    fadeThisOut($(".seeMap-Elements"));
    fadeThisIn($("#locationForm"));
  });
 // homePage-overlay
  $("#seeMap").on("click", function(){
    fadeThisOut($("#homePage-overlay"));
    fadeThisIn($(".seeMap-Elements"));
    mapObject.addingPin = false;
  });

  $("#addEvent").on("click", function(){
    fadeThisOut($("#homePage-overlay"));
    fadeThisIn($("#locationForm"));
  });

  $("#mapAddBtn").on("click", function(){
    fadeThisOut($(".seeMap-Elements"));
    fadeThisIn($("#locationForm"));
  });

  $("#exitLocationspec").on("click", function(){
    fadeThisOut($("#locationForm"));
    fadeThisIn($("#homePage-overlay"));
  });



/* USER DENYS TO ADD MORE DETAILS */
  $("#deny").on("click", function(){
    fadeThisOut($("#confirmStart"));
    fadeThisIn($("#thankYou"));
  });   

/* USER ACCEPTS TO ADD MORE DETAILS*/
  $("#accept").on("click", function(){
   fadeThisIn($("#userGender"));
   fadeThisOut($("#confirmStart"))
  });

/* ANSWER BUTTONS**********************/

  $(".navyBtn").click(function(){
    $("#locationForm").fadeOut(1000);
    $(".addAssault-Elements").show();
    userObject.locationSpec = $(this).val();
    mapObject.addingPin = true;
  });
 
  $(".answerBtn").click(function(){
   currentPage = $(this).parent();
   nextPage = $(this).parent().next();
   currentPage.fadeOut(1500);
   nextPage.fadeIn(1500);
   userKey = $(this).parent().data("value");
   userObject[userKey] = $(this).val();
 });

/* FLOW CONTROL BUTTONS*****************/
 $(".backBtn").click(function(){
   currentPage = $(this).parent().parent();
   previousPage = $(this).parent().parent().prev();
   currentPage.fadeOut("slow");
   previousPage.fadeIn("slow");
 });

 $(".exitBtn").click(function(){
  //  currentPage = $(this).parent().parent();
  //  currentPage.fadeOut("slow");
   fadeThisIn($("#confirmExit"));
 });

  $(".skipBtn").click(function(){
    currentPage = $(this).parent().parent();
    nextPage = $(this).parent().parent().next();
    currentPage.fadeOut("slow");
    nextPage.fadeIn("slow");
    userKey = $(this).parent().data("value");
    userObject[userKey] = "Not reported";
  });

  $("#exitLocationSpec").click(function(){
    fadeThisOut($("#locationForm"));
    fadeThisIn($("#homePage-overlay"));
  });
 /* END CONTROL BUTTONS************* */

/* DATE PAGES ********************** */
  $("#dateSpec-skipBtn").click(function(){
    currentPage = $(this).parent().parent();
    nextPage = $("#multipleAssaults");
    currentPage.fadeOut("slow");
    nextPage.fadeIn("slow");
    userKey = $(this).parent().data("value");
    userObject[userKey] = "Not reported";
  });


  $("#dateBtn1").click(function(){
   currentPage = $(this).parent();
   nextPage = $("#dateRange1");
   currentPage.fadeOut(1500);
   nextPage.fadeIn(1500);
   userKey = $(this).parent().data("value");
   userObject[userKey] = $(this).val();
 });

 $("#dateBtn2").click(function(){
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
 /* *************************** */
  $("#multipleA-backBtn").click(function(){
   currentPage = $(this).parent().parent();
   previousPage = $("#dateSpecificity");
   currentPage.fadeOut(1500);
   previousPage.fadeIn(1500);
 });

 /* SCHOOL CAMPUS CONTROL BUTTONS */
  $("#notCampusBtn").click(function(){
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
   userKey = $(this).parent().data("value");
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

/* CONFIRM SUBMIT ****************** */
  $("#submit").click(function(){
   currentPage = $(this).parent();
   nextPage = $("#thankYou");
   currentPage.fadeOut(1500);
   nextPage.fadeIn(1500);
   userKey = $(this).parent().data("value");
   userObject[userKey] = $("#lastComment").val();

   console.log(userObject);
  });

  $("#restart").click(function(){
   currentPage = $(this).parent();
   nextPage = $("#homePage-overlay");
   currentPage.fadeOut(1500);
   nextPage.fadeIn(1500);
   $("#transparent-overlay").hide();
  });

  $("#submitBackBtn").click(function(){
   currentPage = $(this).parent().parent();
   previousPage = $("#reported");
   currentPage.fadeOut(1500);
   previousPage.fadeIn(1500);
  });

  /* CONFRIM EXIT PAGE ************* */
  $("#exitSubmit").click(function(){
   currentPage = $(this).parent();
   $(".form-overlay").fadeOut(1500);
   nextPage = $("#confirmSubmit");
   currentPage.fadeOut(1500);
   nextPage.fadeIn(1500);
  });

  $("#exitDelete").click(function(){
    // currentPage = $(this).parent();
    // currentPage.fadeOut(1500);
    $(".form-overlay").fadeOut(1500);
    $(".seeMap-Elements").fadeIn(1500);
    $("#transparent-overlay").hide();
    mapObject.addingPin = false;
  });

  $("#confirmExit-backBtn").click(function(){
    currentPage = $(this).parent().parent();
    currentPage.fadeOut(1500);
  });


  $("#exitThanks").click(function(){
    $(".form-overlay").fadeOut(1300);
    $(".seeMap-Elements").fadeIn(1500);
    $("#transparent-overlay").hide();
    mapObject.addingPin = false;
  });
}); /* DOCUMENT.READY(FUNCTION() */