import mongoose from "mongoose";

const LocatedAtSchema = mongoose.Schema({
  code: { type: String, required: true },
  description: {type: String, required: true},
});

export default mongoose.model("LocatedAt", LocatedAtSchema);
