const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paymentSchema = new Schema ({
   
   paymentId: {type: String},
   patientName: {type:String},
   paymentType: {type:String},
   diagnosis:{type:String},
   hospitalCharge:{type:Number},
   doctorFee:{type:Number},
   entryDate:{type:Date},
   Amount:{type:Number},
   appointmentID: {type:String}
    
     

});


const payment = mongoose.model("payment",paymentSchema);

module.exports = payment;
