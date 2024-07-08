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

export const deleteTaskGroups = async (req, res) => {
  const { categories } = req.body;
  try {
    const existingTaskGroup = await taskGroup.findOne({ category: categories[0] });
    if (!existingTaskGroup) {
      return res.status(403).json({
        message: "Category doesn't exist",
      });
    }

    for (let index = 0; index < categories.length; index++) {
      const element = categories[index];
      await taskGroup.deleteOne({category: element});
    }

    return res.status(200).json({
      deletedTaskGroups: categories,
    });
  } catch (error) {
    return res.status(409).json("Could't delete task groups");
  }
};
