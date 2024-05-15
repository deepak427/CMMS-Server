import mongoose from "mongoose";

const workOrderSchema = mongoose.Schema({
  name: { type: String, required: true },
  priority: {type: String, default: "Normal"},
  currentAssetReading: {type: Date},
});

export default mongoose.model("WorkOrder", workOrderSchema);
