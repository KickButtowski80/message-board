const fs = require('fs')

const saveToDatabase = (DB) => {
    fs.writeFileSync("./db.json",
        JSON.stringify(DB.messages, null, 2), {
        encoding: "utf-8",
        // flag: "a+"
    });
};

module.exports = { saveToDatabase };

