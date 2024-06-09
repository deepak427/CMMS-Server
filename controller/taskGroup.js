import taskGroup from "../models/taskGroup.js";

export const addTaskGroup = async (req, res) => {
  const taskGroupData = req.body;
  try {
    const existingtaskGroup = await taskGroup.findOne({ category: taskGroupData.category });
    if (existingtaskGroup) {
      return res.status(403).json({
        message: "Task Group already exist",
      });
    }
    const addedTaskGroup = new taskGroup(taskGroupData);
    await addedTaskGroup.save();
    return res.status(200).json({
      addedTaskGroup,
    });
  } catch (error) {
    return res.status(409).json("Could't add a new task");
  }
};
