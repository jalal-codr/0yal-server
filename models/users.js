const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    email:String,
    name:String,
    photo:String
})
const users = mongoose.model('users',usersSchema);


module.exports = users;