import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  user: { type: String, default: "User" },
  time: { type: Date, default: Date.now },
  note: { type: String, required: true },
});

const scheduleSchema = mongoose.Schema({
  scheduleId: { type: String, required: true },
  SchedulingCode: { type: String, required: true },
  description: { type: String },
  asset: { type: String },
  workOrderStatusName: { type: String },
  workOrderStatusControl: { type: String },
  maintananceType: { type: String },
  priority: { type: String },
  project: {type: String},
  logs: [logSchema],

  currentAssetReading: { type: Date },
  nextTrigger: { type: Date },
  labourTasks: [{ type: String }],
});

export default mongoose.model("Schedule", scheduleSchema);
