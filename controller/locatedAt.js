import locatedAt from "../models/locatedAt.js";

export const getAllLocatedAt = async (req, res) => {
  try {
    const alocatedAtList = await locatedAt.find();
    return res.status(200).json(alocatedAtList);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const addLocatedAt = async (req, res) => {
  const { locatedAtCode, locatedAtDescription } = req.body;
  try {
    const existingLocatedAt = await locatedAt.findOne({ code: locatedAtCode });
    if (existingLocatedAt) {
      return res.status(403).json({
        message: "already exist",
      });
    }

    const addedLocatedAt = new locatedAt({
      code: locatedAtCode,
      description: locatedAtDescription,
    });
    await addedLocatedAt.save();

    return res.status(200).json({
        addedLocatedAt,
    });
  } catch (error) {
    return res.status(409).json("Could't add a new locaetd at");
  }
};
