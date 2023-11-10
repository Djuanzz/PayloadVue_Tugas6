import express from "express";
import payload from "payload";
import cors from "cors";

require("dotenv").config();
const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET, POST, OPTIONS, PATCH, DELETE, PUT",
  })
);

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(process.env.PORT, () => {
    payload.logger.info(
      `Listening at http://localhost:${process.env.PORT}/admin`
    );
  });
};

start();
