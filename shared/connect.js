const mongoose = require("mongoose")
exports.connect = () => {
    try{
        mongoose.connect('mongodb+srv://Vinoth:4FeMtEMMBJFF6CyU@cluster0.g1rip.mongodb.net/todolist?retryWrites=true&w=majority');
  
        console.log("MongoDB Connected")
    } catch(err) {
        console.log(err);
    }
}
