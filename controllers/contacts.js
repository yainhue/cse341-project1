const mongodb = require("../data/database")
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().collection("contacts").find()
    // const result = await mongodb.getDatabase().db().collection("contacts").find()
    result.toArray().then((contacts) => {
        res.setHeader("Content-Type", "aplication/json")
        res.status(200).json(contacts);
    });
};

const getSingle = async (req, res) => {
    const contactId = new ObjectId(req.params.id)
    const result = await mongodb.getDatabase().collection("contacts").find({ _id: contactId });
    result.toArray().then((contacts) => {
        res.setHeader("Content-Type", "aplication/json")
        res.status(200).json(contacts);
    });
};

module.exports = {
    getAll,
    getSingle
}