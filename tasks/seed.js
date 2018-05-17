const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const users = data.users;
const recipes = data.recipes;

async function main() {
  const db = await dbConnection();
  await db.dropDatabase();
  var obj = new Object();

  var name = "Chef Of India";
  obj.description = "Homey, storefront nook with late hours preparing North & South Indian staples to eat in or take out"
  obj.state = "New Jersey"
  obj.city = "Jersey city"
  obj.location = "324 Central Ave, Jersey City, NJ 07307"
  obj.cuisine = ["Indian","Chinese"]
  obj.timing = ["Mon	11:00 am - 12:00 am","Tue	11:00 am - 12:00 am" ,"Wed	11:00 am - 12:00 am", "Thu	11:00 am - 12:00 am" ,"Fri	11:00 am - 12:00 am" , "Sat	11:00 am - 12:00 am" , "Sun	11:00 am - 12:00 am"]
  obj.contact = "884-125-5241"
  obj.rating = "4"
  var review = new Object();
  review.user="Amol Kurhade"
  review.comment = "The place is good near to Indian street in jersey city, you can easily find parking not like the Indian street on Newark Ave. the taste is good and the rate are also low. Two can have a snack and full dinner by $16/20. Recommended"
  review.rating = "4"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "King Szechuan Palace";
  obj.description = "Informal eatery serving sushi & Sichuan-style Chinese dishes, such as dry pot chicken."
  obj.state = "New Jersey"
  obj.city = "Jersey city"
  obj.location = "83, 2446, Reservoir Ave, Jersey City, NJ 07307"
  obj.cuisine = ["Chinese"]
  obj.timing = ["Mon	Closed",	"Tue	11:30 am - 10:30 pm" , "Wed	11:30 am - 10:30 pm" , "Thu	11:30 am - 10:30 pm" , "Fri	11:30 am - 11:00 pm", "Sat	11:30 am - 11:00 pm", "Sun	1:00 pm - 10:30 pm"]
  obj.contact = "(201) 222-6888"
  obj.rating = "2"
  var review = new Object();
  review.user="Nathan Jimenez"
  review.comment = "Super nice. Tasty but not expensive. Very good."
  review.rating = "2"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "Battello";
  obj.description = "Fine Dining with a view of the Manhattan skyline"
  obj.state = "New Jersey"
  obj.city = "Jersey city"
  obj.location = "502 Washington Blvd, Jersey City, NJ 07310"
  obj.cuisine = ["Italian"]
  obj.timing = ["Mon	Closed",	"Tue	11:30 am - 10:30 pm" , "Wed	11:30 am - 10:30 pm" , "Thu	11:30 am - 10:30 pm" , "Fri	11:30 am - 11:00 pm", "Sat	11:30 am - 11:00 pm", "Sun	1:00 pm - 10:30 pm"]
  obj.contact = "(201) 798-1798"
  obj.rating = "4"
  var review = new Object();
  review.user="Jacob Smith"
  review.comment = "Each dish -- from the popcorn dusted grilled octopus to the tender short rib with house made pasta -- was delicious."
  review.rating = "4"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "The Hutton";
  obj.description = "Cozy restaurant with live music"
  obj.state = "New Jersey"
  obj.city = "Jersey city"
  obj.location = "225 Hutton St, Jersey City, NJ 07307"
  obj.cuisine = ["American","Italian"]
  obj.timing = ["Mon	Closed",	"Tue	11:30 am - 10:30 pm" , "Wed	11:30 am - 10:30 pm" , "Thu	11:30 am - 10:30 pm" , "Fri	11:30 am - 11:00 pm", "Sat	11:30 am - 11:00 pm", "Sun	1:00 pm - 10:30 pm"]
  obj.contact = "(201) 356-9169"
  obj.rating = "3"
  var review = new Object();
  review.user="Tom Cruise"
  review.comment = "So happy to have this neighborhood spot return to the heights in such an amazing, new way."
  review.rating = "3"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "Amanda's Restaurant";
  obj.description = "Old-fashioned supper club with white-tablecloth dining, a lengthy wine list & weekend jazz music"
  obj.state = "New Jersey"
  obj.city = "Hoboken"
  obj.location = "908 Washington St, Hoboken, NJ 07030"
  obj.cuisine = ["American"]
  obj.timing = ["Mon	11:30 am - 10:30 pm",	"Tue	11:30 am - 10:30 pm" , "Wed	11:30 am - 10:30 pm" , "Thu	11:30 am - 10:30 pm" , "Fri	11:30 am - 11:00 pm", "Sat	11:30 am - 11:00 pm", "Sun	1:00 pm - 10:30 pm"]
  obj.contact = "(201) 798-0101"
  obj.rating = "2"
  var review = new Object();
  review.user ="Joseph Merlino"
  review.comment = "Amanda's is a very nice restaurant with fantastic service and good food."
  review.rating = "2"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);


  var name = "Karma Kafe";
  obj.description = "Coming of age Indian restaurant"
  obj.state = "New Jersey"
  obj.city = "Hoboken"
  obj.location = "505 Washington St, Hoboken, NJ 07030"
  obj.cuisine = ["Indian"]
  obj.timing = ["Mon	11:30 am - 10:30 pm",	"Tue	11:30 am - 10:30 pm" , "Wed	11:30 am - 10:30 pm" , "Thu	11:30 am - 10:30 pm" , "Fri	11:30 am - 11:00 pm", "Sat	11:30 am - 11:00 pm", "Sun	1:00 pm - 10:30 pm"]
  obj.contact = "(201) 610-0900"
  obj.rating = "4"
  var review = new Object();
  review.user ="Vignesh Sriram"
  review.comment = "Home style cooked Indian food. Really good."
  review.rating = "4"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  
  var name = "Vito's Italian Deli";
  obj.description = "Perfect retro Italain deli"
  obj.state = "New Jersey"
  obj.city = "Hoboken"
  obj.location = "806 Washington St, Hoboken, NJ 07030"
  obj.cuisine = ["Italian"]
  obj.timing = ["Mon	10:30 am - 11:00 pm	",	"Tue	10:30 am - 11:00 pm	" , "Wed	10:30 am - 11:00 pm	" , "Thu	10:30 am - 11:00 pm	" , "Fri	10:30 am - 3:00 am", "Sat	10:30 am - 3:00 am	", "Sun	10:30 am - 11:00 pm	"]
  obj.contact = "(201) 792-4944"
  obj.rating = "3"
  var review = new Object();
  review.user="Ryan Mitchell"
  review.comment = "First time at Vito's. I really liked the taste of food here."
  review.rating = "3"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "Cafe Matt & Meera";
  obj.description = "Traditional family-friendly Chinese and Indian diner with vinyl booths, jukeboxes & free WiFi, open 24 hours."
  obj.state = "New Jersey"
  obj.city = "Hoboken"
  obj.location = "618 Washington St, Hoboken, NJ 07030"
  obj.cuisine = ["Chinese","Indian"]
  obj.timing = ["Mon Open 24 hours",	"Tue Open 24 hours" , "Wed	Open 24 hours" , "Thu	Open 24 hours" , "Fri	Open 24 hours", "Sat Open 24 hours", "Sun	Open 24 hours"]
  obj.contact = "(201) 683-9431"
  obj.rating = "5"
  var review = new Object();
  review.user ="Sam Roig"
  review.comment = "Some of the best. High quality. Diner food I ever had in New Jersey. A must go place when driving through town"
  review.rating = "5"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "Due Mari";
  obj.description = "High class restaurant for worthy occasion"
  obj.state = "New Jersey"
  obj.city = "New Brunswick"
  obj.location = "78 Albany St, New Brunswick, NJ 08901"
  obj.cuisine = ["Italian"]
  obj.timing = ["Mon	10:30 am - 11:00 pm	",	"Tue	10:30 am - 11:00 pm	" , "Wed	10:30 am - 11:00 pm	" , "Thu	10:30 am - 11:00 pm	" , "Fri	10:30 am - 3:00 am", "Sat	10:30 am - 3:00 am	", "Sun	10:30 am - 11:00 pm	"]
  obj.contact = "(201) 683-9431"
  obj.rating = "4"
  var review = new Object();
  review.user ="Sam Smith"
  review.comment = "The Creste Pasta was a half moon shaped pasta with garlic, shrimp, calamari, scallops, and mollica."
  review.rating = "4"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "Stuff Yer Face";
  obj.description = "Student hangout place with energetic music."
  obj.state = "New Jersey"
  obj.city = "New Brunswick"
  obj.location = "49 Easton Ave, New Brunswick, NJ 08901"
  obj.cuisine = ["American","Italian"]
  obj.timing = ["Mon	10:30 am - 11:00 pm	",	"Tue	10:30 am - 11:00 pm	" , "Wed	10:30 am - 11:00 pm	" , "Thu	10:30 am - 11:00 pm	" , "Fri	10:30 am - 3:00 am", "Sat	10:30 am - 3:00 am	", "Sun	10:30 am - 11:00 pm	"]
  obj.contact = "(201) 683-9431"
  obj.rating = "5"
  var review = new Object();
  review.user ="Stacey Martin"
  review.comment = "Not only was the food great, but the fish bowl I ordered (which came in a pitcher) was fantastic and such a great price."
  review.rating = "5"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "AJA Asian Cuisine & Lounge";
  obj.description = "The best authentic Chinese food in New Brunswick"
  obj.state = "New Jersey"
  obj.city = "New Brunswick"
  obj.location = "28 US Hwy 1, New Brunswick, NJ 08901"
  obj.cuisine = ["Chinese"]
  obj.timing = ["Mon	10:30 am - 11:00 pm	",	"Tue	10:30 am - 11:00 pm	" , "Wed	10:30 am - 11:00 pm	" , "Thu	10:30 am - 11:00 pm	" , "Fri	10:30 am - 3:00 am", "Sat	10:30 am - 3:00 am	", "Sun	10:30 am - 11:00 pm	"]
  obj.contact = "(732) 249-5888"
  obj.rating = "4"
  var review = new Object();
  review.user ="Chun Li"
  review.comment = "This place is huge but still manages to feel warm. I'd return during the week when they have specials going on."
  review.rating = "4"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "I’s Cafe";
  obj.description = "Indian cuisine with a twist"
  obj.state = "New Jersey"
  obj.city = "New Brunswick"
  obj.location = "42 Easton Ave, New Brunswick, NJ 08901"
  obj.cuisine = ["Indian","Chinese"]
  obj.timing = ["Mon	10:30 am - 11:00 pm	",	"Tue	10:30 am - 11:00 pm	" , "Wed	10:30 am - 11:00 pm	" , "Thu	10:30 am - 11:00 pm	" , "Fri	10:30 am - 3:00 am", "Sat	10:30 am - 3:00 am	", "Sun	10:30 am - 11:00 pm	"]
  obj.contact = "(908) 938-8858"
  obj.rating = "2"
  var review = new Object();
  review.user ="Omkar Ahir"
  review.comment = "The Biryani reminded me of my home country"
  review.rating = "2"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "Ashoka Indian Restaurant";
  obj.description = "Vibrant cantina serving modern Mexican cuisine, made-to-order guacamole & tequila cocktails"
  obj.state = "New York"
  obj.city = "New York City"
  obj.location = "489 Columbus Ave, New York, NY 10024"
  obj.cuisine = ["Indian"]
  obj.timing = ["Mon	11:30 am - 10:00 pm",	"Tue	11:30 am - 10:00 pm" , "Wed	11:30 am - 10:30 pm" , "Thu	11:30 am - 11:00 pm" , "Fri	11:30 am - 11:30 pm", "Sat	11:30 am - 11:30 pm", "Sun	1:00 pm - 10:00 pm"]
  obj.contact = "(212) 875-1400"
  obj.rating = "4"
  var review = new Object();
  review.user ="Adam Scott"
  review.comment = "The BEST Indian in the Upper West Side with the loveliest helpful, accomodating staff."
  review.rating = "4"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "Cookshop";
  obj.description = "Energetic, greenmarket-driven hot spot by the High Line serving American fare plus a popular brunch."
  obj.state = "New York"
  obj.city = "New York City"
  obj.location = "156 10th Ave, New York, NY 10011"
  obj.cuisine = ["American","Italian"]
  obj.timing = ["Mon 8:00 am - 11:00 pm",	"Tue 8:00 am - 11:00 pm" , "Wed	8:00 am - 11:00 pm" , "Thu 8:00 am - 11:00 pm" , "Fri	8:00 am - 11:00 pm", "Sat	8:00 am - 11:00 pm", "Sun	8:00 am - 11:00 pm"]
  obj.contact = "(212) 924-4440"
  obj.rating = "3"
  var review = new Object();
  review.user ="Chris Treager"
  review.comment = "One of the few New York City restaurants you can count on for an excellent meal regardless of circumstance. Go for any meal or for a day on the patio"
  review.rating = "3"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "Café China";
  obj.description = "A Szechuan place located in the heart of the city"
  obj.state = "New York"
  obj.city = "New York City"
  obj.location = "13 E 37th St, New York, NY 10016"
  obj.cuisine = ["Chinese"]
  obj.timing = ["Mon 8:00 am - 11:00 pm",	"Tue 8:00 am - 11:00 pm" , "Wed	8:00 am - 11:00 pm" , "Thu 8:00 am - 11:00 pm" , "Fri	8:00 am - 11:00 pm", "Sat	8:00 am - 11:00 pm", "Sun	8:00 am - 11:00 pm"]
  obj.contact = "(212) 213-2810"
  obj.rating = "3"
  var review = new Object();
  review.user ="Benjamin Franklin"
  review.comment = "We tried the dan dan noodles, pork dumplings, cumin lamb and three pepper chicken; everything was finger licking delicious."
  review.rating = "3"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "Supper";
  obj.description = "This restaurat captures the essence of Little Italy"
  obj.state = "New York"
  obj.city = "New York City"
  obj.location = "156 E 2nd St, New York, NY 10009"
  obj.cuisine = ["American","Italian"]
  obj.timing = ["Mon 8:00 am - 11:00 pm",	"Tue 8:00 am - 11:00 pm" , "Wed	8:00 am - 11:00 pm" , "Thu 8:00 am - 11:00 pm" , "Fri	8:00 am - 11:00 pm", "Sat	8:00 am - 11:00 pm", "Sun	8:00 am - 11:00 pm"]
  obj.contact = "(212) 477-7600"
  obj.rating = "4"
  var review = new Object();
  review.user ="Charles Oswald"
  review.comment = "Great food, started with the shaved artichoke salad, shared the Spaghetti Al Limone and Veal scallopine."
  review.rating = "4"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "Taste Good Chinese Restaurant";
  obj.description = "Familiar Chinese noodles, seafood & tofu dishes in a strip-mall storefront known for takeout."
  obj.state = "New York"
  obj.city = "Buffalo"
  obj.location = "12308 Delaware Ave, Buffalo, NY 14216"
  obj.cuisine = ["Chinese"]
  obj.timing = ["Mon 11:00 am - 10:00 pm",	"Tue 11:00 am - 10:00 pm" , "Wed	11:00 am - 10:00 pm" , "Thu 11:00 am - 10:00 pm" , "Fri	11:00 am - 10:00 pm", "Sat	11:00 am - 10:00 pm", "Sun	11:00 am - 10:00 pm"]
  obj.contact = "(212) 741-3223"
  obj.rating = "3"
  var review = new Object();
  review.user ="Smit Mehta"
  review.comment = "Not bad. The food was fresh but didn't stand out or impress. Gone back a few times for quick pickup. I really wish they used a little more spice in the cooking. Still it's worth it if you're looking to make a quick pickup of Chinese take-out. Decent parking options"
  review.rating = "3"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "The Anchor Bar";
  obj.description = "Chicken wings with beer, the best combination."
  obj.state = "New York"
  obj.city = "Buffalo"
  obj.location = "1047 Main St, Buffalo, NY 14209"
  obj.cuisine = ["American","Italian"]
  obj.timing = ["Mon 11:00 am - 10:00 pm",	"Tue 11:00 am - 10:00 pm" , "Wed	11:00 am - 10:00 pm" , "Thu 11:00 am - 10:00 pm" , "Fri	11:00 am - 10:00 pm", "Sat	11:00 am - 10:00 pm", "Sun	11:00 am - 10:00 pm"]
  obj.contact = "(716) 883-1134"
  obj.rating = "3"
  var review = new Object();
  review.user ="Rachael Green"
  review.comment = "The Service is great, the place is fun and noisy and friendly- the only reason I didn't give them 5 stars is - their blue cheese dressing is terrible."
  review.rating = "3"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "Taj Grill";
  obj.description = "Broad Indian menu covers curries, tandoori dishes & vegetarian items in a smart, simple space."
  obj.state = "New York"
  obj.city = "Buffalo"
  obj.location = "1047 Main St, Buffalo, NY 14209"
  obj.cuisine = ["Indian"]
  obj.timing = ["Mon 11:00 am - 10:00 pm",	"Tue 11:00 am - 10:00 pm" , "Wed	11:00 am - 10:00 pm" , "Thu 11:00 am - 10:00 pm" , "Fri	11:00 am - 10:00 pm", "Sat	11:00 am - 10:00 pm", "Sun	11:00 am - 10:00 pm"]
  obj.contact = "(716) 427-5109"
  obj.rating = "5"
  var review = new Object();
  review.user ="Sachin Patel"
  review.comment = "Hands down, best Indian place to come to in the Delaware area. Never had a bad experience here the past couple of years."
  review.rating = "5"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "Fast N’ Tasty";
  obj.description = "Small space serving Indian and Chinese fast food"
  obj.state = "New York"
  obj.city = "Buffalo"
  obj.location = "69 Allen St, Buffalo, NY 14202"
  obj.cuisine = ["Indian", "Chinese"]
  obj.timing = ["Mon 11:00 am - 10:00 pm",	"Tue 11:00 am - 10:00 pm" , "Wed	11:00 am - 10:00 pm" , "Thu 11:00 am - 10:00 pm" , "Fri	11:00 am - 10:00 pm", "Sat	11:00 am - 10:00 pm", "Sun	11:00 am - 10:00 pm"]
  obj.contact = "(716) 881-1832"
  obj.rating = "3"
  var review = new Object();
  review.user ="Sarah Mulligan"
  review.comment = "I've been looking forward to trying Gatur's so I could compare it to Lucy's on Amherst."
  review.rating = "3"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);



  var name = "Phoebe's Restaurant & Coffee Lounge";
  obj.description = "Long-running skylight-topped American bistro serving a seasonal menu, with an attached coffee bar.."
  obj.state = "New York"
  obj.city = "Syracuse"
  obj.location = "900 E Genesee St, Syracuse, NY 13210"
  obj.cuisine = ["American","Italian"]
  obj.timing = ["Mon 8:00 am - 2:00 pm",	"Tue 8:00 am - 9:00 pm" , "Wed	8:00 am - 9:00 pm" , "Thu 8:00 am - 9:00 pm" , "Fri	8:00 am - 9:00 pm", "Sat	8:00 am - 9:00 pm", "Sun	8:00 am - 9:00 pm"]
  obj.contact = "(315) 475-5154"
  obj.rating = "4"
  var review = new Object();
  review.user ="Darcey Short"
  review.comment = "Love their lunch specials and daily quiche selection. Can't go wrong with the French onion soup and pheobe salad either! They always get me in and out, even when I tell them I am on a short break"
  review.rating = "4"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "Dosa Grill";
  obj.description = "Simply decorated Indian restaurant offering both Southern & Northern cuisine, plus a lunch buffet."
  obj.state = "New York"
  obj.city = "Syracuse"
  obj.location = "4467 E Genesee St, Syracuse, NY 13214"
  obj.cuisine = ["Indian"]
  obj.timing = ["Mon 11:00 am - 10:00 pm",	"Tue 11:00 am - 10:00 pm" , "Wed	11:00 am - 10:00 pm" , "Thu 11:00 am - 10:00 pm" , "Fri	11:00 am - 10:00 pm", "Sat	11:00 am - 10:00 pm", "Sun	11:00 am - 10:00 pm"]
  obj.contact = "(315) 445-5555"
  obj.rating = "3"
  var review = new Object();
  review.user ="Jessica Alba"
  review.comment = "Amazing food, truly some of the best Indian food I've had. Every dish ordered has been great."
  review.rating = "3"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "Bite of Chongqing";
  obj.description = "This place will remind you of Shanghai."
  obj.state = "New York"
  obj.city = "Syracuse"
  obj.location = "656 N Salina St, Syracuse, NY 13208"
  obj.cuisine = ["Chinese"]
  obj.timing = ["Mon 11:00 am - 10:00 pm",	"Tue 11:00 am - 10:00 pm" , "Wed	11:00 am - 10:00 pm" , "Thu 11:00 am - 10:00 pm" , "Fri	11:00 am - 10:00 pm", "Sat	11:00 am - 10:00 pm", "Sun	11:00 am - 10:00 pm"]
  obj.contact = "(315) 445-5555"
  obj.rating = "5"
  var review = new Object();
  review.user ="Kim Samuel"
  review.comment = "The Pork Fried Rice was to die for"
  review.rating = "5"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "The Cider Mill";
  obj.description = "The best burger and beer place in Syracuse"
  obj.state = "New York"
  obj.city = "Syracuse"
  obj.location = "4221 Fay Rd, Syracuse, NY 13219"
  obj.cuisine = ["American"]
  obj.timing = ["Mon 11:00 am - 10:00 pm",	"Tue 11:00 am - 10:00 pm" , "Wed	11:00 am - 10:00 pm" , "Thu 11:00 am - 10:00 pm" , "Fri	11:00 am - 10:00 pm", "Sat	11:00 am - 10:00 pm", "Sun	11:00 am - 10:00 pm"]
  obj.contact = "(315) 487-0647"
  obj.rating = "4"
  var review = new Object();
  review.user ="Kanye West"
  review.comment = "The best restaurant I have found in Syracuse.  As soon as we walked in, it smelled amazing. Our server Mike greeted us as if we were old friends and provided the best service."
  review.rating = "4"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  
  console.log("Done seeding database");
  //await db.close();
}

main();