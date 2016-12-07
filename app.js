var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/restaurant_db";
var prompt = require("prompt-sync")();

mongo.connect(url, function(err, db){
    var collection = db.collection('restaurants');
    var specificRestaurant = prompt("Please, enter the name of the restaurant you are looking for...");
    if (specificRestaurant){
      collection.find({name: specificRestaurant}).forEach(function(item){
        var result = [];
        console.log(result);
        result.push(item);
      
      });
    } else  {
    /* Task 2: Create a prompt for users to add their own restaurants.*/
     console.log ("Hmm, we don't recognize that restaurant name, would you like to add it?");
    var newName = prompt("Restaurant Name?");
    var newStreet = prompt("Street Address?");
    var newZip = prompt("Zip Code?");
    collection.insert ({
                            "name": newName,
                         "address" : {
                                    "street": newStreet,
                                         "zipcode" : newZip,
                                        },
   });    
 
}
});