---
title: "Kotlin bagian 3B: Penggunaan If & When pada Val & Var"
description: "Kotlin - val? var? dan mengatur alur kerja program pada bahasa kotlin"
tags: ["kotlin", "belajarapa"]
publishDate: "19 Sep 2019"
ogImage: ""
---

Article ini dibuat untuk melengkapi article sebelumnya _#kelupaannambahin_.

Sebelumnya pada Control Flow kita sudah membahas If & When, yang pada dasarnya kegunaannya sama, namun bagaimana kita memilih antara keduanya tergantung dari serumit apa kondisi yang akan kita berikan.

Namun apakah teman-teman tahu bahwa selain menggunakan if & when seperti

```kotlin

val teks: String? = null

if (teks == "Ghofur") {
  println("Hi Ghofur")
  println("panjang teks adalah ${teks.length}")
} else if (teks == "Abdul") println("Ada Abdul")
else println("null mas")

if (teks == "Ghofur") println(teks.length)
else if (teks == "Abdul") println("Ada Abdul")
else println("null mas")



val nilai = 100

when (nilai) {
  100 -> println("A+")
  in 80..99 -> println("A")
  in 60..79 -> println("B")
  in 40..59 -> println("C")
  in 20..39 -> println("D")
  in 1..20 -> println("E")
  1 -> {
		println("Jan rek, parah tenan")
		println("saya sebagai guru merasa gagal")
	}
  else -> println("nilai tidak valid")
}
```

Kita juga dapat menggunakannya seperti

```kotlin

val teks: String? = null

val teksToPrint = if (teks == "Ghofur") {
	println("Hi Ghofur")
	"panjang teks adalah ${teks.length}"
} else if (teks == "Abdul") "Ada Abdul" else "null mas"

println(teksToPrint)



val nilai = 100

val nilaToPrint = when (nilai) {
	100 -> "A+"
	in 80..99 -> "A"
	in 60..79 -> "B"
	in 40..59 -> "C"
	in 20..39 -> "D"
	in 1..20 -> "E"
	1 -> {
		println("Jan rek, parah tenan")
		"saya sebagai guru merasa gagal"
	}
	else -> "nilai tidak valid"
}

println(nilaiToPrint)
```

Ke-dua block kode di atas akan menghasilkan nilai yang sama. Pada kode di atas ini dari syarat/kondisi yang terpenuhi kita mengembalikan nilai pada variable, yang kemudian akan di print, tidak hanya itu, kita juga dapat melakukan aksi lain dei dalamnya, selain hanya menembalikan nilai. Namun perlu diingat bahwa return diletakkan paling bawah, dan juga tidak perlu kata kunci return untuk mengembalikan nilai.

BTW, perlu diingat bahwa urutan kita mendefinisikan syarat/kondisi, mempengaruhi logic.

Okay.. Cukup dulu ya untuk article kali ini, namanya juga kelupaan nambahin, hehe. Untuk article salanjutnya _(Functional Programming)_ sedang dalam pengerjaan, mohon maaf bila lama, sedang lumayan sibuk, hehe. Semoga besok dapat dipublish.

Selanjutnya dijadwalkan 1 article tiap 3 hari.

Semoga dapat difahami..

**Enjoy..**
