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
    console.log(assetData)

    const addAsset = new asset(assetData);
    await addAsset.save();
    return res.status(200).json({
      message: "Added asset successfully",
    });
  } catch (error) {
    return res.status(409).json("Could't add a new asset");
  }
};

export const updateAsset = async (req, res) => {
  const {name, updatedData} = req.body;
  try {
    const existingAsset = await asset.findOne({ name });
    if (!existingAsset) {
      return res.status(403).json({
        message: "Asset doesn't exist",
      });
    }
    await asset.updateOne(
      { name },
      { $set: updatedData }
    );
    return res.status(200).json({ message: "Updated Successfully"});
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};


