(function () {
  var shared = {
    name: "Kirbi Simbolon",
    shortName: "Kirbi Simbolon",
    initials: "KS",
    email: "kirbi.simbolon@gmail.com",
    photo: "/img/personal.jpg",
    cv: "/assets/Kirbi-Simbolon-CV.pdf",
    links: [
      { label: "GitHub", href: "https://github.com/kirbi" },
      { label: "LinkedIn", href: "https://linkedin.com/in/kirbi-simbolon" }
    ]
  };

  var hkbpStack = ["PHP 8.4", "Laravel 11", "Filament v5", "Livewire 4", "MySQL 8.5", "Redis"];

  function pack(copy) {
    var profile = {};
    var key;
    for (key in shared) profile[key] = shared[key];
    for (key in copy) profile[key] = copy[key];
    return profile;
  }

  window.PROFILE_LOCALES = {
    en: pack({
      title: "PHP Developer",
      headline: "PHP Developer",
      description: "Portfolio of Kirbi Simbolon, a PHP Developer. Laravel, Livewire, Yii2, and Vue.js work across product, inventory, orders, and payments.",
      roleLine: "Laravel, Livewire, and the systems behind orders, stock, and payments.",
      lede: "I build and maintain business software in PHP. Recent work is a Laravel ERP for catalog, inventory, orders, and shipments. Earlier roles covered academic systems, a freelance sales API, and a Vue.js storefront.",
      location: "Bali, Indonesia",
      photoAlt: "Kirbi Simbolon, photographed outdoors",
      about: [
        "At PT Bonofactum I work on Manobo, the company’s Laravel and Livewire ERP. I add product, stock, order, inventory, and shipment features, including warehouse screens and item classification. The same codebase publishes product and inventory events through a message-broker outbox, recalculates catalog cost, and runs scheduled KPI and reporting jobs. I refactor the older PHP and cover the behavior with PHPUnit.",
        "Before joining PT Bonofactum, I was a software engineer at IT Del, where I connected academic systems to Feeder DIKTI, SPADA, BNI, and Mandiri. At Insight I designed the database and REST API for a noodle-sales system and integrated DANA. At Royale Utama Makmur I built a responsive Vue.js storefront. I also mentor junior developers. I am fluent in Indonesian and intermediate in English."
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
      experience: [
        {
          start: "Aug 2022",
          end: "Present",
          datetime: "2022-08",
          place: "Bali, Indonesia",
          company: "PT Bonofactum",
          role: "PHP Developer",
          bullets: [
            "I add Laravel and Livewire features for products, stock, orders, inventory, and shipments, including warehouse screens, item classification, and purchase-order pick lists.",
            "I record product and inventory changes in a message-broker outbox and publish them with scheduled Pub/Sub jobs.",
            "I maintain COGS settings and history, article-level COGS on product analysis exports, and the catalog cost stored on each product after recalculation.",
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
            "I built the backend and REST API for a noodle-sales system.",
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
          role: "Front-end Developer",
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
          stack: hkbpStack,
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
        { name: "Languages", items: "Indonesian (fluent), English (intermediate)." },
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
          place: "Diponegoro University",
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
      ],
      ui: {
        skip: "Skip to content",
        template: "Template",
        switchToVcard: "Switch to vCard",
        switchToModern: "Switch to Modern",
        language: "Language",
        menu: "Menu",
        close: "Close",
        about: "About",
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        education: "Education",
        contact: "Contact",
        educationOrgs: "Education and organizations",
        based: "Based",
        now: "Now",
        tools: "Tools",
        stack: "Stack",
        skillLabel: "Skills",
        showContacts: "Show contacts",
        hideContacts: "Hide contacts",
        aboutMe: "About me",
        resume: "Resume",
        portfolio: "Portfolio",
        doing: "What I’m doing",
        orgs: "Organizations",
        downloadCv: "Download CV",
        emailLead: "Email is the direct way to reach me. The button opens your mail app.",
        emailCta: "Email Kirbi Simbolon",
        location: "Location",
        email: "Email",
        primaryNav: "Primary",
        sections: "Sections",
        creditBefore: "vCard layout adapted from ",
        creditAfter: " by codewithsadee, MIT License."
      }
    }),
    id: pack({
      title: "Pengembang PHP",
      headline: "Pengembang PHP",
      description: "Portofolio Kirbi Simbolon, pengembang PHP. Pekerjaan Laravel, Livewire, Yii2, dan Vue.js untuk produk, inventori, pesanan, dan pembayaran.",
      roleLine: "Laravel, Livewire, dan sistem di balik pesanan, stok, serta pembayaran.",
      lede: "Saya membangun dan memelihara perangkat lunak bisnis dengan PHP. Pekerjaan terbaru adalah ERP Laravel untuk katalog, inventori, pesanan, dan pengiriman. Peran sebelumnya mencakup sistem akademik, API penjualan lepas, dan etalase Vue.js.",
      location: "Bali, Indonesia",
      photoAlt: "Kirbi Simbolon, difoto di luar ruangan",
      about: [
        "Di PT Bonofactum saya mengerjakan Manobo, ERP Laravel dan Livewire perusahaan. Saya menambahkan fitur produk, stok, pesanan, inventori, dan pengiriman, termasuk layar gudang dan klasifikasi barang. Kode yang sama menerbitkan peristiwa produk dan inventori lewat outbox message broker, menghitung ulang biaya katalog, serta menjalankan pekerjaan KPI dan laporan terjadwal. Saya merapikan PHP yang lama dan menutup perilakunya dengan PHPUnit.",
        "Sebelum bergabung dengan PT Bonofactum, saya bekerja sebagai software engineer di IT Del. Di sana saya menghubungkan sistem akademik dengan Feeder DIKTI, SPADA, BNI, dan Mandiri. Di Insight saya merancang basis data dan REST API untuk sistem penjualan mi serta mengintegrasikan DANA. Di Royale Utama Makmur saya membangun etalase Vue.js yang responsif. Saya juga membimbing pengembang junior. Saya fasih berbahasa Indonesia dan berbahasa Inggris pada tingkat menengah."
      ],
      highlights: [
        {
          title: "Sistem produk",
          text: "Fitur Laravel dan Livewire untuk produk, stok, pesanan, inventori, dan pengiriman, termasuk layar gudang dan klasifikasi barang."
        },
        {
          title: "Integrasi",
          text: "Pesan pesanan EDI dan despatch advice, pertukaran ChannelAdvisor, serta koneksi pembayaran atau perbankan seperti DANA, BNI, dan Mandiri."
        },
        {
          title: "Laporan dan pengujian",
          text: "Laporan terjadwal, pekerjaan KPI termasuk penutupan produksi harian, dan cakupan PHPUnit."
        },
        {
          title: "Pembimbingan",
          text: "Merapikan PHP lama dan membimbing pengembang junior."
        }
      ],
      experience: [
        {
          start: "Agu 2022",
          end: "Sekarang",
          datetime: "2022-08",
          place: "Bali, Indonesia",
          company: "PT Bonofactum",
          role: "Pengembang PHP",
          bullets: [
            "Saya menambahkan fitur Laravel dan Livewire untuk produk, stok, pesanan, inventori, dan pengiriman, termasuk layar gudang, klasifikasi barang, dan daftar ambil pesanan pembelian.",
            "Saya mencatat perubahan produk dan inventori di outbox message broker, lalu menerbitkannya lewat pekerjaan Pub/Sub terjadwal.",
            "Saya memelihara pengaturan dan riwayat COGS, COGS tingkat artikel pada ekspor analisis produk, serta biaya katalog yang tersimpan di tiap produk setelah perhitungan ulang.",
            "Saya mendukung pesan pesanan EDI dan despatch advice, serta pertukaran produk, stok, dan pesanan ChannelAdvisor.",
            "Saya membuat laporan terjadwal dan pekerjaan KPI, termasuk penutupan produksi harian, dan menutupnya dengan PHPUnit.",
            "Saya merapikan PHP lama agar lebih mudah dibaca, dirawat, dan cepat, menyederhanakan akses MySQL, serta membimbing pengembang junior."
          ],
          tools: "PHP, MySQL, JavaScript, jQuery, Bootstrap, Laravel, Livewire, Docker dengan WSL 2, server Linux"
        },
        {
          start: "Mei 2020",
          end: "Juli 2022",
          datetime: "2020-05",
          place: "Laguboti, Indonesia",
          company: "IT Del",
          role: "Software Engineer",
          bullets: [
            "Saya menambahkan fitur yang dipakai komunitas akademik: kalender akademik, pembayaran bendahara, pemeriksaan tugas otomatis, pengingat tugas, serta laporan dalam grafik dan dokumen.",
            "Saya mengintegrasikan sistem dengan Feeder DIKTI dan SPADA, serta dengan sistem perbankan BNI dan Mandiri.",
            "Saya merancang basis data, mengelola hosting cPanel, dan memelihara situs departemen lain di Laravel, Yii2, Yii1, WordPress, dan stack terkait."
          ],
          tools: "Yii2, MySQL, REST API, server Linux, Moodle, panel web CWP, PHP, GitLab"
        },
        {
          start: "Jan 2020",
          end: "Mar 2021",
          datetime: "2020-01",
          place: "Medan, Indonesia",
          company: "Insight",
          role: "Pengembang Back-end · Lepas",
          bullets: [
            "Saya membangun backend dan REST API untuk sistem penjualan mi.",
            "Saya merancang basis data dan proses bisnis di sekitarnya.",
            "Saya mengintegrasikan sistem pembayaran DANA dan pelacakan pembayaran pelanggan.",
            "Saya melatih mahasiswa magang."
          ],
          tools: "Laravel, MySQL, REST API, API pembayaran DANA, GitLab"
        },
        {
          start: "Agu 2018",
          end: "Des 2019",
          datetime: "2018-08",
          place: "Medan, Indonesia",
          company: "Royale Utama Makmur",
          role: "Pengembang Front-end",
          bullets: [
            "Saya membangun front-end Vue.js untuk situs e-commerce agar tetap nyaman dipakai dari ponsel sampai desktop, di peramban macOS dan Windows.",
            "Saya menguji aplikasi web dengan LambdaTest."
          ],
          tools: "Vue.js, Laravel, API Raja Ongkir, PostgreSQL, REST API, LambdaTest, GitHub"
        }
      ],
      projects: [
        {
          name: "Sistem Informasi HIV/AIDS Ministry HKBP",
          mark: "HKBP",
          start: "Sep 2021",
          end: "Jul 2022",
          datetime: "2021-09",
          summary: "Sistem manajemen data klinis HIV. Cakupannya meliputi pendaftaran pasien, konseling, tindak lanjut, pemeriksaan klinis, terapi ART termasuk pergantian regimen ARV, program kerja untuk manfaat dan nutrisi, data master referensi, serta laporan dan ekspor PDF dan Excel.",
          stack: hkbpStack,
          skills: ["Analisis Sistem", "Pengembangan Sistem"]
        },
        {
          name: "Sistem Informasi Difabel Hephata",
          mark: "Hephata",
          start: "Jul 2020",
          end: "Jan 2021",
          datetime: "2020-07",
          summary: "Sistem informasi untuk Yayasan Panti Hephata yang mendigitalkan pengelolaan data: penempatan di panti dan di RBM (rumah rehabilitasi berbasis masyarakat), riwayat kesehatan, pendidikan dan pencapaian, serta data staf dan pendamping. Saya menganalisis kebutuhan, merancang sistem, mengembangkan fitur, mengelola basis data, dan menguji sistem. Proyek ini membuat data lebih terstruktur, terpusat, dan lebih mudah diakses untuk administrasi dan layanan.",
          stack: [],
          skills: ["Pengembangan Sistem", "Sistem Manajemen Basis Data (DBMS)"]
        }
      ],
      skills: [
        { name: "Bahasa", items: "Bahasa Indonesia (fasih), bahasa Inggris (menengah)." },
        { name: "Pemrograman", items: "PHP, JavaScript" },
        { name: "Framework", items: "Laravel, Yii2, Livewire, Bootstrap, Vue.js" },
        { name: "Basis data", items: "MySQL, PostgreSQL" },
        { name: "Backend & API", items: "RESTful API, autentikasi, integrasi payment gateway (DANA, BNI)" },
        { name: "Alat", items: "Git, GitLab, Docker, WSL 2, cPanel, server Linux, Moodle, panel web CWP" },
        { name: "Konsep", items: "MVC, microservices, pengujian unit" }
      ],
      education: {
        status: "Sedang berlangsung · Mei 2028",
        degree: "Sarjana Ilmu Komputer",
        school: "Universitas Diponegoro · Semarang, Indonesia"
      },
      organizations: [
        {
          when: "2014–2015",
          role: "Hubungan Masyarakat, PMK",
          place: "Universitas Diponegoro",
          bullets: [
            "Saya mendukung inisiatif komunikasi dan promosi.",
            "Saya membantu mengatur acara mahasiswa dan kegiatan komunitas.",
            "Saya membantu menjaga hubungan dengan mahasiswa, alumni, dan mitra eksternal."
          ]
        },
        {
          when: "2011–2012",
          role: "Wakil Ketua",
          place: "OSIS SMP",
          bullets: [
            "Saya membantu ketua memimpin OSIS dan mengoordinasikan kegiatan.",
            "Saya mengatur acara sekolah dan program siswa.",
            "Saya mewakili siswa dalam rapat dengan guru dan pihak sekolah.",
            "Saya mengoordinasikan anggota panitia agar acara berjalan sesuai rencana."
          ]
        }
      ],
      ui: {
        skip: "Lewati ke isi",
        template: "Templat",
        switchToVcard: "Beralih ke vCard",
        switchToModern: "Beralih ke Modern",
        language: "Bahasa",
        menu: "Menu",
        close: "Tutup",
        about: "Tentang",
        experience: "Pengalaman",
        projects: "Proyek",
        skills: "Keahlian",
        education: "Pendidikan",
        contact: "Kontak",
        educationOrgs: "Pendidikan dan organisasi",
        based: "Berbasis",
        now: "Kini",
        tools: "Alat",
        stack: "Stack",
        skillLabel: "Keahlian",
        showContacts: "Tampilkan kontak",
        hideContacts: "Sembunyikan kontak",
        aboutMe: "Tentang saya",
        resume: "Riwayat",
        portfolio: "Portofolio",
        doing: "Yang saya kerjakan",
        orgs: "Organisasi",
        downloadCv: "Unduh CV",
        emailLead: "Email adalah cara langsung untuk menghubungi saya. Tombol ini membuka aplikasi surel Anda.",
        emailCta: "Email Kirbi Simbolon",
        location: "Lokasi",
        email: "Email",
        primaryNav: "Utama",
        sections: "Bagian",
        creditBefore: "Tata letak vCard diadaptasi dari ",
        creditAfter: " oleh codewithsadee, lisensi MIT."
      }
    })
  };

  window.PROFILE = window.PROFILE_LOCALES.en;
})();
