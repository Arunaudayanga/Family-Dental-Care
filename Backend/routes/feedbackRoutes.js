const router = require("express").Router();
let feedback = require("../models/feedbackModel");

router.route("/add").post((req,res)=>{

    const feedback_id = req.body.feedback_id;
    const patient_name = req.body.patient_name;
    const diagnosis = req.body.diagnosis;
    const dentist_name = req.body.dentist_name;
    const rating = Number(req.body.rating);
    const feedback_description = (req.body.feedback);

    const newfeedback = new feedback({

        feedback_id,
        patient_name,
        diagnosis,
        dentist_name,
        rating,
        feedback_description
    })

    newfeedback.save().then(()=>{
        res.json("Feedback Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    feedback.find().then((feedback)=>{
        res.json(feedback)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const { feedback_id,patient_name,diagnosis,dentist_name,rating,feedback_description} =req.body;

    const updatefeedback = {
        feedback_id,
        patient_name,
        diagnosis,
        dentist_name,
        rating,
        feedback_description
    }

    const update = await feedback.findByIdAndUpdate(userId,updatefeedback)
    .then(() => {
    res.status(200).send({status: "User updated"})
 }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data"});
 })

})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await feedback.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User delete"});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message})
    })

})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await feedback.findById(userId)
    .then((feedback) => {
        res.status(200).send({status: "User fetched", feedback});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error: err.message});
    })
})

module.exports = router;