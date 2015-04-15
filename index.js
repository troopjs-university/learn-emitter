require({
  "baseUrl": "bower_components",

  "deps": [ "mu-emitter/main" ],

  "callback": function (Emitter) {
    var emitter = new Emitter();

    function one() {
      console.log("one [%o]", arguments);
    }

    function two() {
      console.warn("two [%o]", arguments);
    }

    emitter.on("console", one);
    emitter.on("console", two);
    emitter.on("console", two);
    emitter.on("console", one);

    emitter.emit("console", "string", 123, false);
  }
});
