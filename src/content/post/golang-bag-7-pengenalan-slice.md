---
title: "Golang bagian-7 Pengenalan Slice"
description: "Golang slice - mengenal slice dan kegunaannya pada bahasa go"
tags: ["golang", "belajarapa"]
publishDate: "06 Jun 2020"
---

## Slice

_Slice_ adalah _reference_ elemen array. Pada dasarnya _slice_ hampir sama persis dengan array, hanya saja saat kita merubah datanya, maka data data lain dengan _reference_ yang sama pun akan berubah.

Apaan sih???

Okay. Kita bahas _reference_ terlebih dahulu.

_Reference_ merupakan data yang memiliki alamat memori yang sama.

_Analogi_-nya, kita punya ember isi air, lalu kita ingin mengambil air itu ke ember yang lain,
alih-alih memindah/meng-_copy_ ke ember lain, kita ambil ember baru, kita sambungkan ember A dan B dengan selang di bawahnya. _Nyambung_ dong, nah saat kita memberi pewarna pada air di ember B, maka air di ember A pun ikut berubah.
_Reference_ / alamat memory yang sama.
Bedanya di reference airnya tidak dibagi ya, tetep sama.
Masih susah dimengerti? yah, ngga ketemu _analogi_ yang lebih sederhana nih.

**Nah**, **Slice** merupakan kumpulan/baris ember seperti itu, kalau satu diubah, data dengan alamat memori yang sama pun akan berubah

Tambah pusing? Okay Contoh

```go
var kelas1 = []string{
    "Andi",
    "Fatah",
    "Budi",
    "Agung",
}

var naikKelas2 = kelas1[0:3]

fmt.Println(kelas1, naikKelas2)
// [Andi Fatah Budi Agung] [Andi Fatah Budi]

naikKelas2[1] = "Lucinta"

fmt.Println(kelas1, naikKelas2)
// [Andi Lucinta Budi Agung] [Andi Lucinta Budi]
```

_Analogi_ kode di atas.

sebuah kelas berisi 4 siswa, namanya di atas lah ya

saat naik kelas 2, kita buat kelas lagi hanya saja si absen terakhir ngga naik.

nah saat di kelas 2 ini, si `Fatah` berubah namanya jadi `Lucinta`

apa yang terjadi, seperti halnya sulap, saat kita periksa data kelas 1 dan 2 di ruang guru, nama fatah tidak hanya berubah di kelas 2, tapi datanya di kelas 1 pun berubah nama.

Sekarang detail kode.

_Deklarasi_ dan _inisialisasi_ sama dengan _array_. hanya saja, pada slice kita tidak perlu menulis alokasi-nya, cukup `[]`, dan tidak perlu `...`

`var naikKelas2 = kelas1[0:3]`

Ini saat kita membuat slice baru dengan meng-_copy_ / me-_reference_ / dari alamat memori array/slice tertentu, dalam kasus di atas, dari `kelas1`.

Kalau _1 index_ / `data[0]` merupakan pengaksesan data.
maka dengan _2 index_ / `data[startIndex:afterIndex]` kita meng-_copy_ data dari `startIndex` sampai data sebelum `afterIndex`

dalam kasus `kelas1[0:3]` dari index `0` sampai index `2` (sebelum 3).

BTW, perlu diingat kita bisa bisa membuat slice dari slice yang ada / dari array yang ada.

```go
var siswi = [...]string{
    "Amel",
    "Rizki",
    "Nada",
}

var siswiLolos = siswi[1:3]

fmt.Println(siswi, siswiLolos)
// [Amel Rizki Nada] [Rizki Nada]
```

Pada contoh di atas kita membuat slice dari array,

Dan kita membuat array dari index 1 sampai index 2.

OK, sekarang beberapa contoh / aturan dalam _2 index_

```go
var siswa = []string{
    "Andi",
    "Fatah",
    "Budi",
    "Agung",
}
```

| kode       | detail                                   | output                             |
| ---------- | ---------------------------------------- | ---------------------------------- |
| siswa[0:3] | item dari index 0, sampai 2              | ["Andi", "Fatah", "Budi"]          |
| siswa[0:0] | kosong, tidak ada item sebelum index 0   | []                                 |
| siswa[4:4] | kosong, tidak ada item dengan index 4    | []                                 |
| siswa[2:0] | error, harusnya afterIndex >= startIndex | []                                 |
| siswa[:]   | semuanya                                 | ["Andi", "Fatah", "Budi", "Agung"] |
| siswa[3:]  | dari index 3 sampai selesai              | ["Budi", "Agung"]                  |
| siswa[:2]  | semua sebelum index 2                    | ["Andi", "Fatah"]                  |

Demikian artikel kali ini,
Terima kasih.
