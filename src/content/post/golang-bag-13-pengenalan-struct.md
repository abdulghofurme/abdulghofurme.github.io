---
title: "Golang bagian-13 Pengenalan Struct"
description: "Golang struct - mengenal dan cara menngunakan class pada bahasa go"
tags: ["golang", "belajarapa"]
publishDate: "14 Jun 2020"
ogImage: ""
---

## Struct

Sederhananya, **Struct** adalah **Class** pada bahasa pemrograman lain.

Struct adalah sebuah blueprint objek.

Kita sudah membahas [_Map_](/blog/golang-bag-9-map) sebelumnya.
Nah hasil akhir dari sebuah _Struct_ sama dengan hasil akhir Map.
Perbedaannya,

- Dalam map kita hanya mendefinisikan tipe data property dan nilai di awal yang bertipe data sama, dan bebas menambahkan property-nya.
- Pada Struct kita mendefinisikan semuanya, apa saja property-nya, tipe data-nya, dan hanya bisa mengubah nilai nya. Namun kita dapat memasukkan tipe data yang berbeda ke dalam-nya.

Seperti disebut sebelumnya, bahwa struct adalah blueprint sebuah object. Yang nanti juga dapat kita gunakan sebagai dokumen kontrak sebuah data yang dikirim/diterima.

### 1. Deklarasi

Deklarasinya cukup menggunakan keyword `struct`

```go
// 1.1
type siswa struct {
    nama string
    umur uint
    kelas uint
    waliMurid string
    waliKelas string
}

type siswa struct {nama string; umur uint; kelas uint}

// 1.2
var siswa struct {
    nama string
    umur uint
    kelas uint
    waliMurid string
    waliKelas string
}

var siswa struct {nama string; umur uint; kelas uint}

// 1.3
type siswa = struct {
    nama string
    umur uint
    kelas uint
    waliMurid string
    waliKelas string
}

type siswa = struct {nama string; umur uint; kelas uint}
```

Ada 3 cara deklarasi dari contoh di atas

1. Deklarasi standard.
   Kemudian kita dapat menggunakan _struct_ ini berkali-kali layaknya blueprint untuk mencetak variabel objek dengan format yang sama.
2. Pada contoh ke-2 dan ke-3. Kita menggunakan **anonymous struct**.
   Pada contoh ke-2 ini kita menggunakan _anonymous struct_, kemudian kita deklrasikan ke dalam sebuah variabel.
   Kita membuat blueprint dan langsung kita pake cetak.
   Yang berarti bersifat sekali pakai.
3. Kita membuat alias dari sebuah _anonymous struct_.
   Yang berarti kita dapat menggunakannya berkali-kali layaknnya blueprint seperti contoh 1.

Anyway, kita dapat men-deklarasi-nya dengan cara horizontal seperti contoh di atas, dengan menambahkan `;` di antara property yang ada.

### Anonymous Struct

Sepertihalnya _anonymous function_, _anonymous struct_ adalah struct tanpa nama, biasa sekali pakai.

```go
struct {
    nama string
    umur uint
    kelas uint
    waliMurid string
    waliKelas string
}
```

Contoh implementasi-nya banyak sekali, akan kita contohkan sambil jalan.

### 2. Inisialisasi

```go
// 2.1.A
var siswa1A siswa
siswa1A.nama = "Abdul"

Println(siswa1A.nama, siswa1A.umur)
// Abdul 0

// 2.1.B
var siswa1B siswaB
siswa1B.nama = "Achmad"

Println(siswa1B.nama, siswa1B.umur)
// Achmad 0
```

Pada contoh di atas dapat dilihat bahwa

- Property yang belum diisi nilai-nya, memiliki nilai default sesuai tipe data-nya.
- Penggunaan deklarasi 1.1 dan 1.2 (alias) bersifat sama.

```go
// 2.2.A
var siswa2A = siswa{"Habib", 6, 1, "Anu", "Ani"}

// 2.2.B
var siswa2B = siswa{
    "Habib",
    6,
    1,
    "Anu",
    "Ani",
}

// 2.2.C
siswa2C := siswa{umur: 6, nama: "Budi"}

// 2.2.C
siswa2D := siswaB{
    kelas: 1,
    nama:  "Eko",
}

Println(siswa2A, siswa2B, siswa2C, siswa2D)
// {Habib 6 1 Anu Ani} {Habib 6 1 Anu Ani} {Budi 6 0  } {Eko 0 1  }
```

Di atas merupakan pencetakan variabel dari struct diikuti dengan inisialisasi langsung.
Meliputi

- 2.2.A => Kita mencetak struct dengan memasukkan nilai ke dalamnnya **tanpa nama property**, ini akan masuk **sesuai urutan property struct**, dan **bersifat wajib memasukkan semua property yang dibutuhkan**. Pada contoh ini kita menuliskannya secara **horizontal**.
- 2.2.B => Sepertihalnya contoh 2.2.A, hanya saja kita menuliskannya secara **vertical**.
- 2.2.C => Pada contoh ini kita mencetak struck dan memasukkan nilai, **sesuai dengan nama property** dengan cara **menulisakan nama property-nya**, dengan metode ini, kita dapat menuliskannya secara tidak berurutan, dan tidak wajib menulis semua property. Pada contoh ini juga kita menuliskannya secara _horizontal_.
- 2.2.D => Sepertihalnya contoh 2.2.C, hanya saja kita menulis secara _vertical_

```go
// 2.3.A
var siswa3A = siswa{}
siswa3A.kelas = 1
Println(siswa3A)
// { 0 1  }

// 2.3.B
var siswa3B = struct {
    nama      string
    umur      uint
    kelas     uint
    waliMurid string
    waliKelas string
}{}
siswa3B.nama = "Rizki"
Println(siswa3B)
// {Rizki 0 0  }

// 2.3.C
var siswa3C = struct {
    nama      string
    umur      uint
    kelas     uint
    waliMurid string
    waliKelas string
}{
    "Habib",
    6,
    1,
    "Anu",
    "Ani",
}
Println(siswa3C)
// {Habib 6 1 Anu Ani}

// 2.3.D
var siswa3D = struct {
    nama      string
    umur      uint
    kelas     uint
    waliMurid string
    waliKelas string
}{
    nama:  "Hanif",
    kelas: 1,
}
Println(siswa3D)
// {Hanif 0 1  }

// 2.3.E
var siswa3E struct {
    nama      string
    umur      uint
    kelas     uint
    waliMurid string
    waliKelas string
}
siswa3E.nama = "Fajar"
Println(siswa3E)
// {Fajar 0 0  }
```

Pada contoh kali ini, kita mengkombinasikan semua yang telah kita pelajari di atas, dari mulai vertical, horizontal, anonymous, dengan nama property, atau tanpa nama property, temen-temen juga dapat mencoba sendiri kombinasi yang lain. Tak apa untuk mendapat error, bahkan dari sana kita belajar.

Btw, kita tidak dapat langsung inisialisasi property pada contoh 2.3.E, akan menghasilkan error

```go
var siswa3F struct {
    nama      string
    umur      uint
    kelas     uint
    waliMurid string
    waliKelas string
}{
    nama: "Fajar",
}
Println(siswa3F)
```

akan menghasilkan

```go
syntax error: unexpected { at end of statement
syntax error: non-declaration statement outside function body
```

Demikian artikel kali ini,
Semoga mudah dipahami,
Terima kasih.
