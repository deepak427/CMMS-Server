import asset from "../models/asset.js";

export const getAllAssets = async (req, res) => {
  try {
    const assetsList = await asset.find();
    return res.status(200).json(assetsList);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const addAsset = async (req, res) => {
  const assetData = req.body;
  try {
    const existingAsset = await asset.findOne({ name: assetData.name });
    if (existingAsset) {
      return res.status(403).json({
        message: "Asset already exist",
      });
    }

    const addedAsset = new asset(assetData);
    await addedAsset.save();
    return res.status(200).json({
      addedAsset,
    });
  } catch (error) {
    return res.status(409).json("Could't add a new asset");
  }
};

export const updateAsset = async (req, res) => {
  const { assetId, updatedData, logData } = req.body;
  try {
    const existingAsset = await asset.findOne({ assetId });
    if (!existingAsset) {
      return res.status(403).json({
        message: "Asset doesn't exist",
      });
    }
    const updatedAssetData = await asset.findOneAndUpdate(
      { assetId },
      { $set: updatedData, $push: { logs: logData } },
      { new: true }
    );
    return res.status(200).json({ assetId, updatedAssetData });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
