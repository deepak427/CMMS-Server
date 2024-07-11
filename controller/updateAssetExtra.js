import asset from "../models/asset.js";
import part from "../models/part.js";

export const setImage = async (req, res) => {
  const { assetId, imageUrl } = req.body;

  try {
    const existingAsset = await asset.findOne({ assetId });
    if (!existingAsset) {
      return res.status(403).json({
        message: "Asset doesn't exist",
      });
    }
    const updatedAssetData = await asset.findOneAndUpdate(
      { assetId },
      { $set: { assetImage: imageUrl } },
      { new: true }
    );
    return res.status(200).json({ assetId, updatedAssetData });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const setImagePart = async (req, res) => {
  const { partId, imageUrl } = req.body;

  try {
    const existingPart = await part.findOne({ partId });
    if (!existingPart) {
      return res.status(403).json({
        message: "Part doesn't exist",
      });
    }
    const updatedPartData = await part.findOneAndUpdate(
      { partId },
      { $set: { partImage: imageUrl } },
      { new: true }
    );
    return res.status(200).json({ partId, updatedPartData });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
