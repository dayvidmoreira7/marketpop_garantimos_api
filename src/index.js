require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./controllers/auth")(app);
require("./controllers/user")(app);
require("./controllers/client")(app);

const User = require("./models/user");

app.get("/", (req, res) => {
  res.send(`Main`);
});

app.listen(process.env.PORT, () => {
  console.log("Listening");
});
