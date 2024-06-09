import mongoose from "mongoose";

const taskGroupSchema = mongoose.Schema({
  category: { type: String, required: true },
  tasks: [{ type: String}],
});

export default mongoose.model("TaskGroup", taskGroupSchema);
