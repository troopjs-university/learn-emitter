require({
  "baseUrl": "bower_components",

  "deps": [ "mu-emitter/main" ],

  "callback": function (Emitter) {
    var emitter = new Emitter();

    function one(a, b, c) {
      console.log("one [%o]", a);
      return 1;
    }

    function two(a, b, c) {
      console.warn("two [%o]", b);
      return 2;
    }

    function three(a, b, c) {
      console.info("three [%o]", c);
      return 3;
    }

    emitter.on("console", one);
    emitter.on("console", two);
    emitter.on("console", three);

    var emit = emitter.emit("console", "string", 123, false);
    console.log(emit);
  }
});
