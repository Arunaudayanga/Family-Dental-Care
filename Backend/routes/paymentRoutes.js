const router = require("express").Router();
let payment = require('../models/paymentModel');

router.route("/add").post((req,res)=>{


    //console.log("requesttttttttttttttt", req.body);

    console.log("request", req.body);

    
    const paymentId = req.body.paymentId;
    const patientName =req.body.patientName;
    const paymentType =req.body.paymentType;
    const diagnosis = req.body.diagnosis;
    const hospitalCharge=Number(req.body.hospitalCharge);
    const doctorFee=Number(req.body.doctorFee);
    const entryDate =Date(req.body.entryDate);
    const Amount =Number(req.body.Amount);
    const appointmentID =req.body.appointmentID;

    const newpayment = new payment({
        
        paymentId, 
        patientName,
        paymentType,
        diagnosis,
        hospitalCharge,
        doctorFee,
        entryDate,
        Amount,
        appointmentID
    })

    //console.log("newPayment", newpayment);
    newpayment.save().then(()=>{
        res.json("Payment Added")
    }).catch((err)=>{
        console.log(err);
    })


})

router.route("/").get((req,res)=>{
    //console.log("get all payment")
    payment.find().then((payment)=>{
        res.json(payment)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res)=>{
    const id =req.params.id;
    console.log("paymentID",id);
   console.log("dataaa", req.body);
    const{paymentId,patientName,paymentType,diagnosis,hospitalCharge,doctorFee,entryDate,Amount,appointmentID} = req.body;
    
    const updatePayment ={
        paymentId, 
        patientName,
        paymentType,
        diagnosis,
        hospitalCharge,
        doctorFee,
        entryDate,
        Amount,
        appointmentID
    }
    
const update = await payment.findByIdAndUpdate(id,updatePayment)
.then(()=>{
    res.status(200).send({status: "Updated"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"error with updating data", error: err.massage});
})
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId =req.params.id;

    await payment.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with deleting data", error: err.massage});
    })
})


router.route("/get/:paymentId").get(async(req,res)=>{
    let userId =req.params.paymentId;
    const user= await payment.findOne({paymentId:userId}).then((pay)=>{
        res.status(200).send({status: "fetched", pay})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with getting data", error: err.massage});
    })
})
module.exports = router;