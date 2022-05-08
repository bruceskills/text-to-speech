const express = require('express')
const app = express()

const path = require("path")
const bodyParser = require("body-parser")
const moduleVoice = require('./app/voice')

const open = require("open")

const viewsDir = path.join(__dirname, 'views')
const staticDir = path.join(__dirname, 'static')

app.use(express.static(viewsDir))
app.use(express.static(staticDir))

app.use(bodyParser.urlencoded(
	{
		extended: false
	}
))

app.get('/', (req, res) => res.sendFile(path.join(viewsDir, 'index.html')))

app.post('/audio', (req, res) => {
	let text = req.body.text
	moduleVoice.playMessage(res, text)
})

module.export = app;

app.listen(3000, () => {
	console.log("Server is running in port 3000")
})





