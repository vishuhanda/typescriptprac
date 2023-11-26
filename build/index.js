"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const rxjs_1 = require("rxjs");
const emitter = (0, rxjs_1.of)("nameone", "nametwo", "namethree");
emitter.subscribe((value) => {
    console.log(`name : ${value}`);
});
const world = 'world';
function hello(who = world) {
    return `Hello ${who}! `;
}
exports.hello = hello;
console.log(hello());
//# sourceMappingURL=index.js.map