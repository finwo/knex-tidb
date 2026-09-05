const assert = require('assert');
const Client_TiDB = require('../index.js');
const Client_MySQL2 = require('knex/lib/dialects/mysql2');

// Verify class hierarchy
assert.ok(Client_TiDB.prototype instanceof Client_MySQL2, 'Client_TiDB must extend Client_MySQL2');

// Verify driver name
const instance = new Client_TiDB({});
assert.strictEqual(instance.driverName, 'tidb', 'driverName must be tidb');

// Verify constructor name
assert.strictEqual(Client_TiDB.name, 'Client_TiDB', 'constructor name must be Client_TiDB');

console.log('All tests passed.');
