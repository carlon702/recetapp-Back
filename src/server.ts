import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";

const port = process.env.PORT || 4200;

mongoose
  .connect(
    process.env.DB_URL ||
      "mongodb+srv://recetapp-admin:LZ3piegAer5WvQ16@recetapp.ji0p50a.mongodb.net/recetapp?retryWrites=true&w=majority&appName=recetapp"
  )
  .then(() => {
    console.log("Mongoose connected");
    app.listen(port, () => {
      console.log("Server is running on port " + port);
    });
  })
  .catch(console.error);
