const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointment = new Schema({
    appointment_id : {
        type : String,
    },
    patient_name : {
        type : String,
        required: true
    },
    diagnosis : {
        type : String,
        required: true
    },
    dentist_name : {
        type : String,
        required: true
    },
    phone : {
        type : Number,
        required: true
    },
    appointment_date : {
        type : Date,
        required: true
    },
    appointment_time : {
        type : String,
        required: true
    }
})

const Appointment = mongoose.model("Appointment",appointment);

module.exports = Appointment;