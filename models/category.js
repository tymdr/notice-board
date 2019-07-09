const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: String,
    slug: String
});


module.exports = mongoose.model('Category', categorySchema);