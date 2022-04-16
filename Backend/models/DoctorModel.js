const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctor = new Schema({
    doctor_id : {
        type : String,
    },
    doctor_name : {
        type : String,
        
    },
    gender : {
        type : String,
        
    },
    email : {
        type : String,
        
    },
    phone : {
        type : Number,
        
    },
    password : {
        type : String,
        
    },
    
})

const Doctor = mongoose.model("Doctor",doctor);

module.exports = Doctor;