const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectSchema = new Schema({
    name:String,
    alias:String,
    tags:[String],
    description:String
});

//returns complete project collection
module.exports = mongoose.model('projects',projectSchema)