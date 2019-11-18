const mongoClient = require("mongodb").MongoClient;
const dbOperations = require("./operations");

const url = "mongodb://localhost:27017/";
const dbName = "myDatabase";

mongoClient.connect(url)
    .then((client) =>  {

    console.log("Connected to server");
    const db = client.db(dbName);
    const collectionName = "dishes";
    dbOperations.addDocument(db, { name: "Pizza", description: "Bread with cheese" }, collectionName)
    .then((result) => {
        console.log("Insert Document:\n", result.result);
        return dbOperations.getDocuments(db, collectionName);
    })
    .then((results) => {
        console.log("Found Documents:\n", results);
        return dbOperations.updateDocument(db, { name: "Pizza" }, { description: "Updated description" }, collectionName);
    }).then((result) => {
        console.log("Updated Document:\n", result.result);
        return dbOperations.getDocuments(db, collectionName);
    }).then((results) => {
        console.log("Found Documents:\n", results);
        return dbOperations.deleteDocument(db, { name: "Pizza" }, collectionName);
    }).then((results) => {
        console.log("Deleted Documents:\n", results.result);
        return dbOperations.getDocuments(db, collectionName);
    }).then((results) => {
        console.log("Found Documents:\n", results);
        return db.dropCollection(collectionName);
    }).then((result) => {
        console.log("Dropped Collection: ", result);
        return client.close();
    })
    .catch((err) => console.log(err));
})
.catch((err) => console.log(err));