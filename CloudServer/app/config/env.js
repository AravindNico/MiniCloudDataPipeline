const config = {
  environment: "development",
  development: {
    databases: {
      cs: {
        database: "",
        username: "",
        password: "",
        host: "",
        port: "5432",
        dialect: "postgres",
        pool: {
          max: 30,
          min: 0,
          acquire: 1000000,
          idle: 200000
        }
      }
    }
  },
  production: {}
};
module.exports = config;
