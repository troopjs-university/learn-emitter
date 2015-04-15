require({
  "baseUrl": "bower_components",

  "deps": [ "mu-emitter/main" ],

  "callback": function (Emitter) {
    var emitter = new Emitter();

    function log() {
      console.log("This is a log message [%o]", arguments);
    }

    function warn() {
      console.warn("This is a warn message [%o]", arguments);
    }

    emitter.on("console", log);
    emitter.on("console", warn);

    emitter.emit("console", "string", 123, false);

    emitter.off("console", warn);

    emitter.emit("console", "string", 123, false);
  }
});
