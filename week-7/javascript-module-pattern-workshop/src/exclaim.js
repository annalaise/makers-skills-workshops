"use strict";

(function(exports) {
  function exclaim(string) {
    return string + "!";
  };

  exports.exclaim = exclaim;
})(this);

console.log(this)
