exports.getDate = function() {
	let todayDate = new Date();
	var options = {
		day: "numeric",
		weekday: "long",
		month: "long"
	};

	return todayDate.toLocaleDateString("en-US", options);
};

exports.getDay = function() {
	let todayDate = new Date();
	var options = {
		weekday: "long"
	};

	return todayDate.toLocaleDateString("en-US", options);
};
