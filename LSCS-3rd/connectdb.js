import mongoose from "mongoose";

const connect_db = async function(){
    try{
        await mongoose.connect("mongodb://localhost:27017/");
        console.log("Connected to the Database");
    } catch(error){
        console.log("Error when connecting to the Database");
    }
};

export default connect_db;