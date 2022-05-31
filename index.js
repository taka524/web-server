const express = require('express')
const path = require("path")
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//app.get('/', function (req, res) {
//  console.log(req);
//  res.send('<h1>Top Page</h1>');
//})

app.post("/api/v1/quiz", function (req, res) {
  const answer = res.body.answer;
  res.send(answer);
});

//app.get('/about', function (req, res) {
//    res.send('About Page')
//  })

const PORT = process.env.PORT || 3000;
app.listen(PORT, function (){
  console.log("I am running.");
})

console.log("最終行");