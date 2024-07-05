import mongoose from "mongoose";

const assetAttributeSchema = mongoose.Schema({
  displayAttributes: [{type: Number}]
});

export default mongoose.model("AssetAttributes", assetAttributeSchema);
