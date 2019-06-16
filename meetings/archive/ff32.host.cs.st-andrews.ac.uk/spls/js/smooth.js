$("a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;
   console.log(hash);

   var topOfH = 0;
   if(hash != '') {
     topOfH = $(hash).offset().top - 55
   }

   // animate
   $('html, body').animate({
       scrollTop: topOfH
     }, 600, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

