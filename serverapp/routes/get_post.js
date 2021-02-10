const express = require("express");
const router = express.Router();
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const mongoURL = "mongodb://localhost:27017";

const DATABASE_NAME = "pizza";
const COLLECTION1 = "order";
const COLLECTION2 = "ingredients";

router.get("/pizza_details", (req, res, next) => {
  mongoClient.connect(mongoURL, (err, client) => {
    const dbNAME = client.db(DATABASE_NAME);
    const collectionObj = dbNAME.collection(COLLECTION1);
    collectionObj.find({}).toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
});
router.get("/toppings", (req, res, next) => {
  mongoClient.connect(mongoURL, (err, client) => {
    const dbNAME = client.db(DATABASE_NAME);
    const collectionObj = dbNAME.collection(COLLECTION2);
    collectionObj.find({}).toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
});

module.exports = router;
