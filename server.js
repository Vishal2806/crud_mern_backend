const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbConfig = require("./config/database.config.js");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const UserRoute = require("./routes/user.js");
app.use("/user", UserRoute);
const ProductRoute = require("./routes/product.js");
app.use("/product",ProductRoute);
//set up DB

mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Databse Connected Successfully!!");
  })
  .catch((err) => {
    console.log("Could not connect to the database", err);
    process.exit();
  });
app.get("/", (req, res) => {
  res.json({ message: "Hello Crud Node Express" });
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
