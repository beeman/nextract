var fs = require('fs'),
    jsonfile = require('jsonfile');

var defaultConfig,
    baseConfigFileLocation

baseConfigFileLocation = 'config/default.json';

defaultConfig = {
  "logging": {
    "logFilePath": "/var/log/nextract.log"
  },

  "databases": {
    "nextract_sample": {
      "client": "mysql",
      "host": "127.0.0.1",
      "port": 3306,
      "database": "nextract",
      "user": "root",
      "password": "",
      "debug": false
    },
    "nextract_pg_sample": {
      "client": "postgres",
      "host": "127.0.0.1",
      "port": 5432,
      "database": "nextract",
      "user": "postgres",
      "password": "",
      "debug": false
    }
  }
};

jsonfile.writeFile(baseConfigFileLocation, defaultConfig, {spaces:2}, function (err) {
  if (err) {
    console.error('Unable to write default config file!');
  }
});
