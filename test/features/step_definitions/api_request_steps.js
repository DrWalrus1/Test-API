const { Given, When } = require('@cucumber/cucumber');

const port = process.env.port || 8080;
const host = 'http://' + (process.env.hostname || '0.0.0.0');

const url = `${host}:${port}`;

When(/^I send a '(GET|POST)' request to endpoint: '(.+)'$/, async function (requestMethod, endpoint) {
    let completeURL = `${url}/${endpoint}`
    console.log(completeURL);
    let response = await fetch(completeURL, {
        method: requestMethod
    })
    console.log(`Status: ${response.status}`);
    console.log(`Response body:`);
    console.log(JSON.stringify(await response.json(), null, 4));
})