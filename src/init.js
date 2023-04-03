import "dotenv/config";
import "regenerator-runtime";
import "./db";
import app from "./server";

const chokidar = require("chokidar");
const watcher = chokidar.watch("./views");

watcher.on("ready", function () {
  console.log("Watching for changes in Pug files...");
  watcher.on("all", function () {
    console.log("Clearing Pug module cache from server");
    Object.keys(require.cache).forEach(function (id) {
      if (/[\/\\]views[\/\\]/.test(id)) {
        delete require.cache[id];
      }
    });
  });
});
const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
