"use strict";
const express = require('express');
const testController = require('./api/test');
const signController = require('./api/sign');
let router = express.Router();
//请求测试
router.get('/test', testController.getTest);
router.post("/test", testController.postTest);
//sign
router.post("/login", signController.login);
module.exports = router;
