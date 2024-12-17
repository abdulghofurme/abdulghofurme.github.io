---
title: "Golang bagian-12 Pointer"
description: "Golang pointer - alamat memory dan bagaimana golang menyimpan data"
tags: ["golang", "belajarapa"]
publishDate: "12 Jun 2020"
ogImage: ""
---

## Pointer

Pointer adalah alamat memori / refernce. OK, selesai, sesederhana itu.
Bagi temen temen yang belum tahu apa itu reference / alamat memori, bisa baca di artikel yang kita bahas tentang [slice](/blog/golang-bag-7-pengenalan-slice).

Ciri utama dari sebuah pointer adalah tanda _asterisk_ (\*) sebelum tipe data

```go
var pointerNama *string
```

Deklarasi-nya seperti contoh di atas

Dengan sifat sifat sebagai berikut

- default value `nil`
- hanya dapat menampung nilai pointer

Perlu diingat bahwa variabel pointer hanya dapat menampung nilai pointer

Lantas bagaimana cara inisialisasi?

Kita dapat mengambil alamat memori dari semua variabele biasa dengan ampersand (&), yang kemudian kita sebut dengan metode referencing, seperti berikut

```go
var pointerNama *string

nama := "Abdul"
pointerNama = &nama
Println(nama, pointerNama)
// Abdul 0xc000010200

namaB := "Budi"
var alamatNamaB *string = &namaB
Println(namaB, alamatNamaB)
// Budi 0xc000010220

*alamatNamaB = "Eko"

nama = *alamatNamaB

Println(namaB, nama)
// Eko Eko
```

Pada contoh di atas kita juga melakukan metode dereferencing, dengan menggunakan asterisk pada pointer. Yaitu cara dimana kita mengambil nilai dari alamat memori, kabilakan dari referencing.

Anyway, karena alamat memori sama, maka perubahan nilai akan berpengaruh, namanya juga reference.

Kita juga dapat menerapkan metode di atas pada parameter

```go
absen1 := "Abdul"

absen2 := "Achmad"

samain(&absen1, &absen2)
Println(absen1, absen2)
// Achmad Achmad

func samain(A, B *string) {
	*A = *B
}
```

Demikian artikel kali ini,
Semoga mudah dipahami,
Terima kasih.
