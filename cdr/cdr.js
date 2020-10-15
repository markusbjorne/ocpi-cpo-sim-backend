const { v4: uuidv4 } = require('uuid');

const createCdr = (cdrToken, location_id, startDate, endDate ) => {

  const diff = (endDate.valueOf() - startDate.valueOf()) / 1000 / 60 / 60;
  const config = JSON.parse(fs.readFileSync('./config.json'));

  return {
    country_code: config.country_code,
    party_id: config.party_id,
    id: uuidv4(),
    start_date_time: startDate.toISOString(),
    end_date_time: endDate.toISOString(),
    cdr_token: cdrToken,
    auth_method: 'WHITELIST',
    cdr_location: config.locations.find(location => location.id === location_id),
    currency: config.currency,
    tariffs: config.tariffs,
    charging_periods: [{
      start_date_time: startDate.toISOString(),
      dimensions: [{
        type: 'TIME',
        volume: diff
      }],
      tariff_id: config.tariffs[0].id
    }],
    total_cost: {
      excl_vat: 4.00,
      incl_vat: 4.40
    },
    total_energy: 15.342,
    total_time: diff,
    total_time_cost: {
      excl_vat: 4.00,
      incl_vat: 4.40
    },
    last_updated: '2015-06-29T22:01:13Z'
   }
}

module.exports = {
  createCdr
} 