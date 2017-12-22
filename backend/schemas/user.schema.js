const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {type: String, require: true, unique: true},
    password: {type: String, require: true},
    last_login: {type: Number},
    projects : [{type: Schema.Types.ObjectId, ref: "Project", unique: false}]
});

const User = mongoose.model('User', userSchema);

module.exports = User;