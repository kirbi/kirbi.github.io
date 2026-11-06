window.PORTFOLIO_TEMPLATES = window.PORTFOLIO_TEMPLATES || [];

window.PORTFOLIO_TEMPLATES.push({
  id: "vcard",
  label: "vCard",
  themeColor: "#121212",
  render: function (profile, mount, ctx) {
    var esc = window.portfolioEsc;
    var page = (ctx && ctx.page) || "about";

    function icon(paths) {
      return "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" aria-hidden=\"true\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\">" + paths + "</svg>";
    }

    var icons = {
      mail: icon("<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"></rect><path d=\"m4 7 8 6 8-6\"></path>"),
      pin: icon("<path d=\"M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z\"></path><circle cx=\"12\" cy=\"10\" r=\"2.2\"></circle>"),
      chevron: icon("<path d=\"m6 9 6 6 6-6\"></path>"),
      book: icon("<path d=\"M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z\"></path><path d=\"M4 5.5A2.5 2.5 0 0 1 6.5 3\"></path>"),
      briefcase: icon("<rect x=\"3\" y=\"7\" width=\"18\" height=\"13\" rx=\"2\"></rect><path d=\"M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>"),
      people: icon("<path d=\"M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2\"></path><circle cx=\"9.5\" cy=\"7\" r=\"3\"></circle><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a3 3 0 0 1 0 5.75\"></path>")
    };

    function bullets(items) {
      return "<ul>" + items.map(function (item) {
        return "<li>" + esc(item) + "</li>";
      }).join("") + "</ul>";
    }

    function contactRow(symbol, label, inner) {
      return "<li class=\"contact-item\"><div class=\"icon-box\">" + symbol + "</div><div class=\"contact-info\"><p class=\"contact-title\">" + esc(label) + "</p>" + inner + "</div></li>";
    }

    function emailLink(email) {
      var at = String(email).indexOf("@");
      var text = at === -1 ? esc(email) : esc(email.slice(0, at + 1)) + "<wbr>" + esc(email.slice(at + 1));
      return "<a class=\"contact-link\" href=\"mailto:" + esc(email) + "\">" + text + "</a>";
    }

    var socials = profile.links.map(function (link) {
      return "<li class=\"social-item\"><a class=\"social-link\" href=\"" + esc(link.href) + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + esc(link.label) + "</a></li>";
    }).join("");

    var highlights = profile.highlights.map(function (item) {
      return "<li class=\"service-item\"><div class=\"service-content-box\"><h4 class=\"h4 service-item-title\">" + esc(item.title) + "</h4><p class=\"service-item-text\">" + esc(item.text) + "</p></div></li>";
    }).join("");

    function timeline(items, title, symbol) {
      var rows = items.map(function (item) {
        return "<li class=\"timeline-item\"><h4 class=\"h4 timeline-item-title\">" + esc(item.title) + "</h4><span>" + esc(item.meta) + "</span>" + (item.text ? "<div class=\"timeline-text\">" + item.text + "</div>" : "") + "</li>";
      }).join("");
      return "<section class=\"timeline\"><div class=\"title-wrapper\"><div class=\"icon-box\">" + symbol + "</div><h3 class=\"h3\">" + esc(title) + "</h3></div><ol class=\"timeline-list\">" + rows + "</ol></section>";
    }

    var ui = profile.ui;
    var education = timeline([{
      title: profile.education.degree,
      meta: profile.education.status,
      text: "<p>" + esc(profile.education.school) + "</p>"
    }], ui.education, icons.book);

    var jobs = timeline(profile.experience.map(function (job) {
      return {
        title: job.company,
        meta: job.role + " · " + job.start + " — " + job.end,
        text: "<p>" + esc(job.place) + "</p>" + bullets(job.bullets) + "<p class=\"timeline-tools\">" + esc(job.tools) + "</p>"
      };
    }), ui.experience, icons.briefcase);

    var orgs = timeline(profile.organizations.map(function (org) {
      return {
        title: org.role,
        meta: org.when + " · " + org.place,
        text: bullets(org.bullets)
      };
    }), ui.orgs, icons.people);

    var skillCards = profile.skills.map(function (group) {
      return "<li class=\"service-item\"><div class=\"service-content-box\"><h4 class=\"h4 service-item-title\">" + esc(group.name) + "</h4><p class=\"service-item-text\">" + esc(group.items) + "</p></div></li>";
    }).join("");

    var projects = profile.projects.map(function (project) {
      var cover = project.image
        ? "<img src=\"" + esc(project.image) + "\" alt=\"\">"
        : "<span class=\"project-fallback\" aria-hidden=\"true\">" + esc(project.mark) + "</span>";
      var stack = project.stack && project.stack.length
        ? "<p class=\"project-meta\"><span>" + esc(ui.stack) + "</span> " + esc(project.stack.join(", ")) + "</p>"
        : "";
      var skills = project.skills && project.skills.length
        ? "<p class=\"project-meta\"><span>" + esc(ui.skillLabel) + "</span> " + esc(project.skills.join(", ")) + "</p>"
        : "";
      return "<li class=\"project-item\"><article><div class=\"project-img\">" + cover + "</div><h3 class=\"h3 project-title\">" + esc(project.name) + "</h3><p class=\"project-category\">" + esc(project.start) + " — " + esc(project.end) + "</p><p class=\"project-text\">" + esc(project.summary) + "</p>" + stack + skills + "</article></li>";
    }).join("");

    var pages = {
      about: "about",
      resume: "resume",
      portfolio: "portfolio",
      contact: "contact"
    };
    if (!pages[page]) page = "about";

    function tab(id, label) {
      var selected = id === page;
      return "<li class=\"navbar-item\"><button class=\"navbar-link" + (selected ? " active" : "") + "\" type=\"button\" role=\"tab\" id=\"tab-" + id + "\" data-page=\"" + id + "\" aria-selected=\"" + (selected ? "true" : "false") + "\" aria-controls=\"panel-" + id + "\" tabindex=\"" + (selected ? "0" : "-1") + "\">" + label + "</button></li>";
    }

    function panel(id, title, body) {
      var on = id === page;
      return "<article class=\"" + id + (on ? " active" : "") + "\" id=\"panel-" + id + "\" data-page=\"" + id + "\" role=\"tabpanel\" aria-labelledby=\"tab-" + id + "\"" + (on ? "" : " hidden") + "><h2 class=\"h2 article-title\">" + title + "</h2>" + body + "</article>";
    }

    mount.innerHTML =
      "<main id=\"main\" class=\"vcard-shell\">" +
        "<aside class=\"sidebar\" data-sidebar>" +
          "<div class=\"sidebar-info\">" +
            "<figure class=\"avatar-box\"><img src=\"" + esc(profile.photo) + "\" width=\"150\" height=\"150\" alt=\"" + esc(profile.photoAlt) + "\"></figure>" +
            "<div class=\"info-content\"><h1 class=\"name\" title=\"" + esc(profile.name) + "\">" + esc(profile.shortName) + "</h1><p class=\"title\">" + esc(profile.title) + "</p>" +
            "<div class=\"lang-toggle\" role=\"group\" aria-label=\"" + esc(ui.language) + "\">" +
              "<button type=\"button\" data-lang=\"en\" aria-pressed=\"" + (document.documentElement.lang === "id" ? "false" : "true") + "\">EN</button>" +
              "<button type=\"button\" data-lang=\"id\" aria-pressed=\"" + (document.documentElement.lang === "id" ? "true" : "false") + "\">ID</button>" +
            "</div>" +
            "<a class=\"cv-btn\" href=\"" + esc(profile.cv) + "\" download>" + esc(ui.downloadCv) + "</a></div>" +
            "<button class=\"info_more-btn\" type=\"button\" data-sidebar-btn aria-expanded=\"false\" aria-controls=\"sidebar-more\" data-show-label=\"" + esc(ui.showContacts) + "\" data-hide-label=\"" + esc(ui.hideContacts) + "\"><span>" + esc(ui.showContacts) + "</span>" + icons.chevron + "</button>" +
          "</div>" +
          "<div class=\"sidebar-info_more\" id=\"sidebar-more\">" +
            "<div class=\"separator\"></div>" +
            "<ul class=\"contacts-list\">" +
              contactRow(icons.mail, ui.email, emailLink(profile.email)) +
              contactRow(icons.pin, ui.location, "<address>" + esc(profile.location) + "</address>") +
            "</ul>" +
            "<div class=\"separator\"></div>" +
            "<ul class=\"social-list\">" + socials + "</ul>" +
          "</div>" +
        "</aside>" +
        "<div class=\"main-content\">" +
          "<nav class=\"navbar\" aria-label=\"" + esc(ui.sections) + "\"><ul class=\"navbar-list\" role=\"tablist\">" +
            tab("about", esc(ui.about)) + tab("resume", esc(ui.resume)) + tab("portfolio", esc(ui.portfolio)) + tab("contact", esc(ui.contact)) +
          "</ul></nav>" +
          panel("about", esc(ui.aboutMe),
            "<section class=\"about-text\">" + profile.about.map(function (paragraph) {
              return "<p>" + esc(paragraph) + "</p>";
            }).join("") + "</section>" +
            "<section class=\"service\"><h3 class=\"h3 service-title\">" + esc(ui.doing) + "</h3><ul class=\"service-list\">" + highlights + "</ul></section>") +
          panel("resume", esc(ui.resume), education + jobs + orgs +
            "<section class=\"service\"><h3 class=\"h3 service-title\">" + esc(ui.skills) + "</h3><ul class=\"service-list\">" + skillCards + "</ul></section>") +
          panel("portfolio", esc(ui.portfolio), "<section class=\"projects\"><ul class=\"project-list\">" + projects + "</ul></section>") +
          panel("contact", esc(ui.contact),
            "<section class=\"contact-panel\"><p class=\"about-text\">" + esc(ui.emailLead) + "</p>" +
            "<a class=\"form-btn\" href=\"mailto:" + esc(profile.email) + "\">" + icons.mail + "<span>" + esc(ui.emailCta) + "</span></a>" +
            "<ul class=\"contacts-list contact-panel-list\">" +
              contactRow(icons.mail, ui.email, emailLink(profile.email)) +
              contactRow(icons.pin, ui.location, "<address>" + esc(profile.location) + "</address>") +
            "</ul></section>") +
          "<p class=\"layout-credit\">" + esc(ui.creditBefore) + "<a href=\"https://github.com/codewithsadee/vcard-personal-portfolio\" target=\"_blank\" rel=\"noopener noreferrer\">vCard Personal Portfolio</a>" + esc(ui.creditAfter) + "</p>" +
        "</div></main>";

    bindVcard(mount);
  }
});

function bindVcard(root) {
  var sidebar = root.querySelector("[data-sidebar]");
  var more = root.querySelector("[data-sidebar-btn]");
  if (more && sidebar) {
    more.addEventListener("click", function () {
      var open = sidebar.classList.toggle("active");
      more.setAttribute("aria-expanded", open ? "true" : "false");
      more.querySelector("span").textContent = open ? more.getAttribute("data-hide-label") : more.getAttribute("data-show-label");
    });
  }

  var tabs = Array.prototype.slice.call(root.querySelectorAll("[role='tab']"));
  var panels = Array.prototype.slice.call(root.querySelectorAll("[role='tabpanel']"));

  function show(id, focusTab) {
    tabs.forEach(function (tab, index) {
      var on = tab.getAttribute("data-page") === id;
      tab.classList.toggle("active", on);
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.tabIndex = on ? 0 : -1;
      if (on && focusTab) tab.focus();
      panels[index].classList.toggle("active", on);
      panels[index].hidden = !on;
    });
    var url = new URL(location.href);
    url.hash = id === "portfolio" ? "projects" : id === "resume" ? "experience" : id;
    history.replaceState(null, "", url);
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      show(tab.getAttribute("data-page"), false);
    });
    tab.addEventListener("keydown", function (event) {
      var next = null;
      if (event.key === "ArrowRight") next = tabs[(index + 1) % tabs.length];
      if (event.key === "ArrowLeft") next = tabs[(index - 1 + tabs.length) % tabs.length];
      if (!next) return;
      event.preventDefault();
      show(next.getAttribute("data-page"), true);
    });
  });
}
