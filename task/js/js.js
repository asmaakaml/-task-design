$(function () {

//   start tooltip
   $('#myTooltip').tooltip();  
   $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
   });
}
//    end tooltip  
    // Select all elements with data-toggle="tooltips" in the document
  $(function () {
$('[data-toggle="tooltip"]').tooltip(); }

$(function () {
//start scrolltop
  var scrolltop=$('.scroll-top');      
   $(window).scroll(function(){
       if($(this).scrollTop()>=700){
         scrolltop.show();   
       }
       else{
         scrolltop.hide();    
       }
   });         
   scrolltop.click(function(){
       $('html,body').animate({ scrollTop : 0 }, 600);
   });}
//end scrolltop
     
    