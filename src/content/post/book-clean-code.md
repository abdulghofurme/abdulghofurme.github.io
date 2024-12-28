---
title: "Book: Clean Code - Background"
description: "Seberapa penting clean code bagi programmer, bahkan bagi industri/company itu sendiri"
tags: ["book", "programming", "clean code"]
publishDate: "29 Dec 2024"
ogImage: "/og-image/clean code.jpeg"
coverImage: { src: "/img/clean_code.jpg", alt: "Clean Code" }
---

Tulisan ini diisi dari apa yang aku perhatikan,
suka & aku kira perlu aku catatan sepanjang membaca buku Clean Code.

Sebuah buku karya Robert Cecil Martin,
yang pertama rilis pada Agustus 2008.

Mungkin sangat jauh waktunya,
sudah lama sekali.
Aku membacanya di era AI sudah meraja lela,
dan banyak rumor tersebar Programmer akan digantikan AI.

Terlepas dari itu,
buku ini sangat menyenangkan untuk dibaca.
Meskipun baca buku ini harus siap handphone,
mengingat sesekali menemukan kata, kalimat yang asing.

## Kenapa _Clean Code_ penting

Pada chapter 1 buku,
kita disuguhkan berbagai alasan kenapa _Clean Code_ itu penting.

Salah satu cerita yang membekas

> Pada akhir tahun 80an,
> sebuah perusahaan membuat aplikasi yang singkatnya sangat popular.
> Namun seiring waktu, release demi relase.
> Bug tidak diperbaiki, load time & _crash_ semakin meningkat.
> Akhirnya persusahaan pun gulung tikar.
>
> Dua dekade setelahnya penulis bertemu & bertanya pada salah satu pegawainya.
> Singkatnya, mereka terburu-buru untuk segera release product,
> dan berakhir pada kode yang berantakan.
>
> Seiring feature bertambah,
> bertambah buruk pula kode yang ada.
> Sampai pada titik kode itu tidak sapat di-manage lagi.
>
> **It was the bad code that brought the company down**

Buku ini ngena banget sih,

- Terburu-buru
- Merasa tidak punya waktu untuk melakukannya dengan baik
- Merasa mungkin bos akan merasa marah bila kita butuh waktu lebih
- Mungkin juga memang sudah lelah saja dengan kodenya dan ingin segera selesai, sudah terlalu berantakan, entah dari legacy atau bahkan kita sendiri, :D
- Atau mungkin tidak fokus karena module-module lain yang sudah dekat deadline-nya, akhirnya yaudah diburu-buru semua

Akhirnya yasudah,
terlepas dari berantakan itu kode,
kita memutuskan untuk membiarkannya untuk rafactor lain waktu.

> working mess is better than nothing

Celakanya "lain waktu" itu tak pernah datang

> LeBlanc's law: Later equals never

## Harga yang harus dibayar

Pernahlah kerja kita lebih lambat dikarenakan kode yang berantakan,
baik dari kode orang lain, ataupun kode kita yang kemarin-kemarin.
Well, entah itu kode siapa, _we have to deal with it_.
Kita harus sepakat itu _"kode kita"_ sekarang.

Semakin lama, semakin parah.
Feature yang seharusnya selasai dalam 1 _sprint_,
kini melebar menjadi beberapa _sprint_.

Bukan dari scope feature,
melainkan dari kode kita yang berantakan.
Karena pada akhirnya kita harus mondar-mandir baca kodenya,
scroll atas, scroll bawa, buka file/module lain,
mondar-mandir untuk memahamai semua kekacauan itu.

Feature terlambat release,
tidak achieve, akhirnya semakin buruk dan buruk.

## Solusi??

Lelah terbenam dalam kode yang berantakan,
akhirnya muncullah usulan redesign,
untuk membuat ulang semuanya dengan code base baru,
architecture baru, mungkin juga tech stack baru.

Kemungkinan management akan menolak.
Masih banyak feature, milestone, goal yang perlu dicapai.
Tentu _"dirasa"_ buang-buang waktu & resource hanya untuk membuat ulang sesuatu yang sama.

Diskusi demi diskusi, nego & pertimbangan.
Okay kita akan **redesign**.

Resource dibagi menjadi team _redesign_ & team feature.
Yah setidaknya dibagi-bagi, ditambah, dikurang, diatur menjadi sejenisnya.
Ada yang _redesign_ dan ada yang mengerjakan feature-feature baru.

Waktu berlalu yang pastinya tidak sebentar,
_redesign code_ semakin bertambah.
Namun seiring waktu, orang datang dan pergi, team berubah.
_Redesign code_ yang semula fresh & clean kini mungkin mulai berantakan juga.

Yah, mungkin belum seberantakan yang lama.
Tidak papa, belum sekacau itu, **nanti bisa refactor**, dan yah...
_"At least, tech stack baru, architecture baru, lebih modern, lebih kenceng"??_

Another messy codes.

## Salah siapa?

> This may be a bitter pill to swallow.
> How could this mess be _our_ fault?
> What about the requirements?
> What about the schedule?
> What about the stupid managers and the useless marketing types?
> Don't they bear some of the blame?

Masih banyak excuse yang bisa ditulis.

> They may defend the schedule and requirements with passion; but that's their job.
> It's _your_ job to defend the code with equal passion

> You will not make the deadline by makin the mess.
> Indeed, the mess will slow you down instantly,
> and will force you to miss the deadline.
>
> The only way to make the deadline--
> the only way to go fast--
> is to keep the code as clean as possible at all times.

## Attitude

Tidak ada kode yang berantakan dari awal.
Semua dimulai dengan fresh & clean, ya setidaknya blank, :D.
Kode berantakan seiring waktu.

Agar itu tidak terjadi,
pastikan meninggalkan kode **lebih bersih** dari sebelumnya.

Sesedarhana, nama variable yang membingungkan kita ubah 1.
Atau tambah komentar/dokumentasi dari sebuah fungsi, dan lain sebagainya.

> Leave the campground cleaner than you found it

> Can you imagine working on a project where the code _simply got better_
> as time passed?

## Akhir

Kita adalah pembaca.
Untuk bisa menulis kode, kita harus membaca,
memahami apa yang terjadi di program kita.
Pusing sekali baca kode yang sulit dibaca.

Namun kita juga penulis.
Untuk kita di lain waktu,
untuk orang lain yang mengunjungi kode kita.

Jadilah penulis kode yang membuat pembaca menghargai _crafting_ kita akan program itu.
