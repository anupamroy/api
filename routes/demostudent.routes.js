module.exports = app=>{
    const student = require("../controllers/demostudent.controller.js");
    
    app.post("/student",student.create);
    app.get("/student/:email/:classId",student.findByEmail);
}