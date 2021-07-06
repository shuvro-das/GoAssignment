const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const WebScraperRouter = require("./router/WebScaperRouter.js");
const mongoose = require("mongoose");

// import url from "url";

const port = 5000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

// var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
// console.log(fullUrl);
// function fullUrl(req) {
//   return url.format({
//     protocol: req.protocol,
//     host: req.get("host"),
//     pathname: req.originalUrl,
//   });
// }

app.use("/api", WebScraperRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const connection_url =
  "mongodb+srv://admin1:XxvqZUvGf8LKYJCR@cluster0.vfqse.mongodb.net/goCometAssignment?retryWrites=true&w=majority";

mongoose.connect(
  connection_url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("Database Connected");
  }
);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
