const sequelize = require('../db/db');
const tokenStorage = require('./token');
const crypto = require('crypto');
const assert = require('assert');

async function signup(req, res) {
    try {
        await sequelize.authenticate();
        if ((await sequelize.models.User.findAll({
            where: {
                email: req.body.email
            }
        })).length === 0) {
            const reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
            if (!reg.test(req.body.email)) {
                res.json({
                    status: 'FAIL',
                    err: 'Wrong Format'
                })
            } else {
                await sequelize.models.User.create({
                    nickname: req.body.nickname,
                    password: crypto.createHash('md5').update(req.body.password).digest('hex'),
                    email: req.body.email,
                    intro: req.body.intro,
                    vipTill: Date.now(),
                    avatar: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1657887369,1770329042&fm=26&gp=0.jpg",
                    income: 0,
                });
                res.json({
                    status: 'OK',
                })
            }
        } else {
            res.json({
                status: 'FAIL',
                err: 'Duplicated'
            })
        }
    } catch (err) {
        console.log(err);
        res.json({
            status: 'FAIL',
            err: err
        })
    }
}

async function login(req, res) {
    try {
        await sequelize.authenticate();
        if ((await sequelize.models.User.findAll({
            where: {
                email: req.body.email,
                password: crypto.createHash('md5').update(req.body.password).digest('hex')
            }
        })).length === 1) {
            const token = crypto.createHash('md5').update(Date.now().toString()).digest('hex');
            tokenStorage[token] = req.body.email;
            res.json({
                status: 'OK',
                token: token,
                email: req.body.email
            });
        } else {
            res.json({
                status: 'FAIL',
                err: 'Permission denied.'
            });
        }
    } catch (err) {
        console.log(err);
        res.json({
            status: 'FAIL',
            err: err
        });
    }
}

async function getProfile(req, res) {
    try {
        await sequelize.authenticate();
        assert(tokenStorage.hasOwnProperty(req.body.token));
        let user = (await sequelize.models.User.findAll({
            where: {
                email: tokenStorage[req.body.token],
            }
        }))[0]
        res.json({
            status: 'OK',
            uid: user.id,
            nickname: user.nickname,
            email: user.email,
            intro: user.intro,
            viptill: user.vipTill,
            avatar: user.avatar,
            income: "￥" + user.income
        })
    } catch (err) {
        console.log(err);
        res.json({
            status: 'FAIL',
            err: err
        });
    }
}

async function checkToken(req, res) {
    if (tokenStorage.hasOwnProperty(req.body.token)) {
        res.json({
            status: 'OK'
        });
    } else {
        res.json({
            status: 'FAIL'
        });
    }
}

module.exports = {login, signup, getProfile, checkToken}

// async function profileEditing(req, res) {
//     try {
//         await sequelize.authenticate();
//         assert(tokenStorage.hasOwnProperty(req.body.token));
//         res.send(JSON.stringify({
//             status: 'OK',
//             nickname: req.body.data.nickname,
//             intro: req.body.data.intro
//         }))
//     } catch (err) {
//         console.log(err);
//         res.send(JSON.stringify({
//             status: 'FAIL',
//             err: err
//         }));
//     }
// }