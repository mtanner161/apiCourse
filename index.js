// Michael Tanner First Node Application using ExpressJS

const express = require("express"); //get express initalzed
const app = express();

app.use("/test", (req, res) => {
  console.log("Recived request 3");
  res.status(200).send("Time");
});

app.listen(3000, () => {
  console.log("I am ready and listining");
});
