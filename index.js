var express = require('express');
var app = express();
var Datastore = require('nedb'),
  db = new Datastore({
    filename: 'db.json',
    autoload: true
  });
const cors = require('cors')
const { pickBy, identity } = require('lodash')

app.get('/people', cors(), (req, res) => {
  const { sex, age } = req.query

  const params = {
    gender: sex,
    age: age && { [age]: 30 }
  }
  db.find(pickBy(params, identity), {}, (err, docs) => {
    console.log(params, docs)
    const people = docs
    res.contentType('text/html');
    res.status(200).send(people);
  });
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});