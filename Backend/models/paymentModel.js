const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paymentSchema = new Schema ({
   
   paymentId: String,
   patientName: String,
   paymentType: String,
   diagnosis:String,
   hospitalCharge:Number,
   doctorFee:Number,
   entryDate:Date,
   Amount:Number,
   appointmentID: String
    
     

});


const payment = mongoose.model("payment",paymentSchema);

module.exports = payment;
