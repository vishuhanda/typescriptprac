"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const emitter = (0, rxjs_1.of)("nameone", "nametwo", "namethree");
emitter.subscribe((value) => {
    console.log(`name : ${value}`);
});
const constemitter = (0, rxjs_1.of)(4, 9, 1, 3, 17);
const mapValue = constemitter.pipe((0, operators_1.map)((value) => {
    return Math.sqrt(value);
}), (0, operators_1.map)((value) => {
    return `square root: ${value}`;
}));
const world = 'world';
function hello(who = world) {
    return `Hello ${who}! `;
}
exports.hello = hello;
console.log(hello());
//# sourceMappingURL=index.js.map