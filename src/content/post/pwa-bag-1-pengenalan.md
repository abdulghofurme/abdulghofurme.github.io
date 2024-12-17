---
title: "Pengenalan: Apa itu Progressive Web Apps"
description: "Progressive Web Apps: apakah akan menggantikan native apps???"
tags: ["web", "diskusi", "javascript"]
publishDate: "15 Dec 2020"
ogImage: ""
---

Progressive **Web** **App**

Oke, kunci dari apapun benda di atas itu adalah **Web** dan **App**.

Sebelum jauh kita bahas gabungan 2 hal itu, kita pun perlu sedikit mengerti masing-masingnya.

- _Web_ merupakan _entity_ yang keren,
  apaan entity?
  ya pokoknya keren lah...
  Kenapa keren?
  Karena web bisa diakses di semua devices,
  semua OS,
  dengan cukup perlu web browser.
  Apalagi karena dia berbentuk url,
  kita dapat mencari & membagikan yang kita inginkan/temukan dengan siapa pun, dimana pun.
  Dan tentunya up-to-date.

      Web Applications can reach *anyone, anywhere, on any device* with single codebase.

- _App_ atau **Platform-spesific application** juga keren.
  Dekat dan mudah untuk diakses.
  Kenapa begitu?
  Alih-alih kita harus buka chrome,
  trus nyari alamat website di google,
  trus baru klik kalo ketemu.
  App ngga gitu,
  cukup klik aja kalo udah ada di home screen / dock,
  atau paling ribet juga kita cukup cari aplikasi nya, ketemu, trus klik.
  Ngga cuman itu,
  App juga bisa diakses pas koneksi mengkhawatirkan.
  Kemampuan App juga luar biasa,
  buat & bikin file, baca hardware, kontak, kalender,
  bisa ngapain aja di platform kita lah.

      Platform-spedific applications feel like *part of the device* the run on.

Nah, masing-masing hadir dengan keunggulan & kekurangan,

- Web reach more users, but less capbilities
- App more capabilities, but platform-spesific

Progressive Web Apps (PWA) are built and enhanced with modern APIs to deliver enhanced capabilities, reliability, and installability while reaching anyone, anywhere, on any device with a single codebase.

## 3 Pilar Aplikasi

Berikut adalah 3 pilar yang dipakai PWA untuk merubah pengalaman web berasa seperti aplikasi.

BTW, ini bukan untuk gantiin aplikasi ya..

kuncinya _feels like a platform-specific application_

- **Capable**,
  Dengan adanya modern APIs & Web Assembly, web juga bisa nglakuin banyak hal.
  kita bisa bikin aplikasi web video conference, pake WebRTC, geolocation, & push notifications.
  Ada WebGL buat render 2D & 3D.
  Ada WebVR buat VR.
  Ditambah Web Assembly, kita bisa ningkatin kinerja web buat proses-proses yang berat ([link](https://medium.com/@torch2424/webassembly-is-fast-a-real-world-benchmark-of-webassembly-vs-es6-d85a23f8e193)).

      Tentu bukan berarti tiba-tiba web bisa ngalahin App dalam hal capabilities.
      Tapi secara pribadi, penulis (*ciah penulis*) ngga sabar buat perkembangan apa lagi yang bisa dilakuin web.
      Kita pantengin aja di [sini](https://whatwebcando.today/).
      [Apalagi *momok* (microsoft edge) resmi bakal shut-down](https://see.news/microsoft-to-shut-down-internet-explorer-on-november/), tentu girang web developer.

- **Reliable**
  Aplikasi yang handal tentu harus bisa dipake mau gimana pun keadaan internet kita kan,
  Kita user pengennya aplikasi tetep bisa muncul meskipun internet ga jelas,
  mentok mentok ngga ada internet sekalipun,
  user pengennya tetep muncul,
  meskipun cuman ngasih tau kalau lagi ada gannguan,
  ngga cuman digantungin,
  ngga enak kan digantungin gitu.
  Yah, at least ngga keluar dinosaurus lah.
  Mending dinosaurus, masih bisa dimainin,
  lah kalo text ngga jelas, kan males

      Intinya user pengen kalau bisa secepat kilat lah, kalau emang susah, ya paling ngga tetep ada tampilannya dong. Nah kita bisa pake Web Caching.

- **Installable**
  Alih-alih tampil sebagai browser tab, PWA tampil layaknya aplikasi, standalone window.
  Ngga cuman itu,
  bisa tampil di homescreen, dock, taskbar,
  pokoknya udah kayak aplikasi lah.
  Nah, ini yang buat web _feel like part of the device they're installed on_.
  Ini impact-nya cukup gede loh, karena dnegan begitu user jadi berbeda cara pandangnya tentang web itu,
  dan jadi dekat & mudah diakses kan...

**The numbers don't lie! Companies that have launched Progressive Web Apps have seen impressive results. For example, Twitter saw a 65% increase in pages per session, 75% more Tweets, and a 20% decrease in bounce rate, all while reducing the size of their app by over 97%. After switching to a PWA, Nikkei saw 2.3 times more organic traffic, 58% more subscriptions, and 49% more daily active users. Hulu replaced their platform-specific desktop experience with a Progressive Web App and saw a 27% increase in return visits.**

Terlepas dari capabilities yang masih belum sehebat aplikasi,
kita tetep dapet _reliable_ & _installable_.
Lagian buat keperluan web pada umumnya sih, _capabilites_ yang sekarang cukup lah...

Keren kan...
Yuk cobain...

Next kita bahas impact nya dari segi bisnis ya...
