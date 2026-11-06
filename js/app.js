(function () {
  var TEMPLATE_KEY = "portfolio-template";
  var LANG_KEY = "portfolio-lang";
  var LANGS = ["en", "id"];

  window.portfolioEsc = function (value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  function readStorage(key) {
    try { return localStorage.getItem(key); } catch (error) { return null; }
  }

  function writeStorage(key, value) {
    try { localStorage.setItem(key, value); } catch (error) {}
  }

  var templates = window.PORTFOLIO_TEMPLATES || [];
  var ids = templates.map(function (template) { return template.id; });
  var cfg = window.PORTFOLIO || {};
  var select = document.getElementById("template-select");
  var mount = document.getElementById("app");
  var params = new URLSearchParams(location.search);
  var currentId = "modern";

  templates.forEach(function (template) {
    var option = document.createElement("option");
    option.value = template.id;
    option.textContent = template.label;
    select.appendChild(option);
  });

  function pageFor(templateId) {
    if (templateId !== "vcard") return "about";
    var hash = location.hash;
    if (hash === "#experience" || hash === "#education" || hash === "#organizations" || hash === "#skills" || hash === "#resume") return "resume";
    if (hash === "#projects" || hash === "#portfolio") return "portfolio";
    if (hash === "#contact") return "contact";
    return "about";
  }

  function applyLang(next, options) {
    options = options || {};
    var lang = window.chooseTemplate(LANGS, next, null, "en");
    document.documentElement.lang = lang;
    window.PROFILE = (window.PROFILE_LOCALES && window.PROFILE_LOCALES[lang]) || window.PROFILE;
    if (options.persist) writeStorage(LANG_KEY, lang);
    if (options.updateUrl) {
      var url = new URL(location.href);
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
    }
    var desc = document.querySelector("meta[name='description']");
    if (desc && window.PROFILE.description) desc.setAttribute("content", window.PROFILE.description);
    var skip = document.querySelector(".skip");
    if (skip && window.PROFILE.ui) skip.textContent = window.PROFILE.ui.skip;
    var label = document.querySelector("label[for='template-select']");
    if (label && window.PROFILE.ui) label.textContent = window.PROFILE.ui.template;
    document.title = window.PROFILE.name + " · " + window.PROFILE.title;
  }

  function activate(id, options) {
    options = options || {};
    var template = null;
    templates.forEach(function (item) {
      if (item.id === id) template = item;
    });
    if (!template || !window.PROFILE) return;
    currentId = id;

    document.documentElement.dataset.template = id;
    document.body.className = "template-" + id;
    var link = document.getElementById("template-css");
    var href = (cfg.stylesheets || {})[id];
    if (link && href) link.setAttribute("href", href);
    var theme = document.querySelector("meta[name='theme-color']");
    if (theme && template.themeColor) theme.setAttribute("content", template.themeColor);
    if (select.value !== id) select.value = id;
    document.title = window.PROFILE.name + " · " + window.PROFILE.title;

    if (options.persist) writeStorage(TEMPLATE_KEY, id);
    if (options.updateUrl) {
      var url = new URL(location.href);
      url.searchParams.set("template", id);
      history.replaceState(null, "", url);
    }
    if (window.switcherVisible(ids, new URLSearchParams(location.search).get("template"), readStorage(TEMPLATE_KEY))) {
      document.documentElement.setAttribute("data-switcher", "");
    }

    mount.replaceChildren();
    template.render(window.PROFILE, mount, { page: pageFor(id) });

    if (id === "modern" && location.hash) {
      var target = document.querySelector(location.hash);
      if (target && target.scrollIntoView) {
        document.documentElement.style.scrollBehavior = "auto";
        target.scrollIntoView();
      }
    }
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-lang]");
    if (!button || button.getAttribute("aria-pressed") === "true") return;
    applyLang(button.getAttribute("data-lang"), { persist: true, updateUrl: true });
    activate(currentId, {});
  });

  select.addEventListener("change", function () {
    activate(select.value, { persist: true, updateUrl: true });
  });

  var langQuery = params.get("lang");
  applyLang(window.chooseTemplate(LANGS, langQuery, readStorage(LANG_KEY), "en"), {
    persist: !!(langQuery && LANGS.indexOf(langQuery) !== -1)
  });

  var templateQuery = params.get("template");
  var id = window.chooseTemplate(ids, templateQuery, readStorage(TEMPLATE_KEY), cfg.defaultTemplate);
  activate(id, { persist: !!(templateQuery && ids.indexOf(templateQuery) !== -1) });
})();
