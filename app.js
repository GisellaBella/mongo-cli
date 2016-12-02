var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/restaurant_db";
var prompt = require("prompt-sync")();

mongo.connect(url, function(err, db) {
  var collection = db.collection('restaurants');
  /* Task 1: Comment out the first prompt and add another prompt
  to let the user view information about a specific restaurant, by entering a name.  */
  var specificRestaurant = prompt("Please, enter the name of the restaurant you are looking for...");{ 
    if (specificRestaurant == "name")
    collection.find({"name": specificRestaurant}).toArray(function(err, doc){
      console.log(doc);
      }); else 
      {
          /* Task 2: Create a prompt for users to add their own restaurants.*/
          console.log ("Hmm, we don't recognize that restaurant name, would you like to add it?");
          var newName = prompt("Restaurant Name?");
          var newStreet = prompt("Street Address?");
          var newZip = prompt("Zip Code?");//can we combine prompts and also offer a "i dont know option"?
          collection.insertOne({
                                "name": newName,
                                "address" : {
                                "street": newStreet,
                                "zipcode" : newZip,
                                            },
                                });
            collection.find().toArray(function(err, doc){
            console.log(doc);
            });
        }
    }
  }
);