"use strict";

const assert = require("assert");
const stringTag = require(".").default;

class MyString extends String { }

describe("stringTag()", () => {
    it("should create a string tag with a type as expected", () => {
        var ms = stringTag(MyString);
        var str = ms`values ${1}, ${2}, ${3}.`;

        assert.ok(ms instanceof Function);
        assert.ok(str instanceof MyString);
        assert.strictEqual(str.valueOf(), "values 1, 2, 3.");
    });

    it("should create a string tag without type as expected", () => {
        var ms = stringTag();
        var str = ms`values ${1}, ${2}, ${3}.`;

        assert.ok(ms instanceof Function);
        assert.strictEqual(str, "values 1, 2, 3.");
    });

    it("should create a string tag without leading string as expected", () => {
        var ms = stringTag(MyString);
        var str = ms`${1}, ${2}, ${3}.`;

        assert.ok(ms instanceof Function);
        assert.ok(str instanceof MyString);
        assert.strictEqual(str.valueOf(), "1, 2, 3.");
    });

    it("should create a string tag without trailing string as expected", () => {
        var ms = stringTag(MyString);
        var str = ms`values ${1}, ${2}, ${3}`;

        assert.ok(ms instanceof Function);
        assert.ok(str instanceof MyString);
        assert.strictEqual(str.valueOf(), "values 1, 2, 3");
    });
});