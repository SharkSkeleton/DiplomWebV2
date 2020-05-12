// const express = require("express");
// const app = express();
// const jsonParser = express.json();
//
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
//   next();
// });
//
// app.post("/", jsonParser, function (request, response) {
//
//   if(!request.body) return response.sendStatus(400);
//   let email = request.body.email;
//   let password = request.body.password;
//
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("DiplomaDB");
//     dbo.collection("Users").findOne({ email: email }, function(err, result) {
//       if (err) throw err;
//       if (result === null) {
//         console.log(result);
//       }
//       else {
//         // console.log(result);
//         if (email === result.email && password === result.password) {
//           response.json({"role": result.role});
//           db.close();
//         }
//       }
//     });
//   });
// });
//
// app.listen(3000);

// var user = "admin";
// var msg = "msg";

//-------------------Insert a document into collection-----------------------------------
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("DiplomaDB");
//   var myobj = { user: user, msg: msg };
//   dbo.collection("Messages").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });
//--------------------------------------------------------------
