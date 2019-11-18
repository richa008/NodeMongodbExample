

exports.addDocument = (db, document, collectionName) => {
    const collection = db.collection(collectionName);
    return collection.insert(document);
};

exports.getDocuments = (db, collectionName) => {
    const collection = db.collection(collectionName);
    return collection.find({}).toArray();
};

exports.deleteDocument = (db, document, collectionName) => {
    const collection = db.collection(collectionName);
    return collection.deleteOne(document);
};

exports.updateDocument = (db, document, update, collectionName) => {
    const collection = db.collection(collectionName);
    return collection.updateOne(document, { $set: update }, null);
};