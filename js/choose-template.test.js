const assert = require("assert");
const { chooseTemplate } = require("./choose-template.js");

const ids = ["modern", "vcard"];

assert.strictEqual(chooseTemplate(ids, "vcard", "modern", "modern"), "vcard");
assert.strictEqual(chooseTemplate(ids, null, "vcard", "modern"), "vcard");
assert.strictEqual(chooseTemplate(ids, "nope", "vcard", "modern"), "vcard");
assert.strictEqual(chooseTemplate(ids, "", "nope", "modern"), "modern");
assert.strictEqual(chooseTemplate(ids, null, null, "missing"), "modern");
assert.strictEqual(chooseTemplate([], null, null, null), undefined);

console.log("choose-template ok");
