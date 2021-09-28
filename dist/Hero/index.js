"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Hero = require("./Hero");

Object.keys(_Hero).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Hero[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Hero[key];
    }
  });
});