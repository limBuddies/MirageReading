const express = require('express');
const router = express.Router();

// const { addCounter, getCounter } = require('../controllers/counter');

const { login, signup, getProfile, checkToken } = require('../controllers/user');
const { addTweet, getTweets } = require('../controllers/tweets');

// 参考：https://expressjs.com/zh-cn/guide/routing.html

// 对不同Api请求进行分流

router
    .post('/signup', async (req, res) => {
        await signup(req, res);
    })
    .post('/login', async (req, res) => {
        await login(req, res);
    })
    .post('/getProfile', async (req, res) => {
        await getProfile(req, res);
    })
    .post('/checkToken', async (req, res) => {
        await checkToken(req, res);
    })
    .post('/addTweet', async (req, res) => {
        await addTweet(req, res);
    })
    .post('/getTweets', async (req, res) => {
        await getTweets(req, res);
    });

module.exports = router;
