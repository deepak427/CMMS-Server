import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
  code: { type: String, required: true },
  description: {type: String, required: true},
});

export default mongoose.model("Account", accountSchema);
