const router = require("express").Router();
let appointment = require("../models/appointmentModel");

router.route("/add").post((req,res)=>{
    const appointment_id = req.body.appointment_id;
    const patient_name = req.body.patient_name;
    const diagnosis = req.body.diagnosis;
    const dentist_name = req.body.dentist_name;
    const phone = Number(req.body.phone);
    const appointment_date = Date(req.body.appointment_date);
    const appointment_time = req.body.appointment_time;

    const newappointment = new appointment({

        appointment_id,
        patient_name,
        diagnosis,
        dentist_name,
        phone,
        appointment_date,
        appointment_time
    })

    newappointment.save().then(()=>{
        res.json("Appointment Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    appointment.find().then((appointment)=>{
        res.json(appointment)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const { appointment_id, patient_name, diagnosis, dentist_name, phone, appointment_date, appointment_time} =req.body;

    const updateappointment = {
        appointment_id,
        patient_name,
        diagnosis,
        dentist_name,
        phone,
        appointment_date,
        appointment_time
    }

    const update = await appointment.findByIdAndUpdate(userId,updateappointment)
    .then(() => {
        res.status(200).send({status: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

    router.route("/delete/:id").delete(async(req,res) => {
        let userId = req.params.id;

        await appointment.findByIdAndDelete(userId)
        .then(()=>{
            res.status(200).send({status: "User delete"});
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({status: "Error with delete user", error: err.message})
        })
    })

    router.route("/get/:id").get(async(req,res)=>{
        let userId = req.params.id;
        const user = await appointment.findById(userId)
        .then((appointment)=> {
            res.status(200).send({status: "User fetched", appointment});
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({status: "Error with get user",error: err.message});
        })
    })
    module.exports = router;
