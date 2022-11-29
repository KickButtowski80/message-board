const fs = require("fs");
const path = require("path");

const saveToDatabase = (DB) => {
  console.log({ DB })
  fs.writeFileSync(path.resolve(__dirname, "./db.json"), JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
};

module.exports = { saveToDatabase };
