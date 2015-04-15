require({
  "baseUrl": "bower_components",

  "deps": [ "mu-emitter/main" ],

  "callback": function (Emitter) {
    var emitter = new Emitter();

    function one(a, b, c) {
      console.log("one [%o]", a);
    }

    function two(a, b, c) {
      console.warn("two [%o]", b);
    }

    function three(a, b, c) {
      console.info("three [%o]", c);
    }

    emitter.on("console", one);
    emitter.on("console", two);
    emitter.on("console", three);

    emitter.emit("console", "string", 123, false);
  }
});
