var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/restaurant_db";
var prompt = require("prompt-sync")();

mongo.connect(url, function(err, db) {
  var collection = db.collection('restaurants');
  /* Task 1: Comment out the first prompt and add another prompt
  to let the user view information about a specific restaurant, by entering a name.  */
  var specificRestaurant = prompt("Enter the name of the restaurant you are looking for");
    if (specificRestaurant == "name") {
        collection.find ({"name": specificRestaurant}).toArray(function(err, doc) {
        console.log(doc); 
        });
    }  
    /* Task 2: Create a prompt for users to add their own restaurants.*/
      else {
        console.log ("Hmm, we don't recognize that restaurant name, would you like to add it?");
        var newName = prompt("Restaurant Name");
        var streetAdress = prompt("Street Address");//can we combine prompts,also offer a "i dont know option"
        var end = prompt("I don't know or cancel button");
        (addRestaurant = "new" ) {
            collection.insert({
            "name": newName,
            "address" : {
                        street : streetAdress,
                        zipcode : 20001,
                        },
            yelp: "http://www.yelp.com/biz/cookies-corner-washington"
            });
         console.log ();
        }
        }   
});

