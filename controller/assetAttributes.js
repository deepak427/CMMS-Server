import assetAttributes from "../models/assetAttributes.js";

export const getAllAssetAttributes = async (req, res) => {
  try {
    const assetDisplayAttributes = await assetAttributes.find();
    return res.status(200).json(assetDisplayAttributes);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const changeDisplayStatus = async (req, res) => {
    const { displayAttributes } = req.body
  try {
    const updatedDisplayAttributes = await assetAttributes.findOneAndUpdate(
      { _id: "66864b932b93a67b37d66f76"  },
      { $set: {displayAttributes: displayAttributes} },
      { new: true }
    );

    return res.status(200).json({
        updatedDisplayAttributes,
    });
  } catch (error) {
    return res.status(409).json("Could't chnage the attributes");
  }
};
