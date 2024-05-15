import schedule from "../models/schedule.js";
import task from "../models/task.js";

export const getAllTasks = async (req, res) => {
    try {
      const tasksList = await task.find();
      return res.status(200).json(tasksList);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  };

export const addTask = async (req, res) => {
  const taskData = req.body;
  try {
    const addTask = new task(taskData);
    await addTask.save();
    return res.status(200).json({
      message: "Added task successfully",
    });
  } catch (error) {
    return res.status(409).json("Could't add a new task");
  }
};

export const addLabourTask = async (req, res) => {
    const {name, newTask} = req.body;
    try {
      const existingSchedule = await schedule.findOne({ name });
      if (!existingSchedule) {
        return res.status(403).json({
          message: "schedule doesn't exist",
        });
      }
      await schedule.updateOne(
        { name },
        { $push: { labourTasks: newTask } }
      );
      return res.status(200).json({ message: "Updated Successfully"});
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  };