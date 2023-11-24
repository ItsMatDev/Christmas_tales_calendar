const cors = require("cors");
const express = require("express");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

const port = 5010;

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });

app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

app.use(express.static("public"));

const tales = require("./data.json");

const talesData = (req, res) => {
  res.status(200).json(tales);
};
app.get("/tales", talesData);
