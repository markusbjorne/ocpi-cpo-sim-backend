const AWS = require("aws-sdk");

const client = new AWS.DynamoDB.DocumentClient();


const put = async (table, item) => {
  return await client.put({
    TableName : table,
    Item: item
  }).promise();
}

module.exports = {
  put
}