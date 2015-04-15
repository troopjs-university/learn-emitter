require({
  "baseUrl": "bower_components",

  "deps": [ "mu-emitter/main" ],

  "callback": function (Emitter) {
    var emitter = new Emitter();
    var scope1 = {};
    var scope2 = {};

    scope1.name = "e1";
    scope2.name = "e2";

    function log() {
      console.log("%s [%o]", this.name, arguments);
    }

    emitter.on("console", {
      "scope": scope1,
      "callback": log
    });

    emitter.on("console", {
      "scope": scope2,
      "callback": log
    });

    emitter.emit("console", "string", 123, false);
  }
});
