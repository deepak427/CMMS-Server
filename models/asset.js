import mongoose from "mongoose";

const assetsSchema = mongoose.Schema({
  assetCategory: {type: Number, required: true},
  name: { type: String, required: true },
  assetId: { type: String, required: true },
  assetCode: { type: String, required: true },
  description: {type: String},
  location: { type: String },
  partOf: {type: String},
  account: {type: String},
  notes: {type: String},
  chargeDepartment: {type: String},
  make: {type: String},
  model: {type: String},
  serialNumber: {type: String},
});

export default mongoose.model("Asset", assetsSchema);
