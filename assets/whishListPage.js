
 $(document).ready(function(){
    console.log("heay");
    
     var objs=  JSON.parse(localStorage.getItem('heartList')) ||{};
$('.fa-heart').on('click', function(){
  var IdValue=[];
  var imgSrc=  $(this).attr("id");
  console.log(imgSrc);
   
  //delete objs.imgSrc;
  delete objs[imgSrc]
  console.log(objs );
  
  //console.log(obj2);
  		 localStorage.setItem("heartList", JSON.stringify(objs));
         location.reload();
   
});
 });
 