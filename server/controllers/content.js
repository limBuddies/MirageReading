const sequelize = require('../db/db');
const tokenStorage = require('./token');
const assert = require('assert');
const https = require('https');
const crypto = require('crypto');

async function bookshelfClaiming(req, res) {
    try {
        await sequelize.authenticate();
        assert(tokenStorage.hasOwnProperty(req.body.token));
        if (req.body.order === time) {
            await sequelize.models.bookself.findAll({
                where: {
                    uid: req.body.uid
                },
                order: [
                    // Will escape title and validate DESC against a list of valid direction parameters
                    ['title', 'DESC']
                ]
            })
        }
        res.send(JSON.stringify({
            status: 'OK',
            books: []
        }))
    } catch (err) {
        console.log(err);
        res.send(JSON.stringify({
            status: 'FAIL',
            err: err
        }));
    }
}
