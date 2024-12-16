---
title: "PWA - Installable"
description: "Progressive Web Apps: installable & ringan, apakah akan menggantikan native apps???"
tags: ["web", "diskusi", "javascript"]
publishDate: "17 Dec 2020"
ogImage: ""
---

Setelah mengerti apa itu PWA dan benefit-nya.
Sekarang mari bahas sedikit lebih dalam satu persatu point yang telah kita colek pada bahasan-bahasan sebelumnya.

Seperti kita sebut sebelumnya,
PWA menawarkan pengalaman layaknya Aplikasi.

Lantas bagaimana proses instalasi-nya?

Beberapa waktu lalu, mungkin tahun lalu, cara instalasi PWA hanya bisa dilakukan dari browser. Artinya kita hanya bisa install PWA dengan mengunjungi websitenya, yang mana itu lebih singkat & sederhana dibandingkan Instalasi Aplikasi dari browser.

Lantas, bagaimana bila kita hendak install langsung dari app store?
Sekarang pengalaman instalasi PWA dari app store pun bisa lho,
check [link](https://developers.google.com/web/android/trusted-web-activity).

"Hei, kalau aku baru mau bikin platform atau baru ngembangin platform,
PWA **mungkin** lebih baik.
Tapi gimana kalau aku udah punya Aplikasi juga?"

Inilah pentingnya strategi untuk menghindari kompetisi & kanibalisme platform, namun tetap meningkatkan _installation rates_.

Memiliki PWA & Aplikasi sekaligus akan sangat membingungkan,
tentu kita pasti akan memilih salah satu.
Aplikasi mungkin pilihan terbaik,
tapi juga memiliki kekurangan.

- _Batasan Penyimpanan_

  Pernah ngga sih mau install aplikasi yang ngga seberapa,
  karena ngga cukup penyimpanannya,
  eh, harus ngorbanin aplikasi lain,
  clear cache,
  atau bahkan hapus foto/video keluarga,
  kan sedih ya, nasib HP yang penting punya.

  _Sultan mah ngga pernah kali ya_.

- _Bandwith_

  Instalasi _Rata rata cukup Gede & Lama_, apalagi kalau internet lelet.

- _Friction_, apa bilangnya? Gesekan?

  Kalau kita datang dari website, satu dua proses yang diperlukan sampai akhirnya aplikasi bisa dijalankan itu sangat penting.

  Semakin banyak step akan menunda aksi yang diinginkan user,
  bisa berujung pambatalan aksi.
  "Ribet amat, ngga jadi ah".

  Berdampak banget kan, hal-hal kecil gini.

  _Mungkin_ ngga terlalu berasa kalau kita langsung ke app store.

- _Siklus Pembaruan_

  Update di Aplikasi tentu prosesnya lebih lama,
  ini berarti kita mengulang bahasan di atas.

Kita bisa menghitung segment user dengan kendala di atas ini,
dengan lihat persentase user yang hanya menggunakan mobile web.
Silahkan dibuka Dashboard Analytic nya.

Kalau ngga ada, well... 👍.
Berarti _mungkin_ anda ngga perlu PWA.

Sebaliknya, bila segment user di atas ada,
atau hendak meningkatkan penjualan, dll dari user website desktop,
dengan memudahkan akses mobile site,
atau kita berusaha merambah segment user yang selama ini belum terjamah.

Well... Mungkin kita perlu mempertimbangkan PWA.

1. PWA sebagai pengganti Platform-specific App

   Bila kenyataan di lapangan sekarang munkin salah satu dari,

   - Pengguna website anda lebih banyak dari pada app
   - Feature website lebih lengkap dari app
   - Aplikasi sudah lama tidak update
   - Aplikasi tidak mendukung layar lebar seperti chrome OS

   Mungkin anda perlu migrasi dari Platform-specific app ke PWA.
   Kelebihan bisa dibaca pada artikel sebelumnya.

2. PWA sebagai pelengkap Platform-specific App

   Ini adalah solusi bagi segment user dengan kendala di atas, atau yang lainnya.

   Kita dapat menawarkan banner/pop-up install PWA pada user, dengan kemungkinan dari beberapa hal berikut,

   - User sering buka mobile site, tapi tidak memiliki aplikasi-nya (jelas).
   - User yang beberapa kali klik banner instalasi app,
     tapi pada akhirnya tidak memiliki aplikasi-nya
   - User beberapa kali datang, mungkin 3 kali, 4 atau berapa kali buka web.
   - dan lainnya

   Tekniknya bisa macam-macam, simpan di `cookie`, `localStorage`, di `database` silahkan...

3. PWA berdampingan dengan Platform-specific App

   Pada strategi ini, kita tawarkan PWA & Aplikasi kita di app store.

   Berdasarkan [research berikut](https://medium.com/googleplaydev/shrinking-apks-growing-installs-5d3fcba23ce2),
   setiap ukuran aplikasi bertambah **6MB** conversion rate berkurang **1%**.

   Pada Umumnya **Platform-specific App** memiliki ukuran diatas 10MB untuk Android, dan 30MB untuk iOS, itu kemungkinan ukuran terkecil ya.

   Sementara PWA normalnya tidak sampai ukuran tersebut, beberapa MB lah, ngga sampai puluhan (**normalnya, tergantung developer-nya ya....**).

   Karena pertimbangan ini pula
   kita dapat menawarkan user 2 Aplikasi

   - Platform-specific, dengan feature yang full & mantaps....
   - PWA sebagai **Lite Version**, versi ringan yang _mungkin_ ngga semantap versi _Platform Specific_.

   Dan menyerahkan keputusan kepada user untuk memilih sesuai kebutuhan & keinginan.

   Perlu diingat, install PWA juga bisa dari app store ya....

   _Oyo_ misalnya, mereka mebuat _lite version_ aplikasi mereka dengan ukuran 850KB, hanya 7% dari ukuran aplikasi Android mereka.
   [check sini](https://web.dev/oyo-lite-twa/)

Lantas, gimana kita periksa apakah user sudah install aplikasi apa belum?

Bisa check [artikel berikut](https://web.dev/get-installed-related-apps/).

Hal ini bisa kita manfaat kan juga untuk

- Menghindari _promoting installation_ bila sudah ada salah satu aplikasi terinstall,
  entah specific-platform app ataupun PWA
- Menghindari duplicate notifikasi
- redirect user dari web ke aplikasi

Oh ya,
menawarkan PWA pada user dengan _low-end device_ bisa jadi pilihan lho....
Kita dapat melakukannya dengan **Membaca Device-Memory**-nya.

Mungkin [video berikut](https://www.youtube.com/watch?v=V7YX4cZ_Cto&feature=youtu.be)
dapat dijadikan bahan pertimbangan.

Terlepas dari itu semua,

It's your business, your platform, your decision.

Yang pasti, ketika hendak menerapkannya, jangan lupa menghitung impact-nya.
