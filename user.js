const mongoose = require('mongoose')
const StudentSchema = mongoose.Schema({
    studname:String,
    rollno:Number,
    wadmarks:Number,
    cnsmarks:Number,
    dsbdamarks:Number,
    ccmarks:Number
});
module.exports = new mongoose.model('Student',StudentSchema);