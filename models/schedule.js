import mongoose from "mongoose";

const scheduleSchema = mongoose.Schema({
  name: { type: String, required: true },
  priority: {type: String, default: "Normal"},
  currentAssetReading: {type: Date},
  nextTrigger: {type: Date},
  labourTasks: [{type: String}]
});

export default mongoose.model("Schedule", scheduleSchema);
