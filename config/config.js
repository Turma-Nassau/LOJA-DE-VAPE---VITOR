//require('dotenv').config()

module.exports = {
    development: {
        url: 'postgres://trggfhpq:kBaXmn7wsV6Asw_LXq8bwhmOVwouxAmp@babar.db.elephantsql.com/trggfhpq',
        dialect: 'postgres',
    },
    test: {
        url: process.env.TEST_DATABASE_URL,
        dialect: 'postgres',
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
    },
}
