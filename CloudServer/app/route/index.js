module.exports = function (app) {
	const users = require("../controller/users.controller.js");

	// users
	app.get("/api/v1/users/getByNationality/:id", users.getByNationality);
	app.get("/api/v1/users/getByCourse/:id", users.getByCourse);
	app.get("/api/v1/users/getByYob/:id", users.getByYob);
	app.get("/api/v1/users/getAvgByType/:id", users.getAvgByType);
	app.get("/api/v1/users/getTotalCountByNationality", users.getTotalCountByNationality);

	app.get("/api/v1/users", users.GetDetails);
	app.post("/api/v1/users", users.AddDetails);
};