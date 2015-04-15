require({
  "baseUrl": "bower_components",

  "deps": [ "mu-emitter/main" ],

  "callback": function (Emitter) {
    var emitter = new Emitter();

    function one() {
      console.log("%s [%o]", "one", arguments);
    }

    function two() {
      console.log("%s [%o]", "two", arguments);
    }

    emitter.on("console", one);
    emitter.on("console", two);

    emitter.emit({
      "type": "console",
      "callback": one
    }, "string", 123, false);
  }
});
