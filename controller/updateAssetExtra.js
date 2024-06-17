import asset from "../models/asset.js";

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
