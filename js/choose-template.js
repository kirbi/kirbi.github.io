(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.chooseTemplate = api.chooseTemplate;
  root.switcherVisible = api.switcherVisible;
  root.resolveTemplate = api.resolveTemplate;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  function chooseTemplate(ids, query, stored, fallback) {
    var list = ids || [];
    if (query && list.indexOf(query) !== -1) return query;
    if (stored && list.indexOf(stored) !== -1) return stored;
    if (fallback && list.indexOf(fallback) !== -1) return fallback;
    return list[0];
  }

  function switcherVisible(ids, query, stored) {
    var list = ids || [];
    if (query && list.indexOf(query) !== -1) return true;
    if (stored && list.indexOf(stored) !== -1) return true;
    return false;
  }

  function resolveTemplate(ids, shortcut, query, stored, fallback) {
    var list = ids || [];
    if (shortcut && list.indexOf(shortcut) !== -1) return shortcut;
    return chooseTemplate(list, query, stored, fallback);
  }

  return { chooseTemplate: chooseTemplate, switcherVisible: switcherVisible, resolveTemplate: resolveTemplate };
});
