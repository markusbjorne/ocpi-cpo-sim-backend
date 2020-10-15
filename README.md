# ocpi-cpo-sim-backend

## To trigger creation of a simulated OCPI charging session
curl -d '{"cdr_token": { "uid": "012345678", "type": "RFID", "contract_id":  "DE8ACC12E46L89"},"location_id": "LOC1"}' -H "Content-Type: application/json" https://base-url/create