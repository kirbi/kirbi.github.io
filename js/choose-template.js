(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.chooseTemplate = api.chooseTemplate;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  function chooseTemplate(ids, query, stored, fallback) {
    var list = ids || [];
    if (query && list.indexOf(query) !== -1) return query;
    if (stored && list.indexOf(stored) !== -1) return stored;
    if (fallback && list.indexOf(fallback) !== -1) return fallback;
    return list[0];
  }

  return { chooseTemplate: chooseTemplate };
});
