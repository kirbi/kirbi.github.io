(function () {
  var cfg = window.PORTFOLIO || {};
  var ids = Object.keys(cfg.stylesheets || {});
  var shortcut = document.documentElement.getAttribute("data-shortcut");
  var query = new URLSearchParams(location.search).get("template");
  var stored = null;
  try { stored = localStorage.getItem("portfolio-template"); } catch (error) {}
  var id = window.resolveTemplate(ids, shortcut, query, stored, cfg.defaultTemplate);
  document.documentElement.dataset.template = id || "modern";
  var langStored = null;
  try { langStored = localStorage.getItem("portfolio-lang"); } catch (error) {}
  document.documentElement.lang = window.chooseTemplate(["en", "id"], new URLSearchParams(location.search).get("lang"), langStored, "en");
  var link = document.getElementById("template-css");
  if (link && id && cfg.stylesheets && cfg.stylesheets[id]) link.href = cfg.stylesheets[id];
})();
