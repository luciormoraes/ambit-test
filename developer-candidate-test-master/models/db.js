const Datastore = require('nedb');
const users = new Datastore({
    filename: './database/test.db',
    autoload: true,
    timestampData: true
});

module.exports = users;
