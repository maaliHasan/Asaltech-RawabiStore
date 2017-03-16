
 $(document).ready(function(){
   $("#div_id--1488462198185").click(function(){
       $(".toggle__hero--1488462198185").toggle(function(){
       $('.linksBoxMobile--1488462198185').animate({height:'0px'},1000);
 //        $(".mobile_section").css("background-color","#444");
//        $(".mobile_section").css("color", "#fff");
       $(".mobile_section--1488462198185").children(".toggleArrow").toggleClass("rotate");
         
        },function(){
        $('.linksBoxMobile--1488462198185').animate({height:'100%'},1000);
//         $(".mobile_section").css("background-color","#f4f4f4");
//         $(".mobile_section").css("color", "#444");
        $(".mobile_section--1488462198185").children(".toggleArrow").toggleClass("rotate");
 
  });
  });
   
   
    $("#div_id--1488462281781").click(function(){
       $(".toggle__hero--1488462281781").toggle(function(){
       $('.linksBoxMobile--1488462281781').animate({height:'0px'},1000);
 //        $(".mobile_section").css("background-color","#444");
//        $(".mobile_section").css("color", "#fff");
       $(".mobile_section--1488462281781").children(".toggleArrow").toggleClass("rotate");
         
        },function(){
        $('.linksBoxMobile--1488462281781').animate({height:'100%'},1000);
//         $(".mobile_section").css("background-color","#f4f4f4");
//         $(".mobile_section").css("color", "#444");
        $(".mobile_section--1488462281781").children(".toggleArrow").toggleClass("rotate");
 
  });
  });
   
    $("#filter-btn").click(function(){
     $(".filter-menue").toggle(function(){
        $('.fmenue').animate({height:'0px'},1000);
        },function(){
       
        $('.fmenue').animate({height:'100%'},1000);
       
     });
   
  });
 
 });


