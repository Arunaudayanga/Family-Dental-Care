const router = require("express").Router();
let doctor = require("../models/DoctorModel");

router.route("/add").post((req,res)=>{
    const doctor_id = req.body.doctor_id;
    const doctor_name = req.body.doctor_name;
    const gender = req.body.gender;
    const email = req.body.email;
    const phone = Number(req.body.phone);
    const password = req.body.password;
    

    const newDoctor = new doctor({

        doctor_id : doctor_id,
        doctor_name : doctor_name,
        gender:gender,
        email:email,
        phone:phone,
        password:password
        
    })

    newDoctor.save().then(()=>{
        res.json("Doctor Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get/:doctorId").get(async(req,res)=>{
    let userId =req.params.doctorId;
    const user= await doctor.findOne({doctor_id:userId}).then((doctor)=>{
        res.status(200).send({status: "fetched", doctor})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with getting data", error: err.massage});
    })
})

router.route("/getByEmail/:doctorEmail").get(async(req,res)=>{
    let userEmail =req.params.doctorEmail;
    const user= await doctor.findOne({email:userEmail}).then((doctor)=>{
        res.status(200).send({status: "fetched", doctor})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with getting data", error: err.massage});
    })
})

router.route("/update/:id").put(async(req,res)=>{
    const id =req.params.id;
    ;

    const {oId,doctor_id,doctor_name,gender,email,phone,password} =req.body;
    
    const updateDoctor ={
        
        doctor_id, 
        doctor_name,
        gender,
        email,
        phone,
        password
    }
    
const update = await doctor.findByIdAndUpdate(id,updateDoctor)
.then(()=>{
    res.status(200).send({status: "Updated"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"error with updating data", error: err.massage});
})
})

module.exports = router;