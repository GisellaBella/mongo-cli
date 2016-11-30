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
    }   else {
        console.log ("Hmm, we don't recognize that restaurant name, please try again.");
        }   
});


/* var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  if(allChoice == "all"){
    collection.find().toArray(function(err, doc){
      console.log(doc);
    });
  } else {
    console.log("Aw, you don't want to see the restaurants?");
  }
}); */