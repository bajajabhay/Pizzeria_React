const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const mongoURL = 'mongodb://localhost:27017';

//DATABASE AND COLLECTION NAME
const DATABASE_NAME = "pizza";
const COLLECTION1 = "order";
const COLLECTION2 = "ingredients";

//HTTP GET REQUEST for fecthing COLLECTION1(pizza details)

router.get('/pizza_details', (req, res, next) => {
    mongoClient.connect(mongoURL,(err, client) => {
        if (err) throw err;
        const dbName = client.db(DATABASE_NAME);
        const collectionObj = db.collection(COLLECTION1);
        collectionObj.find({}).toArray((err, result) => {
            if (err) throw err;
            res.send(result);
        });
    });
});

//HTTP GET REQUEST for fecthing COLLECTION2(ingredients details)
router.get("/toppings",(req, res, next) => {
    mongoClient.connect(mongoURL, (err, client) => {
        if (err) throw err;
        const dbName = client.db(DATABASE_NAME);
        const collectionObj = dbName.collection(COLLECTION2);
        collectionObj.find({}).toArray((err, result) => {
            if (err) throw err;
            res.send(result);
        });
    });
});
module.exports = router;