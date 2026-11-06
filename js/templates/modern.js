window.PORTFOLIO_TEMPLATES = window.PORTFOLIO_TEMPLATES || [];

window.PORTFOLIO_TEMPLATES.push({
  id: "modern",
  label: "Modern",
  themeColor: "#f3efe6",
  render: function (profile, mount) {
    var esc = window.portfolioEsc;
    var links = profile.links.map(function (link) {
      return '<li><a href="' + esc(link.href) + '" target="_blank" rel="noopener noreferrer">' + esc(link.label) + "</a></li>";
    }).join("");
    var ui = profile.ui;
    var nav = [
      ["#about", ui.about],
      ["#experience", ui.experience],
      ["#projects", ui.projects],
      ["#skills", ui.skills],
      ["#education", ui.education],
      ["#contact", ui.contact]
    ].map(function (item) {
      return '<li><a href="' + item[0] + '">' + esc(item[1]) + "</a></li>";
    }).join("");

    function bullets(items) {
      return "<ul>" + items.map(function (item) {
        return "<li>" + esc(item) + "</li>";
      }).join("") + "</ul>";
    }

    var roles = profile.experience.map(function (job) {
      return (
        "<li><article class=\"role\">" +
          "<div><p class=\"when\"><time datetime=\"" + esc(job.datetime) + "\">" + esc(job.start) + "</time><span>– " + esc(job.end) + "</span></p>" +
          "<p class=\"place\">" + esc(job.place) + "</p></div>" +
          "<div><h3>" + esc(job.company) + "</h3><p class=\"role-title\">" + esc(job.role) + "</p>" +
          bullets(job.bullets) +
          "<p class=\"tools\"><span>" + esc(ui.tools) + "</span> " + esc(job.tools) + "</p></div>" +
        "</article></li>"
      );
    }).join("");

    var projects = profile.projects.map(function (project) {
      var stack = project.stack && project.stack.length
        ? "<p class=\"tools\"><span>" + esc(ui.stack) + "</span> " + esc(project.stack.join(", ")) + "</p>"
        : "";
      var skills = project.skills && project.skills.length
        ? "<p class=\"tools\"><span>" + esc(ui.skillLabel) + "</span> " + esc(project.skills.join(", ")) + "</p>"
        : "";
      var image = project.image
        ? "<img class=\"project-shot\" src=\"" + esc(project.image) + "\" alt=\"\">"
        : "<p class=\"project-mark\" aria-hidden=\"true\">" + esc(project.mark) + "</p>";
      return (
        "<li><article class=\"role\">" +
          "<div><p class=\"when\"><time datetime=\"" + esc(project.datetime) + "\">" + esc(project.start) + "</time><span>– " + esc(project.end) + "</span></p>" +
          image + "</div>" +
          "<div><h3>" + esc(project.name) + "</h3><p class=\"project-summary\">" + esc(project.summary) + "</p>" +
          stack + skills + "</div></article></li>"
      );
    }).join("");

    var skills = profile.skills.map(function (group) {
      return "<div><dt>" + esc(group.name) + "</dt><dd>" + esc(group.items) + "</dd></div>";
    }).join("");

    var orgs = profile.organizations.map(function (org) {
      return (
        "<article><p class=\"when\">" + esc(org.when) + "</p><h3>" + esc(org.role) + "</h3>" +
        "<p class=\"org-role\">" + esc(org.place) + "</p>" + bullets(org.bullets) + "</article>"
      );
    }).join("");

    mount.innerHTML =
      "<header class=\"site-header\">" +
        "<div class=\"wrap\">" +
          "<a class=\"brand\" href=\"#top\"><span class=\"brand-mark\" aria-hidden=\"true\">" + esc(profile.initials) + "</span>" +
          "<span class=\"brand-name\">" + esc(profile.shortName) + "</span></a>" +
          "<div class=\"header-end\">" +
            "<button class=\"theme-switch\" type=\"button\" data-theme-switch=\"vcard\">" + esc(ui.switchToVcard) + "</button>" +
            "<div class=\"lang-toggle\" role=\"group\" aria-label=\"" + esc(ui.language) + "\">" +
              "<button type=\"button\" data-lang=\"en\" aria-pressed=\"" + (document.documentElement.lang === "id" ? "false" : "true") + "\">EN</button>" +
              "<button type=\"button\" data-lang=\"id\" aria-pressed=\"" + (document.documentElement.lang === "id" ? "true" : "false") + "\">ID</button>" +
            "</div>" +
            "<button class=\"nav-toggle\" type=\"button\" aria-expanded=\"false\" aria-controls=\"site-nav\" data-menu-label=\"" + esc(ui.menu) + "\" data-close-label=\"" + esc(ui.close) + "\">" + esc(ui.menu) + "</button>" +
            "<nav class=\"site-nav\" id=\"site-nav\" aria-label=\"" + esc(ui.primaryNav) + "\"><ul>" + nav + "</ul></nav>" +
          "</div>" +
        "</div></header>" +
      "<main id=\"main\">" +
        "<section class=\"hero wrap\" id=\"top\" aria-labelledby=\"intro-title\">" +
          "<div><p class=\"eyebrow\">" + esc(profile.name) + "</p>" +
          "<h1 id=\"intro-title\">" + esc(profile.headline) + "</h1>" +
          "<p class=\"role-line\">" + esc(profile.roleLine) + "</p>" +
          "<p class=\"lede\">" + esc(profile.lede) + "</p>" +
          "<ul class=\"hero-links\"><li><a href=\"mailto:" + esc(profile.email) + "\">" + esc(profile.email) + "</a></li>" + links +
          "<li><a class=\"cv-link\" href=\"" + esc(profile.cv) + "\" download>" + esc(ui.downloadCv) + "</a></li></ul>" +
          "<dl class=\"meta\"><div><dt>" + esc(ui.based) + "</dt><dd>" + esc(profile.location) + "</dd></div>" +
          "<div><dt>" + esc(ui.now) + "</dt><dd>" + esc(profile.experience[0].company) + "</dd></div></dl></div>" +
          "<figure class=\"hero-photo\"><img src=\"" + esc(profile.photo) + "\" width=\"661\" height=\"699\" alt=\"" + esc(profile.photoAlt) + "\"></figure>" +
        "</section>" +
        "<section class=\"section wrap\" id=\"about\" aria-labelledby=\"about-title\">" +
          "<div class=\"section-head\"><p class=\"index\">01</p><h2 id=\"about-title\">" + esc(ui.about) + "</h2></div>" +
          "<div class=\"about\">" + profile.about.map(function (paragraph) {
            return "<p>" + esc(paragraph) + "</p>";
          }).join("") + "</div></section>" +
        "<section class=\"section wrap\" id=\"experience\" aria-labelledby=\"experience-title\">" +
          "<div class=\"section-head\"><p class=\"index\">02</p><h2 id=\"experience-title\">" + esc(ui.experience) + "</h2></div>" +
          "<ol class=\"timeline\">" + roles + "</ol></section>" +
        "<section class=\"section wrap\" id=\"projects\" aria-labelledby=\"projects-title\">" +
          "<div class=\"section-head\"><p class=\"index\">03</p><h2 id=\"projects-title\">" + esc(ui.projects) + "</h2></div>" +
          "<ol class=\"timeline\">" + projects + "</ol></section>" +
        "<section class=\"section wrap\" id=\"skills\" aria-labelledby=\"skills-title\">" +
          "<div class=\"section-head\"><p class=\"index\">04</p><h2 id=\"skills-title\">" + esc(ui.skills) + "</h2></div>" +
          "<dl class=\"skill-grid\">" + skills + "</dl></section>" +
        "<section class=\"section wrap\" id=\"education\" aria-labelledby=\"education-title\">" +
          "<div class=\"section-head\"><p class=\"index\">05</p><h2 id=\"education-title\">" + esc(ui.educationOrgs) + "</h2></div>" +
          "<div class=\"split\"><div class=\"panel\"><p class=\"status\">" + esc(profile.education.status) + "</p>" +
          "<h3>" + esc(profile.education.degree) + "</h3><p class=\"role-title\">" + esc(profile.education.school) + "</p></div>" +
          "<div class=\"panel\" id=\"organizations\">" + orgs + "</div></div></section>" +
        "<section class=\"contact\" id=\"contact\" aria-labelledby=\"contact-title\"><div class=\"wrap\">" +
          "<div class=\"section-head\"><p class=\"index\">06</p><h2 id=\"contact-title\">" + esc(ui.contact) + "</h2></div>" +
          "<div class=\"contact-grid\"><div><p class=\"contact-mail\"><a href=\"mailto:" + esc(profile.email) + "\">" + esc(profile.email) + "</a></p>" +
          "<ul class=\"contact-list\">" +
          profile.links.map(function (link) {
            return "<li><a href=\"" + esc(link.href) + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + esc(link.href.replace(/^https:\/\//, "")) + "</a></li>";
          }).join("") +
          "</ul><p class=\"contact-cv\"><a class=\"cv-link\" href=\"" + esc(profile.cv) + "\" download>" + esc(ui.downloadCv) + "</a></p></div>" +
          "<div class=\"contact-aside\"><p class=\"index\">" + esc(ui.location) + "</p><p>" + esc(profile.location) + "</p></div></div>" +
          "<footer class=\"site-footer\"><p>" + esc(profile.name) + " · " + esc(profile.title) + " · Bali</p></footer>" +
        "</div></section></main>";

    bindModern(mount);
  }
});

var modernObserver = null;

function bindModern(root) {
  var button = root.querySelector(".nav-toggle");
  var nav = root.querySelector("#site-nav");
  if (!button || !nav) return;

  function setOpen(open) {
    button.setAttribute("aria-expanded", open ? "true" : "false");
    button.textContent = open ? button.getAttribute("data-close-label") : button.getAttribute("data-menu-label");
    nav.classList.toggle("is-open", open);
  }

  button.addEventListener("click", function () {
    setOpen(button.getAttribute("aria-expanded") !== "true");
  });
  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });
  if (!document.documentElement.dataset.modernKeys) {
    document.documentElement.dataset.modernKeys = "1";
    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;
      var current = document.querySelector(".nav-toggle");
      var menu = document.querySelector("#site-nav");
      if (!current || !menu || current.getAttribute("aria-expanded") !== "true") return;
      current.setAttribute("aria-expanded", "false");
      current.textContent = current.getAttribute("data-menu-label") || "Menu";
      menu.classList.remove("is-open");
    });
  }

  var links = Array.prototype.slice.call(nav.querySelectorAll("a[href^='#']"));
  var sections = links.map(function (link) {
    return root.querySelector(link.getAttribute("href"));
  }).filter(Boolean);

  if (!("IntersectionObserver" in window)) return;
  if (modernObserver) modernObserver.disconnect();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (link) {
        var current = link.getAttribute("href") === "#" + entry.target.id;
        if (current) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
  modernObserver = observer;
  sections.forEach(function (section) { observer.observe(section); });
}
