require({
  "baseUrl": "bower_components",

  "deps": [ "mu-emitter/main" ],

  "callback": function (Emitter) {
    var emitter1 = new Emitter();
    var emitter2 = new Emitter();

    emitter1.name = "e1";
    emitter2.name = "e2";

    function log() {
      console.log("%s [%o]", this.name, arguments);
    }

    emitter1.on("console", log);
    emitter2.on("console", log);

    emitter1.emit("console", "string", 123, false);
    emitter2.emit("console", "string", 123, false);
  }
});
