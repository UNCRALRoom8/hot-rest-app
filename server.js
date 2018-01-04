// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Reservations (DATA)
// =============================================================
var reservations = [
{
customerName: "adsf",
phoneNumber:  "asdf",
customerEmail:"sdf"
},

{
customerName: "adsf",
phoneNumber:  "asdf",
customerEmail:"sdf"
},

{
customerName: "adsf",
phoneNumber:  "asdf",
customerEmail:"sdf"
},

{
customerName: "adsf",
phoneNumber:  "asdf",
customerEmail:"sdf"
},

{
customerName: "adsf",
phoneNumber:  "asdf",
customerEmail:"sdf"
},

{
customerName: "adsf",
phoneNumber:  "asdf",
customerEmail:"sdf"
},

{
customerName: "adsf",
phoneNumber:  "asdf",
customerEmail:"sdf"
},

{
customerName: "adsf",
phoneNumber:  "asdf",
customerEmail:"sdf"
},

{
customerName: "adsf",
phoneNumber:  "asdf",
customerEmail:"sdf"
},

{
customerName: "adsf",
phoneNumber:  "asdf",
customerEmail:"sdf"
},

{
customerName: "adsf",
phoneNumber:  "asdf",
customerEmail:"sdf"
},

{
customerName: "adsf",
phoneNumber:  "asdf",
customerEmail:"sdf"
}

];


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});


// Get first 5 entries for reservations
app.get("/api/tables", function(req, res) {

  var resultSet = [];
  for (var i=0; i<5; i++){
    var resv = reservations[i];
    resv.customerID = i+1;
    resultSet.push(resv);
  }
  return res.json(resultSet);
});


// Get all but first 5 entries for waitlist
app.get("/api/waitlist", function(req, res) {
  var resultSet = [];
  for (var i=5; i<reservations.length; i++){
    var resv = reservations[i];
    resv.customerID = i+1;
    resultSet.push(resv);
  }
  return res.json(resultSet);
});

// Create reservation
app.post("/api/waitlist", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;
  console.log(newReservation);
  reservations.push(newReservation);
  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
