const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello, World of Appsody!");
});
 
module.exports.app = app;
