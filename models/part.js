import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  user: { type: String, default: "User" },
  time: { type: Date, default: Date.now },
  note: { type: String, required: true },
});

const stockSchema = new mongoose.Schema({
  location: { type: String, },
  qtyOnHand: { type: String},
  aisle: { type: String, },
  site: { type: String, },
  minQty: { type: String, },
  bin: { type: String, },
  row: { type: String, },
});

const partSchema = mongoose.Schema({
  partCategory: { type: String },
  name: { type: String, required: true },
  partId: { type: String, required: true },
  partCode: { type: String, required: true },
  partImage: { type: String },
  description: { type: String },
  account: { type: String },
  chargeDepartment: { type: String },
  make: { type: String },
  model: { type: String },
  lastPrice: { type: String },
  logs: [logSchema],
  stockLevelPerLocation: [stockSchema]
});

export default mongoose.model("Parts", partSchema);
