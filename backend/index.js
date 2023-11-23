const cors = require("cors");
const express = require("express");

const app = express();
app.use(
	cors({
		origin: ["http://localhost:5173/"],
	})
);

const port = 5000;

app.listen(port, () => {
	console.info(`Server is listening on port ${port}`);
}).on("error", (err) => {
	console.error("Error:", err.message);
});

app.get("/", (req, res) => {
	res.send("Welcome to Express");
});

// const welcomeName = (req, res) => {
// 	res.send(`Welcome ${req.params.name}`);
// };

// app.get("/users/:name", welcomeName);

const tales = require("./data.json");

const tales = (req, res) => {
	res.status(200).json(tales);
};
app.get("/tales", tales);
