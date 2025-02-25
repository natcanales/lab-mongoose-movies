const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebrity = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
}, {
    timestamps: true
})

const Celebrity = mongoose.model("Celebrity", celebrity)

module.exports = Celebrity