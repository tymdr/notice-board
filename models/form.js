const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    title: String,
    message: String,
    type: Number
});
userSchema.save(function (error) {
    console.log("Your bee has been saved!");
    if (error) {
        console.error(error);
    }
mongoose.model('users', userSchema);