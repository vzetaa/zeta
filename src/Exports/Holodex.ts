import { HolodexApiClient } from 'holodex.js';

const holoClient = new HolodexApiClient({
    apiKey: process.env.HOLODEX_APIKEY,
});

export default holoClient;
