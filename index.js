require("dotenv").config();
const connection = require("./db.config");
const express = require("express");
const app = express();
const port = process.env.PORT || 4040;
const HomeRouter = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", HomeRouter);

app.get("/", (req, res) => {
	res.send("home");
});

HomeRouter.get("/dany", (req, res) => {
	connection.query("SELECT * FROM page", (err, results) => {
		if (err) {
			console.log("error");
		} else {
			res.status(200).json(results);
		}
	});
});

app.listen(port, (err) => {
	if (err) {
		throw new Error("some problem happen");
	}
	console.log(`server is listening on port ${port}`);
});
