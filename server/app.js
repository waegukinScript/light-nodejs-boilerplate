const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const logger = require("morgan");
const chalk = require("chalk");
const errorHandler = require("errorhandler");
const dotenv = require("dotenv");

const path = require("path");

const sass = require("node-sass-middleware");

// Load environment variables from .env file,
dotenv.config({ path: ".env" });

// Controllers (route handlers).
const homeController = require("./controllers/home");
const aboutController = require("./controllers/about");
const contactController = require("./controllers/contact");

const app = express();

// Express configuration
app.set("host", process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0");
app.set("port", process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(compression());
app.use(
  sass({
    src: path.join(__dirname, "../public"),
    dest: path.join(__dirname, "../public")
  })
);
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.disable("x-powered-by");

app.use(
  "/",
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);
app.use(
  "/js/lib",
  express.static(path.join(__dirname, "../node_modules/popper.js/dist/umd"), {
    maxAge: 31557600000
  })
);
app.use(
  "/js/lib",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js"), {
    maxAge: 31557600000
  })
);
app.use(
  "/js/lib",
  express.static(path.join(__dirname, "../node_modules/jquery/dist"), {
    maxAge: 31557600000
  })
);

// Primary app routes
app.get("/", homeController.index);
app.get("/about", aboutController.getAbout);
app.get("/contact", contactController.getContact);
app.post("/contact", contactController.sendEmail);

// Error Handler
if (process.env.NODE_ENV === "development") {
  // only use in development
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Server Error");
  });
}

// Start Express server
app.listen(app.get("port"), () => {
  console.log(
    "%s App is running at http://localhost:%d in %s mode",
    chalk.green("✓"),
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

module.exports = app;
