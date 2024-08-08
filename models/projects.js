import mongoose from "mongoose";

const ProjectsSchema = mongoose.Schema({
  code: { type: String, required: true },
  description: {type: String, required: true},
});

export default mongoose.model("Projects", ProjectsSchema);
