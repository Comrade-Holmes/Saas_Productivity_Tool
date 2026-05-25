
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("SaaS Productivity Tool Backend Running");
});

app.use("/api/tasks", taskRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
