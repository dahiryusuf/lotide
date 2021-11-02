const assert = require('chai').assert;
const middle   = require('../middle');


describe("#middle", () => {
  it("returns 6 for 5,6,7", () => {
    assert.deepEqual(middle([5,6,7]), [6]);
  });
  it("returns Lighthouse for Hello, Lighthouse, Labs", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });
});

