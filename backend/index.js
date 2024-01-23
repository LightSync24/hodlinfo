const express = require("express");
const connectDB = require("./db/connect");
const { fetchData } = require("./fetch/fetchAPI");
const dataRoutes = require("./routers/dataRoutes");
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;
app.use("/data", dataRoutes);
const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://kshitij:1234@nodeexpressprojects.va1zekv.mongodb.net/hodlinfo?retryWrites=true&w=majority"
    );
    await fetchData();
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
