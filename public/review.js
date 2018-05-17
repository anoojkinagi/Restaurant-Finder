//var xss = require("xss");
$(function () {
   // const xss = require("xss");
    var commenting = $('#comment');
   
  
    var $reviews = $('#addreviews');
   $('#addcomment').on('click',function(event){
       
   event.preventDefault();
   var commentval = $('#comment').val();
  
var ratingval = $('#rating').val();
    var idis = $('#form-group').attr('action');
   
    var commentobj = {
        
        comment : commentval,
        userin:   something,
        rating: ratingval
    }
     

    $.ajax({
      
        type: 'POST',
        url: idis,
        data: commentobj,
         success: function(newcomment){
             $('#comment').val('');
             $('#rating').val('1');
             //console.log(newcomment)
            
            //   $reviews.append('<div class="onereview">'+'<p>'+commentobj.userin+' gave this place '+commentobj.rating+'/5'+ '</p>'+'<p>'+commentobj.comment+'</p>'+'</div>');
            $reviews.append('<div class="onereview">'+'<p>'+commentobj.userin+' gave this place '+commentobj.rating+'/5'+ '</p>'+'<p>'+newcomment.comment+'</p>'+'</div>');
           }
        })

   })
   

});