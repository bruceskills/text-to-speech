const express = require('express')
const { get } = require('request')
const open = require('open');

const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// let ola = new users('a');

// console.log(ola);


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3030, () => console.log('Listening on port 3030!'))

open('http://localhost:3030/examples');

