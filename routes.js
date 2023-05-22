const express = require('express')
const router = express.Router()
const Student = require('./user');

router.get("/", async (req, res) => {
    let students = await Student.find()
    res.render('studinfo',{students:students})
});
router.post("/", async (req, res) => {
    const student = new Student(req.body)
    const newstudent = await student.save()
    res.redirect('student')
});

router.post("/:id",async(req,res)=>{
    let student = await Student.findById(req.params.id)
    let updatedmarks = {
        wadmarks : student.wadmarks + 10,
        cnsmarks : student.cnsmarks + 10,
        dsbdamarks : student.dsbdamarks + 10,
        ccmarks : student.ccmarks + 10,
    }
    const updatedstudent = await Student.findByIdAndUpdate(req.params.id,{$set:updatedmarks},{new:true})
    res.redirect('/student')
})

router.get("/:id",async(req,res)=>{
    let student = await Student.findById(req.params.id)
    student = await Student.findByIdAndDelete(req.params.id)
    res.redirect('/student')
})



module.exports = router
