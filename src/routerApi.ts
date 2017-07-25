const express = require('express');
import {getTest, postTest} from './api/test';
import {login} from './api/sign';
let router = express.Router();

//请求测试
router.get('/test', getTest);
router.post("/test", postTest);

//sign
router.post("/login", login);

export default router;
