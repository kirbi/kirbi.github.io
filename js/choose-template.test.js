const assert = require("assert");
const { chooseTemplate, switcherVisible } = require("./choose-template.js");

const ids = ["modern", "vcard"];

assert.strictEqual(chooseTemplate(ids, "vcard", "modern", "modern"), "vcard");
assert.strictEqual(chooseTemplate(ids, null, "vcard", "modern"), "vcard");
assert.strictEqual(chooseTemplate(ids, "nope", "vcard", "modern"), "vcard");
assert.strictEqual(chooseTemplate(ids, "", "nope", "modern"), "modern");
assert.strictEqual(chooseTemplate(ids, null, null, "missing"), "modern");
assert.strictEqual(chooseTemplate([], null, null, null), undefined);

assert.strictEqual(chooseTemplate(["en", "id"], "id", "en", "en"), "id");
assert.strictEqual(chooseTemplate(["en", "id"], "nope", null, "en"), "en");

assert.strictEqual(switcherVisible(ids, "vcard", null), true);
assert.strictEqual(switcherVisible(ids, null, "modern"), true);
assert.strictEqual(switcherVisible(ids, "", "vcard"), true);
assert.strictEqual(switcherVisible(ids, null, null), false);
assert.strictEqual(switcherVisible(ids, "nope", null), false);
assert.strictEqual(switcherVisible(ids, "nope", "nope"), false);

console.log("choose-template ok");
