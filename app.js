const express = require("express");
const app = express();
const confluence = require("./confluence/confluenceUtility");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("Welcome To Troubleshooting Bot");
});

app.use("/conflunce", confluence);



module.exports = app;
