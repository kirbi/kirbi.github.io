window.PROFILE = {
  name: "Y. R. Kirbi Simbolon",
  shortName: "Kirbi Simbolon",
  initials: "KS",
  title: "PHP Developer",
  headline: "PHP developer in Bali.",
  roleLine: "Laravel, Livewire, and the systems behind orders, stock, and payments.",
  lede: "I build and maintain business software in PHP. Recent work is a Laravel ERP for catalog, inventory, orders, and shipments. Earlier roles covered academic systems, a freelance sales API, and a Vue.js storefront.",
  location: "Bali, Indonesia",
  email: "kirbi.simbolon@gmail.com",
  phone: "+62 823 2528 3895",
  phoneHref: "tel:+6282325283895",
  photo: "img/personal.jpg",
  photoAlt: "Kirbi Simbolon, photographed outdoors",
  about: [
    "At PT. Bonofactum I work on Manobo, the company’s Laravel and Livewire ERP. I add product, stock, order, inventory, and shipment features, including warehouse screens and item classification. The same codebase publishes product and inventory events through a message-broker outbox, recalculates catalog cost, and runs scheduled KPI and reporting jobs. I refactor the older PHP and cover the behavior with PHPUnit.",
    "Before Bali I was a software engineer at IT Del, where I connected academic systems to Feeder DIKTI, SPADA, BNI, and Mandiri. At Insight I designed the database and REST API for a noodle-sales system and integrated DANA. At Royale Utama Makmur I built a responsive Vue.js storefront. I also mentor junior developers. I am fluent in Indonesian and intermediate in English."
  ],
  highlights: [
    {
      title: "Product systems",
      text: "Laravel and Livewire features for products, stock, orders, inventory, and shipments, including warehouse screens and item classification."
    },
    {
      title: "Integrations",
      text: "EDI order and despatch-advice messages, ChannelAdvisor exchange, and payment or banking connections such as DANA, BNI, and Mandiri."
    },
    {
      title: "Reports and tests",
      text: "Scheduled reports, KPI jobs including daily production closing, and PHPUnit coverage."
    },
    {
      title: "Mentoring",
      text: "Refactoring legacy PHP and mentoring junior developers."
    }
  ],
  links: [
    { label: "GitHub", href: "https://github.com/kirbi" },
    { label: "LinkedIn", href: "https://linkedin.com/in/kirbi-simbolon" }
  ],
  experience: [
    {
      start: "Aug 2022",
      end: "Present",
      datetime: "2022-08",
      place: "Bali, Indonesia",
      company: "PT. Bonofactum",
      role: "PHP Developer",
      bullets: [
        "I add Laravel and Livewire features for products, stock, orders, inventory, and shipments, including warehouse screens, item classification, and purchase-order pick lists.",
        "I record product and inventory changes in a message-broker outbox and publish them with scheduled Pub/Sub jobs.",
        "I maintain COGS settings and history, article-level COGS on product analysis exports, and the catalog cost that recalculation stores on each product.",
        "I support EDI order and despatch-advice messages, and ChannelAdvisor product, stock, and order exchange.",
        "I build scheduled reports and KPI jobs, including daily production closing, and cover them with PHPUnit.",
        "I refactor legacy PHP for readability, maintainability, and performance, streamline MySQL access, and mentor junior developers."
      ],
      tools: "PHP, MySQL, JavaScript, jQuery, Bootstrap, Laravel, Livewire, Docker with WSL 2, Linux server"
    },
    {
      start: "May 2020",
      end: "July 2022",
      datetime: "2020-05",
      place: "Laguboti, Indonesia",
      company: "IT Del",
      role: "Software Engineer",
      bullets: [
        "I added features the academic community uses: an academic calendar, bursar payments, automated task checking, task reminders, and reports in charts and documents.",
        "I integrated the system with Feeder DIKTI and SPADA, and with the BNI and Mandiri banking systems.",
        "I designed databases, managed cPanel hosting, and maintained other departments’ sites on Laravel, Yii2, Yii1, WordPress, and related stacks."
      ],
      tools: "Yii2, MySQL, REST API, Linux server, Moodle, CWP web panel, PHP, GitLab"
    },
    {
      start: "Jan 2020",
      end: "Mar 2021",
      datetime: "2020-01",
      place: "Medan, Indonesia",
      company: "Insight",
      role: "Back-end Developer · Freelance",
      bullets: [
        "I built the backend and REST API for a system that sells noodles.",
        "I designed the database and the business processes around it.",
        "I integrated the DANA payment system and customer payment tracking.",
        "I trained internship students."
      ],
      tools: "Laravel, MySQL, REST API, DANA payment API, GitLab"
    },
    {
      start: "Aug 2018",
      end: "Dec 2019",
      datetime: "2018-08",
      place: "Medan, Indonesia",
      company: "Royale Utama Makmur",
      role: "Front End Developer",
      bullets: [
        "I built the Vue.js front end for an ecommerce site so the interface stays usable from phones through desktops, on macOS and Windows browsers.",
        "I tested the web application with LambdaTest."
      ],
      tools: "Vue.js, Laravel, Raja Ongkir API, PostgreSQL, REST API, LambdaTest, GitHub"
    }
  ],
  projects: [
    {
      name: "Sistem Informasi HIV/AIDS Ministry HKBP",
      mark: "HKBP",
      start: "Sep 2021",
      end: "Jul 2022",
      datetime: "2021-09",
      summary: "Clinical HIV data-management system. It covers patient registration, counseling, follow-up, clinical examinations, ART therapy including ARV regimen changes, work programs for benefits and nutrition, reference master data, and PDF and Excel reports and exports.",
      stack: ["PHP 8.4", "Laravel 11", "Filament v5", "Livewire 4", "MySQL 8.5", "Redis"],
      skills: ["Systems Analysis", "System Development"]
    },
    {
      name: "Sistem Informasi Difabel Hephata",
      mark: "Hephata",
      start: "Jul 2020",
      end: "Jan 2021",
      datetime: "2020-07",
      summary: "Information system for Yayasan Panti Hephata that digitalizes data management: placement in the institution and in RBM (community-based rehabilitation homes), health history, education and achievements, and staff and caregiver data. I analyzed requirements, designed the system, developed features, managed the database, and tested the system. The project made the data more structured, centralized, and easier to access for administration and services.",
      stack: [],
      skills: ["System Development", "Database Management System (DBMS)"]
    }
  ],
  skills: [
    { name: "Languages", items: "Indonesian, fluent. English, intermediate." },
    { name: "Programming", items: "PHP, JavaScript" },
    { name: "Frameworks", items: "Laravel, Yii2, Livewire, Bootstrap, Vue.js" },
    { name: "Databases", items: "MySQL, PostgreSQL" },
    { name: "Backend & API", items: "RESTful API, authentication, payment gateway integration (DANA, BNI)" },
    { name: "Tools", items: "Git, GitLab, Docker, WSL 2, cPanel, Linux server, Moodle, CWP web panel" },
    { name: "Concepts", items: "MVC, microservices, unit testing" }
  ],
  education: {
    status: "In progress · May 2028",
    degree: "Bachelor of Computer Science",
    school: "Diponegoro University · Semarang, Indonesia"
  },
  organizations: [
    {
      when: "2014–2015",
      role: "Public Relations, PMK",
      place: "University of Diponegoro",
      bullets: [
        "I supported communication and promotional initiatives.",
        "I helped organize student events and community activities.",
        "I helped maintain relationships with students, alumni, and external partners."
      ]
    },
    {
      when: "2011–2012",
      role: "Vice President",
      place: "Middle School Student Council",
      bullets: [
        "I assisted the president in leading the student council and coordinating activities.",
        "I organized school events and student programs.",
        "I represented students in meetings with teachers and the school administration.",
        "I coordinated committee members so events ran as planned."
      ]
    }
  ]
};
