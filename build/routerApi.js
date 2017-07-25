"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const test_1 = require("./api/test");
const sign_1 = require("./api/sign");
let router = express.Router();
//请求测试
router.get('/test', test_1.getTest);
router.post("/test", test_1.postTest);
//sign
router.post("/login", sign_1.login);
exports.default = router;
