// const db = require('monk')('localhost/db');
// const connectionString = process.env.MONGODB_URI || 'localhost/mevnStack';
// const db = monk(connectionString);
const db = require('./db.json')
module.exports = db;