const express = require("express");
const app = express();
const jsonParser = express.json();

const MongoClient = require('mongodb').MongoClient;
const mongo = require('mongodb');
const url = "mongodb://localhost:27017/";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
  next();
});

// authentication
app.post("/entry-form/", jsonParser, function (request, response) {

  if(!request.body) return response.sendStatus(400);

  let login = request.body.login;
  let password = request.body.password;

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("DiplomaDB");
    dbo.collection("Users").findOne({ login: login }, function(err, result) {
      if (err) throw err;
      if (result === null) {
        // console.log(result);
      }
      else {
        // console.log(result);
        if (login === result.login && password === result.password) {
          response.json({"role": result.role, "id": result._id});
          db.close();
        }
      }
    });
  });
});

// admin add user
app.post("/admin-panel/add-user/", jsonParser, function (request, response) {

  if(!request.body) return response.sendStatus(400);

  // request.body
  let user = {
    login: request.body.login,
    password: request.body.password,
    role: request.body.role,
    projects: [''],
    currentProject: '',
    tasks: '',
    commonTasks: '',
    messages: '',
    name: '',
    surName: '',
    lastName: '',
    birthDate: '',
    city: '',
    about: '',
    picture: ''
  };

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("DiplomaDB");
    dbo.collection("Users").insertOne(user, function(err, result) {

      if (err) throw err;

      if (result !== null) {
        response.json({"login": result.login, "password": result.password, "role": result.role});
        db.close();
      }
    });
  });
});

// admin get user by login
app.post("/admin-panel/get-user/", jsonParser, function (request, response) {

  if(!request.body) return response.sendStatus(400);

  let findQuery = { login: request.body.login };
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("DiplomaDB");
    dbo.collection("Users").findOne(findQuery, function(err, result) {

      if (err) throw err;

      if (result !== null) {
        console.log(result);
        response.json(result);
        db.close();
      }
    });
  });
});

// admin get all users by login
app.post("/admin-panel/get-users/", jsonParser, function (request, response) {

  if(!request.body) return response.sendStatus(400);


  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("DiplomaDB");
    dbo.collection("Users").find({}, { projection: { _id: 0, login: 1} }).toArray(function(err, result) {

      if (err) throw err;

      if (result !== null) {
        console.log(result);
        response.json(result);
        db.close();
      }
    });
  });
});

// admin remove user //end-point
app.post("/admin-panel/delete-user/", jsonParser, function (request, response) {

  if(!request.body) return response.sendStatus(400);

  let deleteQuery = { login: request.body.login };
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("DiplomaDB");
    dbo.collection("Users").deleteOne(deleteQuery, function(err, result) {
      if (err) throw err;
      if (result !== null) {
        response.json({login: result.login});
        db.close();
      }
    });
  });
});

// admin update user
app.post("/admin-panel/update-user/", jsonParser, function (request, response) {

  if(!request.body) return response.sendStatus(400);

  let oldData = { login: request.body.currentUserLogin };
  let updateQuery = { $set: {login: request.body.login, password: request.body.password, role: request.body.role} };
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("DiplomaDB");
    dbo.collection("Users").updateOne(oldData, updateQuery, function(err, result) {
      if (err) throw err;
      if (result !== null) {
        response.json({login: result.login});
        db.close();
      }
    });
  });
});

// user get own data
app.post("/account/", jsonParser, function (request, response) {

  if(!request.body) return response.sendStatus(400);
  let o_id = new mongo.ObjectID(request.body.id);
  let findQuery = { '_id': o_id };
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("DiplomaDB");
    dbo.collection("Users").findOne(findQuery, function(err, result) {

      if (err) throw err;

      if (result !== null) {
        console.log(result);
        response.json(result);
        db.close();
      }
    });
  });
});

// user update info
app.post("/account/update/", jsonParser, function (request, response) {

  console.log(request.body);
  if(!request.body) return response.sendStatus(400);
  let o_id = new mongo.ObjectID(request.body.id);
  let oldData = { '_id': o_id };
  let updateQuery = { $set: {name: request.body.name, lastName: request.body.lastName, surName: request.body.surName, birthDate: request.body.birthDate, city: request.body.city, about: request.body.about} };
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("DiplomaDB");
    dbo.collection("Users").updateOne(oldData, updateQuery, function(err, result) {
      if (err) throw err;
      if (result !== null) {
        db.close();
      }
    });
  });
});

// user add task
app.post("/settings/add-task/", jsonParser, function (request, response) {

  if(!request.body) return response.sendStatus(400);

  // request.body
  let task = {
    title: request.body.userTask.title,
    description: request.body.userTask.description,
    status: request.body.userTask.status,
    author: request.body.userTask.author,
    authorRole: request.body.userTask.authorRole,
    executor: ''
  };

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("DiplomaDB");
    dbo.collection("Tasks").insertOne(task, function(err, result) {

      if (err) throw err;

      if (result !== null) {
        db.close();
      }
    });
  });
});

// user get all tasks
app.post("/dashboard/todo/", jsonParser, function (request, response) {

  if(!request.body) return response.sendStatus(400);

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("DiplomaDB");
    dbo.collection("Tasks").find({executor: ""}, { projection: { _id: 0, title: 1, description: 2, status: 3, author: 4, authorRole: 5} }).toArray(function(err, result) {

      if (err) throw err;

      if (result !== null) {
        console.log(result);
        response.json(result);
        db.close();
      }
    });
  });
});

// user get all tasks
app.post("/dashboard/inProgress/", jsonParser, function (request, response) {

  if(!request.body) return response.sendStatus(400);

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("DiplomaDB");
    dbo.collection("Tasks").find({executor: request.body.executor}, { projection: { _id: 0, title: 1, description: 2, status: 3, author: 4, authorRole: 5} }).toArray(function(err, result) {

      if (err) throw err;

      if (result !== null) {
        console.log(result);
        response.json(result);
        db.close();
      }
    });
  });
});

// user update task
app.post("/dashboard/in-progress/", jsonParser, function (request, response) {

  if(!request.body) return response.sendStatus(400);

  let oldData = { title: request.body.userTask.title };
  let updateQuery = { $set: { executor: request.body.userTask.executor, status: request.body.userTask.status } };
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("DiplomaDB");
    dbo.collection("Tasks").updateOne(oldData, updateQuery, function(err, result) {
      if (err) throw err;
      if (result !== null) {
        db.close();
      }
    });
  });
});

app.listen(3000);
