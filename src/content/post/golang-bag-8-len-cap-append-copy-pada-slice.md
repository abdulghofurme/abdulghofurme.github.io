---
title: "Golang bagian-8 len, cap, append, copy pada Slice"
description: "Golang slice - mengenal built in function yang dapat digunakan"
tags: ["golang", "belajarapa"]
publishDate: "07 Jun 2020"
---

Pada slice kita dapat menggunakan kode-kode di atas.

Sepertihalnya _array_, slice pun dapat menggunakan `len()`, tentu untuk membaca panjang dari slice tersebut.

## `cap()`

selanjutnya `cap()`, pada array kita menuliskan alokasi data saat deklarasi, atau pada deklarasi sekaligus inisialisasi kita dapat menulis `...`, yang intinya pada array aloksai data terbentuk saat deklarasi.

Lantas bagaimana dengan slice?

Sebenarnya secara default kita mempunyai alokasi / kapasitas sama dengan panjang. Bila slice tersebut adalah slice yang dibuat sendiri.

Bila slice tersebut dibuat dari meng-_copy_ data yang ada, maka terdapat 2 kondisi.

```go
var kelas1 = []string{
    "Andi",
    "Fatah",
    "Budi",
    "Agung",
}

fmt.Println(len(kelas1)) // akan menghasilkan nilai 4
fmt.Println(cap(kelas1)) // akan menghasilkan nilai 4
```

| kode        | output                      | `cap()` |
| ----------- | --------------------------- | ------- |
| kelas1[0:2] | ["Andi", "Fatah", ---, ---] | 4       |
| kelas1[1:3] | ["Fatah", "Budi", ---]      | 3       |

1. Bila indexStart adalah 0, maka kapasitas mengikuti kapasitas yang ada.
2. Bila indexStart lebih dari 0, maka kapasitas dipotong dari 0 ke indexStart.

_Intinya_ dipotong di depan

## `append()`

selanjutnya `append()`, digunakan untuk menambahkan item ke dalam _slice_, tentu masuk paling belakang, yang selanjutnya menghasilkan slice baru yang sudah ditambahkan.

Berikut kondisi yang perlu diingat.

1. Bila panjang dan kapasitasnya sama, maka data yang ditambahkan akan membentuk referensi item baru.
2. Bila kapasitas lebih dari panjangnya, maka data dengan referensi yang sama akan berubah?

Ha??? Gimana gimana??? OK, TKP

```go
var kelas1 = []string{
    "Andi",
    "Fatah",
    "Budi",
    "Agung",
}

var naikKelas2 = kelas1[0:3]

fmt.Println(1, kelas1)         // 1 [Andi Fatah Budi Agung]
fmt.Println(2, naikKelas2)     // 2 [Andi Fatah Budi]

naikKelas2[1] = "Lucinta"

fmt.Println(2, naikKelas2)     // 2 [Andi Lucinta Budi]
fmt.Println(2, "panjang:", len(naikKelas2), "kapasitas:", cap(naikKelas2))
// 2 panjang: 3 kapasitas: 4

var naikKelas3 = append(naikKelas2, "Dika")
// kode di atas akan membuat "Agung" berubah

fmt.Println(1, kelas1)           // 1 [Andi Lucinta Budi Dika] "Agung" berubah
fmt.Println(2, naikKelas2)       // 2 [Andi Lucinta Budi]
fmt.Println(3, naikKelas3)       // 3 [Andi Lucinta Budi Dika]
```

`"Agung"` kini telah berubah, dia tak seperti dahulu saat pertama ku mengenalnya.
Anyway intinya dia berubah, karena "Dika" masuk pada refernce / alamat memori "Agung" / index-3, yang mana masih di dalam kapasitas slice tersebut

Berbeda dengan kondisi ini

```go
fmt.Println(3, "panjang:", len(naikKelas3), "kapasitas:", cap(naikKelas3))
// 3 panjang: 4 kapasitas: 4

var naikKelas4 = append(naikKelas3, "Onik")

fmt.Println(1, kelas1)           // 1 [Andi Lucinta Budi Dika]
fmt.Println(2, naikKelas2)       // 2 [Andi Lucinta Budi]
fmt.Println(3, naikKelas3)       // 3 [Andi Lucinta Budi Dika]
fmt.Println(4, naikKelas4)       // 4 [Andi Lucinta Budi Dika Onik]
```

"Onik" tidak merubah apapun, dia masuk sebagai reference baru, karena di luar kapasitas yang ada, jadi kelas-nya beli kursi baru.

## `copy()`

seperti namanya, ini digunakan untuk meng-_copy_.
Berbeda cara kita meng-_copy_ slice dengan metode **2 index** yang sudah kita bahas pada artikel sebelumnya.

Pada metode **2 index** kita meng-copy semua nya, dengan referensi yang sama.
Dengan `copy()`, kita hanya meng-copy nilainya, namun dengan referensi yang baru, dan akan mengembalikan panjang hasil copy

Dengan format

```go
copy(tujuan, asal)
```

Yang perlu diingat pada metode ini adalah

1. Jika panjang `asal` <= kapasitas `tujuan`, maka akan di-copy semua
2. Jika panjang `asal` > kapasitas `tujuan`, maka hanya di-copy sesuai kapasitas.

```go
var kelas1 = []string{
    "Andi",
    "Fatah",
    "Budi",
    "Agung",
}

var kelas5 = make([]string, 3)

n := copy(kelas5, kelas1)

fmt.Println(kelas1)     // [Andi Lucinta Budi Dika]
fmt.Println(kelas5, n)  // [Andi Lucinta Budi] 3

kelas5[0] = "Hoho"
kelas6 := append(kelas5, "Appan")

fmt.Println(kelas1)     // [Andi Lucinta Budi Dika]
fmt.Println(kelas5, n)  // [Hoho Lucinta Budi] 3
fmt.Println(kelas6)     // [Hoho Lucinta Budi Appan]
```

**NB: 3 indeks**

Kita sudah belajar 1 index untuk akses item,
2 index untuk copy slice,

Nah sekarang kita bahas \*_3 index_.
Pada dasarnya metode ini hampir sama seperti 2 index.
Bahkan, sebenarnya sama. Hanya saja, index ke-3 adalah tempat kita menentukan kapasitasnya.

Di atas sudah dibahas bahwa kapasitas slice hasil copy secara default menyesuaikan dengan kapasitas asalnya.

Nah kita dapat menentukannya dengan ini

```go
var kelas1 = []string{
    "Andi",
    "Fatah",
    "Budi",
    "Agung",
}

var kelas2A = kelas1[0:3]
var kelas2B = kelas1[0:3:3]

fmt.Println(kelas2A, len(kelas2A), cap(kelas2A))
// [Andi Lucinta Budi] 3 4
fmt.Println(kelas2A, len(kelas2A), cap(kelas2A))
// [Andi Lucinta Budi] 3 3
```

Demikian artikel kali ini,
Terima kasih.
