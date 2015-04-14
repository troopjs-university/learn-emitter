require({
  "baseUrl": "bower_components",

  "deps": [ "mu-emitter/main" ],

  "callback": function (Emitter) {
    console.log(Emitter);
  }
});
