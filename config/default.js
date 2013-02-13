//
//  Default APP configuraiton. Composed of the following attributes:
//    app: application configuration.
//    db: database configuration.
//    logging: logging configuraiton.
//

//
//  appConfig:
//
var appConfig = {
  id: undefined,
  name: undefined
};

//
//  dbConfig: Database configuration.
//
var dbConfig = { 
  database: "plm-media-manager",
  local: {
    execPath: './MediaManagerTouchServer.app/Contents/MacOS/MediaManagerTouchServ',
    port: "59840",
    updateSeq: undefined
  },
  remote: {
    host: "72.52.106.218",
    port: undefined
  }
};

//
//  loggingConfig: Logging configuration
//
/*
var loggingConfig = {
  appenders: [
    {
      "type": "console",
      "category": "console"
    },
    {
      "type": "file",
      "filename": "var/log/plm-media-manager.log",
      "backups": 10,
      "category": ["plm.MediaManagerApp", "plm.MediaManagerAppSupport", "plm.ImageService"]
    }
  ],
  "levels": { "plm.MediaManagerApp" : "TRACE",
              "plm.ImageService" : "ERROR" },
  "replaceConsole": false
};
*/

var config = {
  app: appConfig,
  db: dbConfig,
  // logging: loggingConfig
};

module.exports = config;
