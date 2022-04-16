const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
   /* useCreateIndex : true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false*/
});

const connection = mongoose.connection;
connection.once("open", ()=> {
    console.log("Mongodb Connection success!");
})



//import payment route
const paymentRouter = require("./routes/paymentRoutes.js");
app.use("/payment", paymentRouter);

//Import feedback route
const feedbackRouter = require("./routes/feedbackRoutes.js");
app.use("/feedback", feedbackRouter);

//import appointment route
const appointmentRouter = require("./routes/appointmentRoutes.js");
app.use("/appointment", appointmentRouter);

const doctorRouter = require("./routes/DoctorRoutes.js");
app.use("/Doctor", doctorRouter);

app.listen(PORT,() =>{
    console.log(`server is up and running on port number: ${PORT}`)
})