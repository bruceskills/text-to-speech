const fs = require("fs")
const Gtts = require("gtts")
const say = require("say")

let language = "PT"

exports.saveFile = function (res, text) {

	let outputFile = Date.now() + "-output.mp3"

	let voice = new Gtts(text, language)

	voice.save(outputFile, function (err, result) {
		if (err) {
			fs.unlinkSync(outputFile)
			res.send("Unable to convert to audio")
		}
		res.download(outputFile, (err) => {
			if (err) {
				fs.unlinkSync(outputFile)
				res.send("Unable to download the file")
			}
			fs.unlinkSync(outputFile)
		})
	})
}

exports.playMessage = function (res, text) {
	say.speak(text, language, 1.0)
	this.saveFile(res, text)
}