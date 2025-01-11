---
title: "Golang bagian-14 Pengenalan Method"
description: "Golang method - implementasi class function pada bahasa go"
tags: ["golang", "belajarapa"]
publishDate: "17 Jun 2020"
---

Merupakan fungsi yang berada pada `type`, atau biasanya terdapat pada `struct`.

Kita sudah sama-sama belajar _struct_ pada artikel [sebelumnya](/blog/golang-bag-13-pengenalan-struct).

Nah, method adalah fungsi blueprint yang ada di dalamnya.
Method ini bersifat independent dengan objek yang dibuat, yang mana ini menjadi keuntungan bagi kita.

Cara pembuatannya pun sederhana

```go
type siswa struct {
    nama        string
    waliMurid   string
}

func (s siswa) panggilMurid() {
    Println(s.nama)
}

func (s siswa) panggilWaliMurid() {
    Println(s.waliMurid)
}
```

Kita cukup menambah `(namaVariabel namaStruct)` sebelum nama fungsi-nya, sebagai tanda bahwa fungsi ini adalah sebuah _method_ dari struct yang telah di-definisikan.
Selebihnya seperti halnya fungsi biasanya.

Dan pemanggilannya pun sepertihalnya property lain pada struct dan fungsi biasanya.

```go
siswaA := siswa{
    nama: "Abdul",
    waliMurid: "Bp. Anu",
}

siswaA.panggilMurid()
// Abdul
```

Demikian artikel kali ini,
Semoga mudah dipahami,
Terima kasih.
