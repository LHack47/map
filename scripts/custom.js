$(document).ready(function(){

  // $("#hamburger-overlay").hide();
  $(".form-overlay").hide();
  $(".form-comments").hide();
  $(".elements").hide();
  $("#homePage-overlay").show();

/* HAMBURGER OVERLAY   HAMBURGER OVERLAY */
  $(".glyphicon-menu-hamburger").on("click", function(){
    fadeThisIn($("#hamburger-overlay"));
    fadeThisOut($(".elements"));
  });

  $("#exitHamburger").click(function(){
    fadeThisOut($("#hamburger-overlay"));
    fadeThisIn($(".seeMap-Elements"));
  });

  $("#hamburgerAddBtn").click(function(){
    fadeThisOut($("#hamburger-overlay"));
    fadeThisOut($(".seeMap-Elements"));
    fadeThisIn($("#locationForm"));
  });
 // homePage-overlay
  $("#seeMap").on("click", function(){
    fadeThisOut($("#homePage-overlay"));
    fadeThisIn($(".seeMap-Elements"));
    // $("#seePrompt").delay(12000).fadeOut(500);
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
   fadeThisIn($("#confirmExit"));
 });

  $(".skipBtn").click(function(){
    currentPage = $(this).parent().parent();
    nextPage = $(this).parent().parent().next();
    currentPage.fadeOut("slow");
    nextPage.fadeIn("slow");
  });

  $("#exitLocationSpec").click(function(){
    fadeThisOut($("#locationForm"));
    fadeThisIn($("#homePage-overlay"));
  });

  $("#exitMap").click(function(){
      $(".elements").hide();
      fadeThisIn($("#homePage-overlay"));
  });
 /* END CONTROL BUTTONS************* */

/* DATE PAGES ********************** */
  $("#dateSpec-skipBtn").click(function(){
    currentPage = $(this).parent().parent();
    nextPage = $("#multipleAssaults");
    currentPage.fadeOut("slow");
    nextPage.fadeIn("slow");
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
   userKey = $(this).parent().data("value");
   userObject[userKey] = $("#campusC-box").val();
  });

  $("#campus-skipBtn").click(function(){
    currentPage = $(this).parent().parent();
    nextPage = $("#reported");
    currentPage.fadeOut("slow");
    nextPage.fadeIn("slow");
  });

/* REPORTED CONTROL BUTTONS ******* */
  $("#notReportedBtn").click(function(){
   currentPage = $(this).parent();
   nextPage = $("#confirmSubmit");
  //  currentPage.fadeOut(1500);
   nextPage.fadeIn(1500);
  }); 

  $("#reportedBackBtn").click(function(){
   currentPage = $(this).parent().parent();
   previousPage = $("#schoolCampus");
   currentPage.fadeOut(1500);
   previousPage.fadeIn(1500);
  });

  $("#reportSkipBtn").click(function(){
    // currentPage = $(this).parent().parent();
    nextPage = $("#confirmSubmit");
    // currentPage.fadeOut("slow");
    nextPage.fadeIn("slow");
  });

  $(".prosecutedBtn").click(function(){
  //  currentPage = $(this).parent();
   nextPage = $(this).parent().next();
  //  currentPage.fadeOut(1500);
   nextPage.fadeIn(1500);
   userKey = $(this).parent().data("value");
   userObject[userKey] = $(this).val();
 });

/* CONFIRM SUBMIT ****************** */
  $("#submit").click(function(){
   currentPage = $(this).parent();
   nextPage = $("#thankYou");
   currentPage.fadeOut(1500);
   nextPage.fadeIn(1500);
  //  console.log(userObject);
  });

  $("#restart").click(function(){
    $(".form-overlay").fadeOut(1300);
  //  currentPage = $(this).parent();
   nextPage = $("#homePage-overlay");
  //  currentPage.fadeOut(1500);
   nextPage.fadeIn(1500);
  });

  $("#submitBackBtn").click(function(){
   currentPage = $(this).parent().parent();
   currentPage.fadeOut(1500);
  });

  /* CONFRIM EXIT PAGE ************* */
  $("#exitSubmit").click(function(){
   nextPage = $("#confirmSubmit");
   nextPage.fadeIn(1500);
  });

  $("#exitDelete").click(function(){
    $(".form-overlay").fadeOut("slow");
    $(".seeMap-Elements").fadeIn(1500);
    mapObject.addingPin = false;
  });

  $("#confirmExit-backBtn").click(function(){
    currentPage = $(this).parent().parent();
    currentPage.fadeOut(1500);
  });


  $("#exitThanks").click(function(){
    $(".form-overlay").fadeOut(1300);
    $(".seeMap-Elements").fadeIn(1500);
    mapObject.addingPin = false;
  });
}); /* DOCUMENT.READY(FUNCTION() */