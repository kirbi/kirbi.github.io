(function () {
  var STORAGE_KEY = "portfolio-template";

  window.portfolioEsc = function (value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  var templates = window.PORTFOLIO_TEMPLATES || [];
  var ids = templates.map(function (template) { return template.id; });
  var cfg = window.PORTFOLIO || {};
  var select = document.getElementById("template-select");
  var mount = document.getElementById("app");

  templates.forEach(function (template) {
    var option = document.createElement("option");
    option.value = template.id;
    option.textContent = template.label;
    select.appendChild(option);
  });

  function storedTemplate() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (error) { return null; }
  }

  function pageFor(templateId) {
    if (templateId !== "vcard") return "about";
    var hash = location.hash;
    if (hash === "#experience" || hash === "#education" || hash === "#organizations" || hash === "#skills" || hash === "#resume") return "resume";
    if (hash === "#projects" || hash === "#portfolio") return "portfolio";
    if (hash === "#contact") return "contact";
    return "about";
  }

  function activate(id, options) {
    options = options || {};
    var template = null;
    templates.forEach(function (item) {
      if (item.id === id) template = item;
    });
    if (!template || !window.PROFILE) return;

    document.documentElement.dataset.template = id;
    document.body.className = "template-" + id;
    var link = document.getElementById("template-css");
    var href = (cfg.stylesheets || {})[id];
    if (link && href) link.setAttribute("href", href);
    var theme = document.querySelector("meta[name='theme-color']");
    if (theme && template.themeColor) theme.setAttribute("content", template.themeColor);
    if (select.value !== id) select.value = id;
    document.title = window.PROFILE.name + " · " + window.PROFILE.title;

    if (options.persist) {
      try { localStorage.setItem(STORAGE_KEY, id); } catch (error) {}
    }
    if (options.updateUrl) {
      var url = new URL(location.href);
      url.searchParams.set("template", id);
      history.replaceState(null, "", url);
    }

    mount.replaceChildren();
    template.render(window.PROFILE, mount, { page: pageFor(id) });

    if (id === "modern" && location.hash) {
      var target = document.querySelector(location.hash);
      if (target && target.scrollIntoView) target.scrollIntoView();
    }
  }

  select.addEventListener("change", function () {
    activate(select.value, { persist: true, updateUrl: true });
  });

  var params = new URLSearchParams(location.search);
  var query = params.get("template");
  var id = window.chooseTemplate(ids, query, storedTemplate(), cfg.defaultTemplate);
  activate(id, { persist: !!(query && ids.indexOf(query) !== -1) });
})();
