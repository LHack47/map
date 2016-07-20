$(document).ready(function(){

  // $("#hamburger-overlay").hide();
  $(".form-overlay").hide();
  $(".form-comments").hide();
  $(".elements").hide();
  $("#homePage-overlay").show();
  // $("#dateSpecificity").show();


/* HAMBURGER OVERLAY   HAMBURGER OVERLAY */
  $(".glyphicon-menu-hamburger").on("click", function(){
    fadeThisIn($("#hamburger-overlay"));
    fadeThisOut($(".elements"));
  });

  $("#hamburger-overlay").on("click", function(){
    fadeThisOut($("#hamburger-overlay"));
    fadeThisIn($(".seeMap-Elements"));
  });
 // homePage-overlay
  $("#seeMap").on("click", function(){
    fadeThisOut($("#homePage-overlay"));
    fadeThisIn($(".seeMap-Elements"));
    // fadeThisIn($("#seePrompt"));
  });

  $("#addEvent").on("click", function(){
    fadeThisOut($("#homePage-overlay"));
    fadeThisIn($("#locationForm"));
  });

  $("#locationForm > .formControls > .exitBtn").on("click", function(){
    fadeThisOut($("#locationForm"));
    fadeThisIn($("#homePage-overlay"));
    console.log("it works!");
  });



/* USER DENYS TO ADD MORE DETAILS */
  $("#deny").on("click", function(){
    fadeThisOut($("#form-start-overlay"));
    fadeThisIn($("#form-thankYou"));
  });   

/* USER ACCEPTS TO ADD MORE DETAILS*/
  $("#accept").on("click", function(){
   fadeThisIn($("#userGender"));
   fadeThisOut($("#form-start-overlay"))
  });

/* USER INFO GLYPHICON CONTROL BUTTONS ***************************************************/
     $(".navyBtn").click(function(){
      $("#locationForm").fadeOut("slow");
      $(".addAssault-Elements").show();
      userObject.locationSpec = $(this).val();
    });
 
  $(".answerBtn").click(function(){
   currentPage = $(this).parent();
   nextPage = $(this).parent().next();
   currentPage.fadeOut("slow");
   nextPage.fadeIn("slow");
   userKey = $(this).parent().data("value");
   userObject[userKey] = $(this).val();

 console.log(userObject);
 });



  $(".userInfo-controls > .glyphicon-arrow-left").on("click", function(){
    fadeThisOut($("#form-userInfo"));
    fadeThisIn($("#form-start-overlay"));
  });

  $(".userInfo-controls > .glyphicon-floppy-saved").on("click", function(){
    fadeThisOut($("#form-userInfo"));
    fadeThisIn($("#form-ThankYou"));
    userObject.userGender = $("#userGender option:selected").val();
     userObject.userAge = $("#userAge option:selected").val();
     userObject.userComment = $("#user-comment-box").val();
  });  

  $(".userInfo-controls > .glyphicon-comment").on("click", function(){
    fadeThisIn($('#user-comments'));
      $("#user-comments > .comment-buttons > #comment-exit").on("click", function(){
        fadeThisOut($("#user-comments"));
      });
      $("#user-comments > .comment-buttons > #comment-save").on("click", function(){
        fadeThisOut($("#user-comments"));
      });
  }); 

  $(".userInfo-controls > .glyphicon-arrow-right").on("click", function(){
    fadeThisOut($("#form-userInfo"));
    fadeThisIn($("#form-attackerInfo"));
    userObject.userGender = $("#userGender option:selected").val();
     userObject.userAge = $("#userAge option:selected").val();
     userObject.userComment = $("#user-comment-box").val();
  });

/* ATTACKER INFO GLYPHICONS CONTROL BUTTONS ************************************************************************************** */  
  $(".attackerInfo-controls > .glyphicon-arrow-left").on("click", function(){
    fadeThisOut($("#form-attackerInfo"));
    fadeThisIn($("#form-userInfo"));
  });

  $(".attackerInfo-controls > .glyphicon-floppy-saved").on("click", function(){
    fadeThisOut($("#form-attackerInfo"));
    fadeThisIn($("#form-thankYou"));
      userObject.attackerGender = $("#attackerGender option:selected").val();
      userObject.attackedBy = $("#attackedBy option:selected").val();
      userObject.attackerRelationship = $("#attackerRelationship option:selected").val();
      userObject.attackerComment = $("#attacker-comment-box").val();
  }); 

  $(".attackerInfo-controls > .glyphicon-comment").on("click", function(){
    fadeThisIn($("#attacker-comments"));
      $("#attacker-comments > .comment-buttons > #comment-exit").on("click", function(){
        fadeThisOut($("#attacker-comments"));
      });
       $("#attacker-comments > .comment-buttons > #comment-save").on("click", function(){
        fadeThisOut($("#attacker-comments"));
      });
  }); 

  $(".attackerInfo-controls > .glyphicon-arrow-right").on("click", function(){
    fadeThisOut($("#form-attackerInfo"));
    fadeThisIn($("#form-circumstances"));
      userObject.attackerGender = $("#attackerGender option:selected").val();
      userObject.attackedBy = $("#attackedBy option:selected").val();
      userObject.attackerRelationship = $("#attackerRelationship option:selected").val();
      userObject.attackerComment = $("#attacker-comment-box").val();
  });
  /* CIRCUMSTANCES GLYPHICON CONTROL BUTTONS
  ************************************************************************************** */
    $(".circumstances-controls > .glyphicon-arrow-left").on("click", function(){
    fadeThisOut($("#form-circumstances"));
    fadeThisIn($("#form-attackerInfo"));
  });

  $(".circumstances-controls > .glyphicon-floppy-saved").on("click", function(){
    fadeThisOut($("#form-circumstances"));
    fadeThisIn($("#form-thankYou"));
    userObject.multipleAssaults = $("#multipleAssaults option:selected").val();
    userObject.dateStart = $("#dateStart").val();
    userObject.dateEnd = $("#dateEnd").val();
    userObject.circumstancesComment = $("#circumstances-comment-box").val();
  }); 

  $(".circumstances-controls > .glyphicon-comment").on("click", function(){
    fadeThisIn($("#circumstances-comments"));
     
      $("#circumstances-comments > .comment-buttons > #comment-exit").on("click", function(){
        fadeThisOut($("#circumstances-comments"));
      });
       $("#circumstances-comments > .comment-buttons > #comment-save").on("click", function(){
        fadeThisOut($("#circumstances-comments"));
      });
  });

  $(".circumstances-controls > .glyphicon-arrow-right").on("click", function(){
    fadeThisOut($("#form-circumstances"));
    fadeThisIn($("#form-circumstances-2"));
    userObject.multipleAssaults = $("#multipleAssaults option:selected").val();
    userObject.dateStart = $("#dateStart").val();
    userObject.dateEnd = $("#dateEnd").val();
    userObject.circumstancesComment = $("#circumstances-comment-box").val();
  });

/* FORM-CIRCUMSTANCES-2 GLYPHICON BUTTONS ******************************************** */
  $(".circumstances-2-controls > .glyphicon-arrow-left").on("click", function(){
    fadeThisOut($("#form-circumstances-2"));
    fadeThisIn($("#form-circumstances"));
  });

  $(".circumstances-2-controls > .glyphicon-floppy-saved").on("click", function(){
    fadeThisOut($("#form-circumstances-2"));
    fadeThisIn($("#form-ThankYou"));
    userObject.circumstances2Comment = $("#circumstances2-comment-box").val();    
     userObject.schoolCampus = $("#schoolCampus option:selected").val();
     userObject.reported = $("#reported option:selected").val();
  }); 

  $(".circumstances-2-controls > .glyphicon-comment").on("click", function(){
    fadeThisIn($("#circumstances2-comments"));
      $("#circumstances2-comments > .comment-buttons > #comment-exit").on("click", function(){
       fadeThisOut($("#circumstances2-comments"));
      });
      $("#circumstances2-comments > .comment-buttons > #comment-save").on("click", function(){
        fadeThisOut($("#circumstances2-comments"));
      });
   });

  $(".circumstances-2-controls > .glyphicon-arrow-right").on("click", function(){
    fadeThisOut($("#form-circumstances-2"));
    fadeThisIn($("#form-end"));
    userObject.circumstances2Comment = $("#circumstances2-comment-box").val();
     userObject.schoolCampus = $("#schoolCampus option:selected").val();
     userObject.reported = $("#reported option:selected").val();
  });

/* FORM END PAGE ********************************************************************* */
  $("#form-end > .btn-group-lg > .end-comment").on("click", function(){
    fadeThisIn($("#last-comments"));
      $("#last-comments > .comment-buttons > #comment-exit").on("click", function(){
        fadeThisOut($("#last-comments"));
      });
       $("#last-comments > .comment-buttons > #comment-save").on("click", function(){
        fadeThisOut($("#last-comments"));
        userObject.lastComments = $("#last-comment-box").val();
      });
   });  

  $("#form-end > .btn-group-lg > .end-restart").on("click", function(){
    fadeThisOut($("#form-end"));
    fadeThisIn($("#form-userInfo"));
  });

  $("#form-end > .btn-group-lg > .end-submit").on("click", function(){
    fadeThisOut($("#form-end"));
    fadeThisIn($("#form-thankYou"));
  });  

  $(".form-end-controls > .glyphicon-arrow-left").on("click", function(){
    fadeThisOut($("#form-end"));
    fadeThisIn($("#form-circumstances-2"));
  });

      $("#form-thankYou").on("click", function(){
        fadeThisOut($("#form-thankYou"));
        fadeThisOut($("#homePage-overlay"));
        fadeThisIn($("#homePage-overlay-bar")); 

      });   
}); /* DOCUMENT.READY(FUNCTION() */


