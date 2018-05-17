


/////////////////////////////////
const express = require("express");
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;
const xss = require("xss");
//var xss = require('xss');



// router.get("/:id", async (req, res) => {
//   try {
//    // res.send(req.params.id);
//     const user = await recipeData.getrecipeById(req.params.id);
//     res.json(user);
  
//   } catch (e) {
//     res.status(404).json({ message: e});
//   }
// });
var authUser;
var NodeGeocoder = require('node-geocoder');
 
var options = {
  provider: 'google',
 
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyBW868Z1gfMZA_pQjyDopOLvsxyN9YujO8', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};
//  var yeh;
 var geocoder = NodeGeocoder(options);


 router.get("/", async (req, res) => {
   var cook = req.cookies.AuthCookie;
  if( cook === undefined)
 {
    res.render("restaurant/login");
    
}
else
 {
    if(authUser!=undefined)
    { 
      res.redirect("/restaurantfilter");
    }
    else
    {
       res.clearCookie("AuthCookie");
       res.render("restaurant/login");
    }
}
});


router.get("/signup", async (req, res) => {
  res.render("restaurant/signup")
});


router.post("/login", async (req, res) => {
  var cook = req.cookies.AuthCookie;
  var fname = xss(req.body.fname);
  var lname = xss(req.body.lname);
  var username = xss(req.body.username);
  var pass = xss(req.body.password)
  var email = xss(req.body.email)
  var userinfo = await recipeData.adduser(fname,lname,username,email,pass);
  console.log(userinfo)
 if(userinfo == "DuplicateUser")
 {
   res.render("restaurant/signup",{"message":"Error: Username exists."})
 }
 else if(userinfo == "DuplicateEmail")
 {
   res.render("restaurant/signup",{"message":"Error: Email exists."})
 }
 else if(userinfo == "InvalidEmail")
 {
   res.render("restaurant/signup",{"message":"Error: Invalid email"})
 }
 else{

  
  res.render("restaurant/login",{"message":"Thankyou. Login now."})
 }
});

router.post("/restaurantfilter", async (req, res) => {
  var username = xss(req.body.username)
  var pass = xss(req.body.password)
  var user = await recipeData.validateUser(username,pass)
  
  
  if(user!="empty")
  {
    
  authUser = await recipeData.patchsession(user._id)

  res.cookie("AuthCookie",authUser.sessionId);  

  res.render("restaurant/restaurant_filter",{userauth: authUser})
  }
  else{

  res.render("restaurant/login",{"message":"Invalid user"})
  }
});


router.get("/restaurantfilter", async (req, res) => {
  var  cook = req.cookies.AuthCookie;
  if(cook===undefined)
  {
    res.redirect("/");
  }
  else
  {
  res.render("restaurant/restaurant_filter",{userauth:authUser})
  }
});



/* This gets all the reviews when you refresh the page*/

router.get("/restaurant/:id", async (req, res) => {
 
 var cook = req.cookies.AuthCookie;
 if(cook === undefined)
 {
    res.redirect("/");
 }
 else
 {

   var onerest =  await recipeData.getrestaurantbyid(req.params.id);
  

   geocoder.geocode(onerest.obj.location,function(err,results)
   {
     lat = results[0].latitude;
     longi = results[0].longitude;
   
     res.render("restaurant/restaurant_detail", {latit:lat , longit:longi, restone:onerest, userauth: authUser });
   });
  }

});




/* I AM Posting the Reviews to this route*/


router.post("/restaurant/:id", async (req, res) => {
  
   var onerest =  await recipeData.getrestaurantbyid(req.params.id);
  
   var cook = req.cookies.AuthCookie;

   await recipeData.addreview(authUser,xss(req.body.comment),onerest,(req.body.rating));
   var sanitizedComment  =  xss(req.body.comment);
    
   geocoder.geocode(onerest.obj.location,function(err,results)
   {
     lat = results[0].latitude;
     longi = results[0].longitude;

     res.json({comment: sanitizedComment, latit: lat, longit: longi, restone: onerest});
   
   });

});



router.post("/restaurantlist", async (req, res) => {
   


   var state = req.body.state;
   var city = req.body.city;
   var cuisine = req.body.cuisine;

     var rest= {};
  
   if(state == ""){
    res.render("restaurant/restaurant_filter",{"message":"Enter State",userauth:authUser})
     return;
   }
  
   if(city == ""){
    res.render("restaurant/restaurant_filter",{"message":"Enter City",userauth:authUser})
    return;
   }


 var cuisineArray = [];
 if(cuisine == ""){
   cuisineArray = ["Indian", "American", "Mexican", "Italian", "Chinese"]
   
 }else{
   cuisineArray.push(cuisine);
   }
   
  

  
  var arrrest = await recipeData.getrestaurants(state,city,cuisineArray);
  res.render("restaurant/restaurant_list",{rests:arrrest,userauth:authUser});

     
});




router.get("/logout", async (req, res) => {
  var cook = req.cookies.AuthCookie;
  if(cook === undefined)
  {
      res.redirect("/");

  }
  else
  {    
    if(authUser!=undefined)
    {
       var loggedout = await recipeData.patchsession(authUser._id)
        res.clearCookie("AuthCookie");
       
         authUser = null;
 
       res.redirect("/")
    }
    else
    {
      res.clearCookie("AuthCookie");
      res.redirect("/");
        
    }
  }
});





router.get("/changepassword", async (req, res) => {
  res.render("restaurant/changepassword",{userauth:authUser})
});

router.post("/changepassword", async (req, res) => {


var cook = req.cookies.AuthCookie;
if(cook ==  undefined)
{
    res.redirect("/");
}
else
{
    
  var oldpassword = xss(req.body.oldpassword);
  var newpassword = xss(req.body.newpassword);

  var test = await recipeData.patchpassword(oldpassword, newpassword, authUser)
  if(test == "incorrect")
  {
    res.render("restaurant/changepassword",{"message" : "Error: Old password doesn't match entered password.",userauth:authUser})
  }
  else if(test == "same")
  {
    res.render("restaurant/changepassword",{"message" : "Error: New password and current password are the same.",userauth:authUser})
  }
  else{
    authUser = test;
    res.render("restaurant/changepassword",{"message" : "Password successfully changed.",userauth:authUser})
  }
}
});




module.exports = router;