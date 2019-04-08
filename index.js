"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function stringTag(ctor) {
    return function (strings) {
        var data = Array.from(arguments).slice(1);
        var result = "";

        for (var i = 0, length = data.length; i < length; i++) {
            result += strings[i] + data[i];
        }

        result += strings[i];

        return typeof ctor === "function" ? new ctor(result) : result;
    };
}

exports.default = exports.stringTag = stringTag;