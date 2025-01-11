---
title: "Pengenalan: Impact PWA pada bisnis, perlukah?"
description: "Progressive Web Apps: dalam pandangan bisnis, perlu ngga sih???"
tags: ["web", "diskusi", "javascript"]
publishDate: "16 Dec 2020"
---

Setiap dihadapkan pada sesuatu yang baru,
entah ide, teknologi, bahasa,
apapun yang baru.
Kita pasti akan dihadang beberapa pertanyaan,
terlebih untuk perusahaan/bisnis yang sudah berjalan dengan cukup baik.

- **Apa itu yang dipengen pengunjung?**
- **Apa memungkinkan untuk diterapkan?**
- **Apa ada impact nya di usaha saya?**

Yah, kita kan ngga mau buang waktu dan tenaga buat yang ngga ada manfaatnya....

Researh dari Google memaparkan bahwa

- User ngga suka _delays_ dan ketidakhandalan.
  **Pastinya** kita ngga suka website lemot,
  udah nunggu lama keluarnya error,
  no network, connection reset, kan males.
  Bahkan [dibandingin sama nonton film horror lho](https://blog.hubspot.com/marketing/mobile-website-load-faster).
- 50% pengguna HP, lebih suka akses website mobile daripada aplikasi, termasuk saya, [link]https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/smartphone-user-mobile-shopping-preferences/)
- Termasuk alasan di atas karena masalah penyimpanan (dilema HP yang penting ada, termasuk juga, haha..), [link](https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/why-users-uninstall-travel-apps/), yang mana PWA ukurannya jauh lebih kecil dari aplikasi.
- [link lagi nih](https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/smartphone-mobile-app-and-site-purchase-data/)
- [link lagi nih, wkwkwk](https://www.thinkwithgoogle.com/data/smartphone-user-notification-preferences/)

Intinya user lebih suka pengalaman kesederhanaan web, dengan kemudahan & kehandalan app.

4 point yang user pengen nih, **F.I.R.E**

- _Fast_
- _Installable_
- _Reliable_
- _Engaging_

Hasil dari research Tim Google sih gitu, ya percaya aja lah ya....

- ## Fast

  2019, Ebay melakukan banyak hal untuk meningkatkan kecepatan load time mereka,
  hasilnya tiap **0.1** detik peningkatan kecepatan di tiap halaman pencarian,
  hitungan add-to-cart meningkat **0.5%**. [bisa dibaca di sini](https://web.dev/shopping-for-speed-on-ebay/).

  [Selebihnya Value of Speed bisa dibaca di sini](https://web.dev/value-of-speed/).

- ## Installable

  Kenapa _Installable_?
  Karena jadi _mudah_ dan _dekat_ ([dibahas di artikel sebelumnya](/blog/pwa-bag-1-pengenalan/))
  LDR itu ribet...

  Memang dengan kita implement PWA,
  web kita jadi terasa lebih dekat diakses, mudah dicari,
  berasa kayak aplikasi pada umumnya.

  Eits, tapi prosesnya lebih sederhana PWA loh,
  daripada Aplikasi.

  Mari kita sama-sama mulai dari web.
  Anggap kita ngga tau dia ada aplikasinya.
  Proses Instalasi Aplikasi,

  1. Klik install app dari Web
  2. Redirected to Store
  3. Download, Terinstall
  4. (Mungkin bikin akun dulu, jadi ya ngga dihitung deh)
  5. Mulai dari awal aplikasi
     (relaunching the Android app at the top of the funnel)

  Proses di Web,

  1. Klik install pwa dari Web
  2. Pop up instalasi (Seamless PWA), Terinstall
  3. Kita tinggal lanjutin session
     (doesn't take the user away from the current conversion funnel)

  Arti dari step terakhir adalah,

  kita buka web nih, belum tertarik,

  ganti halaman, baca sana, baca sini,
  lihat sana, lihat sini,
  baru tertarik,

  trus klik tombol install, entah di samping/bawah,

  kalau app, kita mulai lagi dari awal,

  sedangkan PWA, ngga perlu mulai lagi,
  kita dibukain PWA nya,
  dan otomatis sudah pada halaman itu, mantap kan....

  di PWA, ini disebut **app dynamic Discover-Launch-Switch**

  Belum lagi kalau ada pengecekan keamanan aplikasi, ala-ala Xiomai (hp-ku)....

  Nah, karenanya tawaran install PWA ini juga butuh strategi,

  Secara pribadi saya juga males, baru juga buka web,
  udah banyak pop up,
  install ini, install itu,
  allow ini, allow itu,

  Tarohlah kalau user udah buka 2 atau 3 halaman,
  atau bisa pas user udah checkout.

  Teks nya dibikin kreatif lah,
  ala-ala sales MLM,

  _"Lebih mudah tracking order-mu, install kalee..."_, bisa gitu kali,
  atau _"Install tanpa ribet, secepat kilat, mantaps..."_

  Nah install dari mana,
  dan apa yang dilakukan user setelah install,
  bisa kita tambah _event-tracking_,
  _technical_ kita bahas lain kesempatan ya....

- ## Reliable

  Game Dinosaurus di Chrome,
  yang muncul pas offline itu,
  dimainin lebih dari 270 juta kali tiap bulan,
  [check sini](https://www.blog.google/products/chrome/chrome-dino/).

  User mah pengennya aplikasi tetep jalan, mau internet ngadat, ato offline sekalipun.

  Ya paling ngga,
  ilustrasi sederhana, yang ngasih tau kalo lagi offline kek.
  Atau lebih cakep, kasih game gitu,
  biar kekecewaan user sedikit terobati.
  (Baru baru ini Shopee lagi cari Game Engineer & Site Reliability Engineer, wkwkwk, nah, potensial kan...)

  Atau lebih mantap lagi, data data yang udah ada & baru baru ini dibuka tetep bisa diakses,
  meskipun ngga bisa bikin data baru.

  Contoh kasus, (Perumpamaan) udah beli tiket di AnuStore,

  buru buru nih,
  sekalian berangkat, print tiket di stasiun lah,
  hemat duit, ngga bolak balik,

  mau lihat kode booking nya atau mau kasih tunjuk E-Boarding Pass -nya,
  eh kuota abis / jaringan jelek banget,
  lupa Screenshot.

  Kan sedih banget kalau gagal perjalanan masalah gini.
  Buat perantau ini berdampak banget lho....

  Hal-hal kayak gini,
  kalau udah disimpan sematara di local kita mah, aman.

  [Berikut kisah sukses Trivago](https://www.thinkwithgoogle.com/intl/en-154/insights-inspiration/case-studies/trivago-embrace-progressive-web-apps-as-the-future-of-mobile/)

  Selebihnya bisa dibaca [di sini](https://pwa-book.awwwards.com/chapter-6), mungkin kita bahas sendiri nanti.

- ## Engaging

  Dengan ada nya manfaat & kemudahan di atas,
  harusnya cukup buat menarik user.

  Ditambah pemanfaatan _Push Notification_ bisa buat user lebih tertarik dengan platform kita.

  [Berikut kisah sukses Carefour mengingatkan user mereka soal cart yang terlantar](https://useinsider.com/case-studies/carrefour/).

  Eits... tapi hati-hati ya naroh pop up permission nya,
  karena cukup ngeselin juga dikit-dikit allow sini-allow sana.
  User harus bener-bener tau permission itu manfaatnya apa.
  [Check best practice-nya](https://developers.google.com/web/fundamentals/push-notifications/permission-ux)

[Kisah sukses lain bisa dilihat di sini ya...](https://www.pwastats.com/)

Well, Semua itu ngga harus langsung seambrek diterapin semua ya....

Bertahap, feature by feature.

Utamakan feature yang akan bermanfaat bagi user.

Rencanakan dengan baik.

Dan jangan lupa dihitung, seberapa berdampak hal itu bagi bisnis kita...

Finally It's The **P** in _PWA_, **a progressive launch, feature by feature**
