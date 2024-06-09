import cron from "node-cron";
import schedule from "../models/schedule.js";
import workOrder from "../models/workOrder.js";
const taskMap = {};

export const getAllSchedules = async (req, res) => {
  try {
    const schedulesList = await schedule.find();
    return res.status(200).json(schedulesList);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const setSchedule = async (req, res) => {
  const { unit, interval, name } = req.body;
  try {
    for (const key in taskMap) {
      const value = taskMap[key];
      value.stop();
    }
    var date = new Date();
    date = parseInt(date.getTime())

    if (unit == 0) {
      date=date + interval*60*100*10
    } else {
      date=date + interval*60*100*60*10
    }

    await schedule.updateOne({ name }, { $set: { nextTrigger: date } });

    var timeInterval = "";

    if (unit == 0) {
      timeInterval = `*/${interval} * * * *`;
    } else {
      timeInterval = `* */${interval} * * *`;
    }

    const task = cron.schedule(timeInterval, async () => {
      var dateCronTime = new Date();
      dateCronTime = parseInt(dateCronTime.getTime())
      await schedule.updateOne(
        { name },
        { $set: { currentAssetReading: dateCronTime } }
      );
      const addWorkOrder = new workOrder({
        name,
        currentAssetReading: dateCronTime,
      });
      await addWorkOrder.save();

      if (unit == 0) {
        dateCronTime=dateCronTime + interval*60*100*10
      } else {
        dateCronTime=dateCronTime + interval*60*100*60*10
      }
      await schedule.updateOne(
        { name },
        { $set: { nextTrigger: dateCronTime } }
      );
    });

    taskMap["demo"] = task;

    return res.status(200).json({
      name,
      nextTrigger: date,
    });
  } catch (error) {
    return res.status(409).json("Could't add a new asset");
  }
};

export const addSchedule = async (req, res) => {
  const scheduleData = req.body;
  try {
    const addedSchedule = new schedule(scheduleData);
    await addedSchedule.save();
    return res.status(200).json({
      addedSchedule,
    });
  } catch (error) {
    return res.status(409).json("Could't add a new schedule");
  }
};
