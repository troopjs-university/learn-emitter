require({
  "baseUrl": "bower_components",

  "deps": [ "mu-emitter/main" ],

  "callback": function (Emitter) {
    var emitter = new Emitter();

    function log() {
      console.log("This is a log message [%o]", arguments);
    }

    emitter.on("log", log);
    emitter.on("log", log);

    emitter.emit("log", "string", 123, false);
  }
});
