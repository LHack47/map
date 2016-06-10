$(document).ready(function(){

  $("#homePage-overlay-bar").hide();
  $("#hamburger-overlay").hide();
  $(".form-overlay").hide();
  $(".dropdown-toggle").dropdown();

  $("#dateRange").daterangepicker();
  // $("#form-circumstances").show();
    /* **VALUES***************************** */

// homePage-overlay
   $("#homePage-overlay-bar").on("click", function(){
    $("#homePage-overlay-bar").hide();
    $("#homePage-overlay").slideToggle("slow");
  });
/* END OF HOMEPAGE OVERLAY */

/* HAMBURGER OVERLAY   HAMBURGER OVERLAY */
  $(".glyphicon-menu-hamburger").on("click", function(){
    $("#homePage-Elements").fadeOut("fast");
    $("#pac-input").fadeOut("fast");
    $("#homePage-overlay").fadeOut("fast")
    $("#homePage-overlay-bar").fadeOut("fast");
    $("#hamburger-overlay").show("slow");
  });

  $("#hamburger-overlay").on("click", function(){
    $("#hamburger-overlay").fadeOut("fast");
    $("#homePage-Elements").fadeIn("fast");
    $("#pac-input").fadeIn("fast"); 
    $("#homePage-overlay").fadeIn("fast");   
  });

  $("#homePage-overlay > .glyphicon-chevron-down , #homePage-overlay > #addEvent").on("click", function(){
    $("#transparent-overlay").hide();
    $("#homePage-overlay").slideToggle("fast");
    $("#homePage-overlay-bar").show("slow");
  });

  $("#transparent-overlay").on("click", function(){
    $("#transparent-overlay").hide();
    $("#homePage-overlay").slideToggle("fast");
    $("#homePage-overlay-bar").show("slow");
  });

/* USER DENYS TO ADD MORE DETAILS */
  $("#deny").on("click", function(){
    $("#form-start-overlay").fadeOut("fast");
    $("#form-thankYou").fadeIn("fast");
  });   

/* USER ACCEPTS TO ADD MORE DETAILS*/
  $("#accept").on("click", function(){
   $("#form-start-overlay").fadeOut("fast");
   // $("#form-userInfo").fadeIn("slow");
   $("#form-guidance").fadeIn("slow");
  });

/* FORM-GUIDANCE BUTTON */
  $("#gotIt").on("click", function(){
    $("#form-guidance").fadeOut("slow");
    $("#form-userInfo").fadeIn("slow");
  });

/* USER INFO GLYPHICON CONTROL BUTTONS ***************************************************/
  $(".userInfo-controls > .glyphicon-arrow-left").on("click", function(){
    $("#form-userInfo").fadeOut("fast");
    $("#form-start-overlay").fadeIn("fast");
  });

  $(".userInfo-controls > .glyphicon-floppy-saved").on("click", function(){
    $("#form-userInfo").fadeOut("fast");
    $("#homePage-Elements").fadeIn("fast");
    $("#pac-input").fadeIn("fast");
    $("#homePage-overlay-bar").fadeIn("slow");
  });  

  $(".userInfo-controls > .glyphicon-comment").on("click", function(){
    $("#form-comments").fadeIn("slow");
    
      $("#form-comments > .comment-buttons > #comment-exit").on("click", function(){
        $("#form-comments").fadeOut("slow");
      });
      $("#form-comments > .comment-buttons > #comment-save").on("click", function(){
        $("#form-comments").fadeOut("slow");

  userComment = $("#comments").val();

         //userComment = $("#comments").val();
        // firebase.child({user_page_comment: userComment});
          //$("#comments").submit();
      });
  }); 

  $(".userInfo-controls > .glyphicon-arrow-right").on("click", function(){
    $("#form-userInfo").fadeOut("slow");
    $("#form-attackerInfo").fadeIn("slow");
    userGender = $("#userGender option:selected").val();
    userAge = $("#userAge option:selected").val();
  });


/* ATTACKER INFO GLYPHICONS CONTROL BUTTONS ************************************************************************************** */  
  $(".attackerInfo-controls > .glyphicon-arrow-left").on("click", function(){
    $("#form-attackerInfo").fadeOut("slow");
    $("#form-userInfo").fadeIn("slow");
  });

  $(".attackerInfo-controls > .glyphicon-floppy-saved").on("click", function(){
    $("#form-attackerInfo").fadeOut("fast");
    $("#homePage-Elements").fadeIn("fast");
    $("#pac-input").fadeIn("fast");
    $("#homePage-overlay-bar").fadeIn("slow");
  }); 

  $(".attackerInfo-controls > .glyphicon-comment").on("click", function(){
    $("#form-comments").fadeIn("slow");
      
      $("#form-comments > .comment-buttons > #comment-exit").on("click", function(){
        $("#form-comments").fadeOut("slow");
      });
       $("#form-comments > .comment-buttons > #comment-save").on("click", function(){
        $("#form-comments").fadeOut("slow");
         attackerComment = $("#comments").val();
         //firebase.update({attacker_page_comment: attackerComment});
          $("#comments").submit();
      });
  }); 

  $(".attackerInfo-controls > .glyphicon-arrow-right").on("click", function(){
    $("#form-attackerInfo").fadeOut("slow");
    $("#form-circumstances").fadeIn("slow");
    attackerGender = $("#attackerGender option:selected").val();
    attackedBy = $("#attackedBy option:selected").val();
    attackerRelationship = $("#attackerRelationship option:selected").val();
  });

  /* CIRCUMSTANCES GLYPHICON CONTROL BUTTONS
  ************************************************************************************** */
    $(".circumstances-controls > .glyphicon-arrow-left").on("click", function(){
    $("#form-circumstances").fadeOut("slow");
    $("#form-attackerInfo").fadeIn("slow");
  });

  $(".circumstances-controls > .glyphicon-floppy-saved").on("click", function(){
    $("#form-circumstances").fadeOut("fast");
    $("#homePage-Elements").fadeIn("fast");
    $("#pac-input").fadeIn("fast");
    $("#homePage-overlay-bar").fadeIn("slow");
  }); 

  $(".circumstances-controls > .glyphicon-comment").on("click", function(){
    $("#form-comments").fadeIn("slow");
     
      $("#form-comments > .comment-buttons > #comment-exit").on("click", function(){
        $("#form-comments").fadeOut("slow");
      });
       $("#form-comments > .comment-buttons > #comment-save").on("click", function(){
        $("#form-comments").fadeOut("slow");
         circumstancesComment = $("#comments").val();
         //firebase.update({circumstances_page_comment: circumstancesComment});
          $("#comments").submit();
      });
  });

  $(".circumstances-controls > .glyphicon-arrow-right").on("click", function(){
    $("#form-circumstances").fadeOut("slow");
    $("#form-circumstances-2").fadeIn("slow");
    date = document.getElementById("dateRange").value;
    multipleAssaults = $("#multipleAssaults option:selected").val();
  });

/* FORM-CIRCUMSTANCES-2 GLYPHICON BUTTONS ******************************************** */
  $(".circumstances-2-controls > .glyphicon-arrow-left").on("click", function(){
    $("#form-circumstances-2").fadeOut("slow");
    $("#form-circumstances").fadeIn("slow");
  });

  $(".circumstances-2-controls > .glyphicon-floppy-saved").on("click", function(){
    $("#form-circumstances-2").fadeOut("fast");
    $("#homePage-Elements").fadeIn("fast");
    $("#pac-input").fadeIn("fast");
    $("#homePage-overlay-bar").fadeIn("slow");
  }); 

  $(".circumstances-2-controls > .glyphicon-comment").on("click", function(){
    $("#form-comments").fadeIn("slow");
      
      $("#form-comments > .comment-buttons > #comment-exit").on("click", function(){
        $("#form-comments").fadeOut("slow");
      });
      $("#form-comments > .comment-buttons > #comment-save").on("click", function(){
        $("#form-comments").fadeOut("slow");
        circumstances2Comment = $("#comments").val();
        //firebase.update({circumstances_page2_comment: circumstances2Comment});
          $("#comments").submit();
      });
   });

  $(".circumstances-2-controls > .glyphicon-arrow-right").on("click", function(){
    $("#form-circumstances-2").fadeOut("slow");
    $("#form-end").fadeIn("slow");
    schoolCampus = $("#schoolCampus option:selected").val();
    reported = $("#reported option:selected").val();
  });

/* FORM END PAGE ********************************************************************* */
  $("#form-end > .btn-group-lg > .end-comment").on("click", function(){

    $("#form-comments").fadeIn("slow");
    
      $("#form-comments > .comment-buttons > #comment-exit").on("click", function(){
        $("#form-comments").fadeOut("slow");
      });
       $("#form-comments > .comment-buttons > #comment-save").on("click", function(){
        $("#form-comments").fadeOut("slow");
        lastComment = $("#comments").val();
        //firebase.update({last_page_comment: lastComment});
          $("#comments").submit();
      });
   });  

  $("#form-end > .btn-group-lg > .end-restart").on("click", function(){
    $("#form-end").fadeOut("fast");
    $("#form-userInfo").fadeIn("fast");
  });

  $("#form-end > .btn-group-lg > .end-submit").on("click", function(){
    $("#form-end").fadeOut("slow");
    $("#form-thankYou").fadeIn("slow");
  });  

  $(".form-end-controls > .glyphicon-arrow-left").on("click", function(){
    $("#form-end").fadeOut("slow");
    $("#form-circumstances-2").fadeIn("fast");
  });

      $("#form-thankYou").on("click", function(){
        $("#form-thankYou").fadeOut("slow");
        $("#homePage-Elements").fadeIn("fast");
        $("#pac-input").fadeIn("fast");
        $("#homePage-overlay").hide();
        $("#homePage-overlay-bar").fadeIn("slow");
        
      });   
     
}); /* DOCUMENT.READY(FUNCTION() */


