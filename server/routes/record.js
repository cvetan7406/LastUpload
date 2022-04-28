const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("sample_weatherdata");
  db_connect
    .collection("data")
    .find({})
    .limit(10)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

module.exports = recordRoutes;