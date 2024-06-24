import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  user: { type: String, default: "User" },
  time: { type: Date, default: Date.now },
  note: { type: String, required: true },
});

const assetsSchema = mongoose.Schema({
  assetCategory: { type: Number, required: true },
  name: { type: String, required: true },
  assetId: { type: String, required: true },
  assetCode: { type: String, required: true },
  assetImage: { type: String },
  description: { type: String },
  location: { type: String },
  partOf: { type: String },
  account: { type: String },
  notes: { type: String },
  chargeDepartment: { type: String },
  make: { type: String },
  model: { type: String },
  serialNumber: { type: String },
  logs: [logSchema],
});

export default mongoose.model("Asset", assetsSchema);
