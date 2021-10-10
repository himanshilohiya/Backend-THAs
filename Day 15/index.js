// dependencies
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const sequelize = require("./database/index");
require("dotenv").config();
const passport = require("passport");

// importing routers
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const dashBoardRouter = require("./routes/dashboard");
const productsRouter = require("./routes/products");

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SECRET_KEY,
    cookie: { maxAge: 1200000 },
    proxy: true,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./middlewares/passport")(passport);

// for debugging
app.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
});

// routes
app.get("/", (req, res) => res.send("Welcome to za warudo!"));
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/dashboard", dashBoardRouter);
app.use("/products", productsRouter);

app.use((error, req, res, next) => {
  console.log(error);
});

sequelize
  .sync()
  .then(() => {
    console.log("Server is running at port 5000");
    app.listen(5000);
  })
  .catch((error) => {
    console.log(error.message);
  });
