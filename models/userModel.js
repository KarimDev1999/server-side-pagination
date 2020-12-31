const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true }, ad
});


module.exports = mongoose.model('User', userSchema);