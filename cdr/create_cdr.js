const { v4: uuidv4 } = require('uuid');
const db = require("./ddb_client");

exports.handler =  async (event, context) => {
  console.log("input event: " + JSON.stringify(event));
  return await db.put("cdrs", { id: uuidv4(), timestamp: Date.now(), message: 'Created at ' + new Date().toISOString()});
}