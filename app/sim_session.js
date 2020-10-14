const fs = require('fs');

const createSimulatedSession = (req, res) => {

  const { cdr_token, location_id } = req.body;

  const validInput = cdr_token && 
    cdr_token.uid && 
    cdr_token.type &&
    cdr_token.contract_id && 
    location_id;

  if (validInput) {
    triggerSimulatedSession();
    res.send({ message: `Session started at location, id: ${location_id}`}); 
  } else {
    console.log(`Invalid input: ${cdr_token}, ${location_id}`)
    res.status(400).send({ message: 'Invalid input'}); 
  }
}

const triggerSimulatedSession = async () => {

  console.log('Triggering simulated session');

/*   
| Property | Description | 
|-----------|----------------------------------------------------------------------------| 
| ACTIVE    | The session is accepted and active. | 
| COMPLETED | The session is finished successfully. | 
| INVALID   | The session is declared invalid and will not be billed. | 
| PENDING   | The session is pending and has not yet started. This is the initial state. 
*/

} 


module.exports = {
  createSimulatedSession,
} 