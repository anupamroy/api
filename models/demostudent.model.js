const sql = require('./db');

const Student = function(student){
    this.demo_class_id = student.demo_class_id;
    this.student_name = student.student_name;
    this.student_email= student.student_email;
    this.isd_code= student.isd_code;
    this.student_phone = student.student_phone;
    this.parent_name = student.parent_name;

}

Student.create = (newStudent,result)=>{
    sql.query("INSERT INTO ca_demo_registration SET ?",newStudent,(err,res)=>{
        if(err){
            console.log("error",err);
            result(err,null);
            return;
        }

        console.log("created student: ", { id: res.insertId, ...newStudent });
        result(null, { id: res.insertId, ...newStudent });
    });
}

Student.findByEmail = (studentEmail,classId, result) => {
    console.log
    sql.query(`SELECT * FROM ca_demo_registration WHERE student_email = '${studentEmail}' and demo_class_id=${classId}` , (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found student: ", res[0]);
        result(null,res.length)
        
      }else{
        result(null,res.length)
    }
  
     
    });
  };

module.exports = Student;