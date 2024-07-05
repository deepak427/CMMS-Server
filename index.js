import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import bodyParser from 'body-parser';

import assetsroutes from "./routes/assets.js"
import scheduleroutes from "./routes/schedule.js"
import taskroutes from "./routes/task.js"
import workOrderroutes from "./routes/workOrder.js"
import taskGrouproutes from "./routes/taskGroup.js"
import accountRoutes from "./routes/account.js"
import assetAttributesRoutes from "./routes/assetAttributes.js"

mongoose.set("strictQuery", true);

const app = express();
dotenv.config();

app.use(express.json({ limit: "300mb", extended: true }));
app.use(express.urlencoded({ limit: "300mb", extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Give and go server");
});

app.use('/assets', assetsroutes);
app.use('/schedule', scheduleroutes)
app.use('/task', taskroutes)
app.use('/workorder', workOrderroutes)
app.use('/taskGroup', taskGrouproutes)
app.use('/account', accountRoutes)
app.use('/assetAttributes', assetAttributesRoutes)

const PORT =  5555;

const DATABASE_URL =  process.env.CONNECTION_URL;

mongoose
  .connect(DATABASE_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));