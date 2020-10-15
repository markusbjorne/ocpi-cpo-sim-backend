const AWS = require("aws-sdk");

const createSimulatedSession = async (req, res) => {

  const { cdr_token, location_id } = req.body;

  const validInput = cdr_token && 
    cdr_token.uid && 
    cdr_token.type &&
    cdr_token.contract_id && 
    location_id;

  if (validInput) {
    await triggerSimulatedSession(cdr_token, location_id);
    res.send({ message: `Session started at location, id: ${location_id}`}); 
  } else {
    console.log(`Invalid input: ${cdr_token}, ${location_id}`)
    res.status(400).send({ message: 'Invalid input'}); 
  }
}

const triggerSimulatedSession = async (cdrToken, locationId) => {

  console.log('Triggering simulated session');

  const lambda = new AWS.Lambda();
  
  const params = {
    FunctionName: "ocpi-cpo-sim-backend-dev-createCdr",
    InvocationType: "RequestResponse",
    Payload: JSON.stringify({ status: "created", cdrToken, locationId })
  };
  
  console.log("Lambda invoking...");

  const result = await lambda.invoke(params).promise();
  console.log("Lambda invoke, result: " + result);

};

/*   
| Property | Description | 
|-----------|----------------------------------------------------------------------------| 
| ACTIVE    | The session is accepted and active. | 
| COMPLETED | The session is finished successfully. | 
| INVALID   | The session is declared invalid and will not be billed. | 
| PENDING   | The session is pending and has not yet started. This is the initial state. 
*/

module.exports = {
  createSimulatedSession,
} 