const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
	let todayDate = new Date();
	let day = "";

	if (todayDate === 6 || todayDate === 0) {
		res.sendFile(__dirname + "/weekends.html");
	} else {
		res.sendFile(__dirname + "/weekdays.html");
	}
});

app.listen(3000, function() {
	console.log("Server is running at localhost:3000");
});
