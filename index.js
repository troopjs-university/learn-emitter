require({
  "baseUrl": "bower_components",

  "deps": [ "mu-emitter/main" ],

  "callback": function (Emitter) {
    var emitter = new Emitter();

    emitter.on("log", function () {
      console.log("This is a log message [%o]", arguments);
    });

    emitter.emit("log", "string", 123, false);
  }
});
