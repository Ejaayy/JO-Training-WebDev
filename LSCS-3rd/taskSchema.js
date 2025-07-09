import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
    {
    
        // task
        task: {
            type: String,
            required: true,
        },

        //status
        status: {
            type: String,
            enum: ["Not Started", "In Progress", "Finished"],
            default: "Not Started",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;