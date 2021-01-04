const sequelize = require('../db/db');
const tokenStorage = require('./token');
const assert = require('assert');

async function addTweet(req, res) {
    try {
        await sequelize.authenticate();
        assert(tokenStorage.hasOwnProperty(req.body.token));
        let user = (await sequelize.models.User.findAll({
            where: {
                email: tokenStorage[req.body.token],
            }
        }))[0]
        const t = await sequelize.models.Tweet.create({
            device: "iPhone",
            forward: 0,
            publisherId: user.id
        });
        await sequelize.models.Reply.create({
            tweetId: t.id,
            publisherId: user.id,
            toId: -1,
            content: req.body.content
        });
        res.json({
            status: 'OK'
        });
    } catch (err) {
        console.log(err);
        res.json({
            status: 'FAIL',
            err: err
        });
    }
}

async function getTweets(req, res) {
    try {
        await sequelize.authenticate();
        const ts = [];
        for (const t of await sequelize.models.Tweet.findAll()) {
            const u = (await sequelize.models.User.findOne({
                where: {
                    id: t.publisherId,
                }
            }))
            const r = (await sequelize.models.Reply.findOne({
                where: {
                    tweetId: t.id,
                    toId: -1,
                }
            }));
            ts.push({
                creator: u.nickname,
                avatar: u.avatar,
                content: r.content
            })
        }
        res.json({
            status: 'OK',
            tweets: ts
        });
    } catch (err) {
        console.log(err);
        res.json({
            status: 'FAIL',
            err: err
        });
    }
}

module.exports = { addTweet, getTweets }
