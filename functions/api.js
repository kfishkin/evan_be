
const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded( {extended: true}));
const serverless = require('serverless-http');

const api = express();

router.get('/hello', (req, res) => res.send('Hello World!'));

api.use('/api/', router);

const handler = serverless(api);
console.log('up and running');
