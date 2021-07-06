const express = require("express");
const expressAsyncHandler = require("express-async-handler");
// const { run } = require("../Scrapers.js");
// import db from "../Database/DB.js";
// const medium = require("../medium.js");
const mediumLatest = require("../newBenu.js");
const mediumDB = require("../Database/DbSchema.js");

const WebScaperRouter = express.Router();

WebScaperRouter.get(
  "/fetchingdata",
  expressAsyncHandler(async (req, res) => {
    const mediumUrl = await mediumDB.find();

    res.send(mediumUrl);
  })
);

WebScaperRouter.get(
  "/creatingdata",
  expressAsyncHandler(async (req, res) => {
    console.log(req.query);
    const mediumdata = await mediumLatest.initialize(req.query.name);
    const result = new mediumDB({
      creatorName: mediumdata.creator,
      postTitle: mediumdata.title,
      detailPosted: mediumdata.datePosted,
      detailReading: mediumdata.timePosted,
      postUrl: mediumdata.url,
    });
    const savingData = await result.save();

    console.log(mediumdata);

    res.send(mediumdata);
  })
);
//

// WebScaperRouter.get(
//   "/creatingPdf",
//   expressAsyncHandler(async (req, res) => {
//     console.log(req.query);
//     const mediumdata = await pdfCreate.pdfGen(req.query.name);
//     // console.log(mediumdata);

//     res.send("success");
//   })
// );

module.exports = WebScaperRouter;
