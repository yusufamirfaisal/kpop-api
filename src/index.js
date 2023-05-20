require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jsend = require('jsend');
const fs = require('fs');
const port = process.env.PORT;
const app = express();

app.use(jsend.middleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', require('./api'));

let raw = fs.readFileSync('package.json').toString('utf-8');
let data = JSON.parse(raw);
let appInfo = (({ name, version, description, author }) => ({ name, version, description, author }))(data);

app.get('/', (req, res) => {
    res.jsend.success(appInfo);
});

app.listen(port, () => console.log(`KPOP API is ready to ship!`));