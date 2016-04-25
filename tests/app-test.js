var assert = require("assert");

describe("the canvas is added to the page", function() {
	it("should run a test", function() {
    require("../app/js/app");
    var $ = require("jQuery");
    assert.equal($('canvas').length, 1);
	});
});
