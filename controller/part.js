import part from "../models/part.js";

export const getAllParts = async (req, res) => {
  try {
    const partsList = await part.find();
    return res.status(200).json(partsList);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const addPart = async (req, res) => {
  const partData = req.body;
  try {
    const existingPart = await part.findOne({ name: partData.name });
    if (existingPart) {
      return res.status(403).json({
        message: "Part already exist",
      });
    }

    const addedPart = new part(partData);
    await addedPart.save();
    return res.status(200).json({
        addedPart,
    });
  } catch (error) {
    return res.status(409).json("Could't add a new part");
  }
};

export const updatePart = async (req, res) => {
  const { partId, updatedData, logData } = req.body;
  try {
    const existingPart = await part.findOne({ partId });
    if (!existingPart) {
      return res.status(403).json({
        message: "Part doesn't exist",
      });
    }
    const updatedPartData = await part.findOneAndUpdate(
      { partId },
      { $set: updatedData, $push: { logs: logData } },
      { new: true }
    );
    return res.status(200).json({ partId, updatedPartData });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

export const deletePart = async (req, res) => {
  const { partId } = req.body;
  try {
    const existingPart = await part.findOne({ partId });
    if (!existingPart) {
      return res.status(403).json({
        message: "Part doesn't exist",
      });
    }

    await part.deleteOne({partId});

    return res.status(200).json({
      deletedPart: partId,
    });
  } catch (error) {
    return res.status(409).json("Could't add a new part");
  }
};
