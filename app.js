const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

let items = ["buy food", "eat food", "eat more food"];
let workItems = [];

app.get("/", function(req, res) {
	let day = date.getDate();
	res.render("list", { day: day, items: items });
});

app.get("/work", function(req, res) {
	res.render("list", { day: "Work List", items: workItems });
});

app.get("/about", function(req, res) {
	res.render("about");
});

app.post("/", function(req, res) {
	let item = req.body.newItem;
	if (req.body.list === "Work List") {
		workItems.push(item);
		res.redirect("/work");
	} else {
		items.push(item);
		res.redirect("/");
	}
});

app.listen(3000, function() {
	console.log("Server is running at localhost:3000");
});
