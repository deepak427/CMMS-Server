import workOrder from "../models/workOrder.js";

export const getAllWorkOrder = async (req, res) => {
  try {
    const workOrderList = await workOrder.find();
    return res.status(200).json(workOrderList);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
