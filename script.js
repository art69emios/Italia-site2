$(document).ready(function(){
   $('.six__title2').click(function(event){
      $(this).toggleClass('active').next().slideToggle(200)
   })
})