const mongoose = require('mongoose');
const { Schema } = mongoose;

const noticeSchema = new Schema({
    title: String,
    message: String,
    category:{
        type: Schema.Types.ObjectId,
        ref:"Category",
        required:true
    }
});


module.exports = mongoose.model('Notice', noticeSchema);