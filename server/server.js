require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const connectDb = require("./utils/db");
const authRoute = require("./router/auth-router");

//handling cors policy and hosting
const corsOptions = {
  origin: [process.env.MYPORT],
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 8000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port : ${PORT}`);
  });
});
