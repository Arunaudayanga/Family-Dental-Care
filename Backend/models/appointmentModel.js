const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointment = new Schema({

    appointment_id : {
        type : String,
    },
    patient_name : {
        type : String,
        
    },
    diagnosis : {
        type : String,
        
    },
    dentist_name : {
        type : String,
        
    },
    phone : {
        type : Number,
        
    },
    appointment_date : {
        type : Date,
    
    },
    appointment_time : {
        type : String,
        
    }
})

const Appointment = mongoose.model("Appointment",appointment);

module.exports = Appointment;