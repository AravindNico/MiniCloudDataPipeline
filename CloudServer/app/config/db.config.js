const Sequelize = require('sequelize');
const env = require('./env.js');

const cs_db = env[env["environment"]].databases.cs

const sequelize = new Sequelize(cs_db.database, cs_db.username, cs_db.password, {
	host: cs_db.host,
	port: cs_db.port,
	ssl: true,
	dialect: cs_db.dialect,
	logging: console.log,
	define: {
		timestamps: false
	},
	pool: {
		max: cs_db.pool.max,
		min: cs_db.pool.min,
		acquire: cs_db.pool.acquire,
		idle: cs_db.pool.idle
	},
	dialectOptions: {
		ssl: true,
		useUTC: false, // for reading from database
	},
	timezone: '+05:30'
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// users
db.users = require('../model/users.js')(sequelize, Sequelize);

module.exports = db;