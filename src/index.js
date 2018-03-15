'use strict';

const express = require('express');
const  router = express.Router();
const  bodyParser = require('body-parser');
const  swaggerUi = require('swagger-ui-express');
const  swaggerDocument = require('./swagger.json');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

function getHealth(req, res) {
    res.json({status : "Healthy"});
};

function getVersion(req, res) {
    res.json({version : "1.0.0"});
};

router.route('/health')
    .get(getHealth);

router.route('/version')
    .get(getVersion);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

app.listen(3000);
module.exports = app;