const Student = require("../models/demostudent.model");

exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message:"Content can not be empty"
        });
    }

    const student = new Student({
        demo_class_id : req.body.demo_class_id,
        student_name: req.body.student_name,
        student_email : req.body.student_email,
        isd_code : req.body.isd_code,
        student_phone : req.body.student_phone,
        parent_name : req.body.parent_name
    
    });

    Student.create(student, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Student."
          });
        else res.json({
            message:"Student Created Successfully",
            data:data
        })
      });
    };

    exports.findByEmail = (req,res)=>{
    
    Student.findByEmail(decodeURIComponent(req.params.email),req.params.classId,(err,data)=>{
        if(err){
            res.status(500).send({
                message:
                  err.message || "Some error occurred while fetching the Student."
              });
        }

        res.status(200).json({
            datalength: data
          });
    })

};
