'use strict';
var MongoClient = require('mongodb').MongoClient;
var config = require('myconfig').get('mongoDbRepair');
var mongoConnStr = config.mongoConnectionStr;
var logger = require('mylogger');
logger.setLevel(config.logLevel);
MongoClient.connect(mongoConnStr, function (err, db) {
  if (err) {
    logger.error(err);
  } else {
    db.command({repairDatabase: 1}, function (err, result) {
      if (err) {
        logger.err();
      } else {
        logger.log(result);
      }
      db.close();
    });
  }
});
