import mongoose from "mongoose";

const assetsSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  location: { type: String}
});

export default mongoose.model("Asset", assetsSchema);
