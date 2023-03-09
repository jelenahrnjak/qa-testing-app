const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs'); 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/api/tests", (req, res, next) => {
  const tests = []
  
  getFiles().forEach(element => {
 
    content = ''

    try {
      const data = fs.readFileSync('../tests/' +  element + '/README.md', 'utf8')
      content = data; 
    } catch (err) {
      console.error(err)
    }

    tests.push({title : element, data: content})
  });

  res.status(200).json({
    message: "Tests fetched successfully!",
    tests: tests
  });
});

function getFiles(){
  
  target = "../tests";

  fs.readdir(target, (err, files) => {
  if (err) { console.log(err); }
  else {}
  });

  var files = fs.readdirSync(target);
  return files
}
 
app.get("/api/open-app", (req, res, next) => {
  
  var name = req.query.name 

  const path = '../tests/' + name;
   
  try {
    fs.readdirSync(path); 
  } catch (err) {
    console.error(err)
  }   
   
  var spawn = require('child_process').spawn;
  var child = spawn('npm install --global kill-port && kill-port 4200 && cd ../tests/' + name + '&& npm install && ng serve --o --port 4201', {
    shell: true
  });
  child.stderr.on('data', function (data) {
    console.error("STDERR:", data.toString());
  });
  child.stdout.on('data', function (data) {
    console.log("STDOUT:", data.toString());
  });
  child.on('exit', function (exitCode) {
    console.log("Child exited with code: " + exitCode);
  }); 
  setTimeout(timer, 9000000 ); 
   
  res.status(200).json({
    message: "Successfully opened!",
  });
});
 

function timer() {

  var spawn = require('child_process').spawn;
  var child = spawn('npm install --global kill-port && kill-port 4201', {
    shell: true
  });
  child.stderr.on('data', function (data) {
    console.error("STDERR:", data.toString());
  });
  child.stdout.on('data', function (data) {
    console.log("STDOUT:", data.toString());
  });
  child.on('exit', function (exitCode) {
    console.log("Child exited with code: " + exitCode);
  });  
  
  setTimeout(timer2, 60000);
}

function timer2(){ 
  process.exit(1)
}


module.exports = app;
