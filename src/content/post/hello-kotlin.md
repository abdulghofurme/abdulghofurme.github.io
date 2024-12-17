---
title: "Kotlin bagian-1: Hello Kotlin, Variable & Data Type"
description: "Kotlin - mengenal kotlin, implementasi variable & data type pada bahasa kotlin"
tags: ["kotlin", "belajarapa"]
publishDate: "14 Sep 2019"
ogImage: ""
---

Hei... **abdulghofur** lagi.. Article ke-2, doakan konsisten ya.. _tenang aja, ngga bakal dihitungin terus ko_

##Hello Kotlin

Banyak alasan untuk belajar Kotlin, bisa googling tentunya. Dari alasan

- **Modern, Expressive & concise**: Setiap bahasa punya nilai lebih dan kurang, aku yang beranjak dari JavaScript, ngga banyak banget perbedaan, terlebih bahasa terus berkembang versinya.

- **Safe**: Statically-typed jelas terasa ketika beralih dari dinamic. Dan tentunya aman dari NullPointerExceptions, aku belum pernah ngoding di java, jadi tidak terlalu pengaruhi penilaian.

- **Interoperable**: Kotlin dapat dijalankan beriringan dengan Java. Semua library yang mendukung Java dapat digunakan di Kotlin, termasuk Backend Framework seperti Spring, dan lainnya.

- **Multi/Cross Platform**:
  Dari Android dan ya Android sangat support dengan Kotlin, terlebih dalam Google I/O 2019 kemarin Google mengumumkan **Kotlin First**. Android Studio dan yang lain sangat support dengan Kotin, bahkan kita bisa menemukan Kotlin tutorial menu di [developer android website](https://developer.android.com/). Server, Web (compile ke javascript), maupun Native ( katanya : Embedded System, Windows, MacOS, dll)

- **Multi Paradigm**

- banyak banget deh..

Yang pasti, secara pribadi, mulai belajar kotlin karena dapat gratisan kelas dicoding dari program idcamp indosat, dan memang sedang tertarik dengan _statically-typed language_, dan untuk mobile lebih tertarik ke native _(tentu juga belajar cross-platform seperti react-native & flutter)_. Awalnya demikian, namun semakin ke sini, makin seru, suka dan ya lanjut..

Apa saja yang diperlukan untuk ngoding Kotlin, dari instalasi dll tidak dibahas di sini.
Lebih detail googling, okay..

Tapi temen temen bisa mencobanya tanpa perlu install apapun di [try.kotlinlang.org/](https://try.kotlinlang.org/)

BTW, File Kotlin memiliki ektensi **.kt**.

##Variable

Seperti halnya bahasa yang lain kita perlu tahu bagaimana menyimpan suatu data, selanjutnya disebut variabel (variable). Penulisan variable dalam Kotlin cukup sederhana,

```kotlin
var nama: String = "Abdul";

var warnaBaju: String = "Biru"

var warnaCelana = "Hitam"
```

1. 'kata kunci'-nya `var`
2. nama variable `nama`
3. data type `: String` _(optional)_
4. sama dengan `=`
5. value `"Abdul"`
6. titik koma `;` _(optional)_

Berikut di atas adalah deklarasi dilanjutkan dengan inisialisasi. Tentu bisa saja dipisah seperti berikut.

```kotlin
var nama: String

nama = "Abdul"
```

###1. 'Kata Kunci'

Dalam Kotlin ada 2 cara penulisan variable, **var** dan **val**. Lantas apa beda? Sejauh yang aku tahu, **'var' bisa di-reassign, sementara 'val' tidak**.

```kotlin
fun main() {
	var name: String = "Siapa sih"

	// remember you can reassign var variable
	name = 'Aku'

	val namaku: String = "Abdul"

	// otherwise, you can not reassign val variable, just uncomment code below to prove it.
	namaku = "Ghofur"
}
```

kode di atas akan mengembalikan error **Val cannot be reassigned**

Bagian 2, 4, 5, dan 6 aku rasa cukup sederhana dan jelas.

##3. Data Type

Beralih ke data type. Pada dasarnya data type adalah kata yang merepresentasikan isi data tersebut yang tidak dapat dirubah typenya, selanjutnya menentukan fungsi, method apa saja yang dapat digunakan pada data tersebut.

Karena banyak sekali, di sini hanya akan dibahas beberapa yang umum. Di antaranya

1. Text
2. Number
3. Boolean
4. Array

###1. Text

Pada Kotlin, text terdiri dari 2 type data.

1. **Char** representasi dari Character.
2. **String** representasi dari String.

####Character

Character merupakan tipe data dengan value hanya **satu** Karakter, dan ditandai dengan **tanda petik satu (' ')**.
`var abjad: Char = 'A'`
Uniknya adalah, kita dapat increment varible tersebut

```kotlin
var abjad: Char = 'A'

abjad++

println(abjad) // will return B
```

Keren kan, karena pada dasarnya dia adalah representasi dari Unicode, yang mana A adalah 0041.

####String

String dapat memiliki **berapa pun panjang teks**, ditandai dengan **diawali dan diakhiri dengan tanda petik 2 (" "), atau tanda petik 3(""" """) untuk Raw String**. Okay, ada **Literal String**, **Escaped String**, dan **Raw String**. Pada dasarnya sama saja teks.

**Escaped String** sama saja dengan **(" ")**. Hanya saat kita hendak mengeluarkan tanda petik dua di tengah dan lainnya kita perlu memberi tahu Kotlin bahwa ini mendapat perlakuan khusus, seperti

- _\"_ untuk menampilkan (") di tengah,
- _\n_ untuk membuat new line,
- _\t_ untuk membuat tab,
- _\\_ untuk membuat backslash,
- dll

```kotlin
var katanya: String = "Dia berkata, \"Selamat pagi semua\"."
```

kita juga dapat escape unicode.

**Raw String** menggunakan **(""" """)**. Gunanya hampir sama seperti backtick di JavaScript.

```kotlin
var apaanSih: String = """Aku

Kamu

Dia"""
```

Selanjutnya **String Template**. Metode untuk memasukan statement variable atau expression ke dalam string.

```kotlin
val namaKu: String = "Abdul"
val usiaKu: Int = 23

val greetingText: String = "Halo semua, namaku $nameKu"

val apaanSih: String = "$namaku adalah seseorang dengan usia ${if (usiaKu >= 25) "setengah abad lebih" else "masih muda"}."
```

ditandai dengan **$** dollar sign. bila sederhana seperti pemanggilan variable cukup dengan dollar sign saja, jika cukup rumit, perlu tambah **{ }** kurung kurawa setelah dollar sign.

BTW, **di Kotlin tidak mendukung ternary operator `true ? 1 : 0`**. Karena if else dan when cukup untuk menggantikannya, contohnya seperti di atas, lebih detail akan dibahas pada sesi lain.

####Number

Seperti namanya, Number merupakan tipe data untuk representasikan angka. Dibagi menjadi beberapa, diantaranya **Integer (Int), Long, Double, Short, Byte, Float**. Detailnya bisa dicari di google atau dokumentasi. sederhananya gunakan Int untuk bilangan bulat, dan Double untuk desimal. Untuk lebih advance dibahas nanti.

Seperti bahasa yang lain, Kotlin mendukung operator aritmatika. Sedangkan untuk konversi data cukup tambah **.toInt(), .toString(), dan lainnya**.

###Boolean

Boolean adalah type data **true/false**, dengan penulisan `: Boolean`.

###Array

Array memungkinkan kita untuk menyimpan beberapa data di dalamnya.

```kotlin
// berikut pembuatan array untuk menyimpan segala jenis data.
val myRandomArray = arrayOf("Abdul", "Ghofur", 23, true, 'A', 'G')

```

Sedangkan untuk men-spesifik-kan data array dapat dengan menuliskan tipe data yang diinginkan sebelum **ArrayOf**, seperti

```kotlin
// array of integer
val integerArray = intArrayOf(22, 354, 313, 23243, 2323)

```

sama untuk tipe data yang lain, stringArrayOf, dan lainnya..

Untuk mengakses value masing-masingnya dapat menggunakan seperti berikut

```kotlin
println(integerArray[0]) // akan menampilkan nilai 22
```

Perlu diingat bahwa index dimulai dari 0, ini juga berlaku untuk tipe data string

```kotlin
val nama = "Abdul"

println(nama[2]) // akan menampilkan nilai d
```

Kita pun bisa membuat array dengan metode berikut

```kotlin
val myNewArray = Array(6, { i -> i * 2 })

/*
akan menghasilkan array [0, 2, 4, 6, 8, 10]

formulanya adalah

Array(size, { index -> ... bagaimana kita manipulasi dari index itu.. })
```

####BONUS: Bermain dengan NULL

Banyak sekali yang membahas bahwa Kotlin disebut safe, dan 'nicer java' karena dapat menghindari NullPointerException. Karena pada kotlin dapat membedakan mana variable yang boleh bernilai null, dan mana yang tidak. Secara default variable tidak memperbolehkan kita untuk memasukkan nilai null pada variabel yang sudah ditentukan type datanya. Bingung? sama... hehe.. okay langung saja

```kotlin
var nama: String = "Abdul"
var angka = 23

// kedua variable di atas secara default tidak boleh diisi dengan null
// mari kita coba

nama = null
angka = null

/*
keduanya akan mengembalikan error
Null can not be a value of a non null type String
Null can not be a value of a non null type Int
*/
```

lantas bagaimana cara kita masukkan nilai null? seperti berikut

```kotlin
var nama: String? = "Abdul"
var namaLagi: String = null

nama = null
namaLagi = "ghofur"
```

yap, dengan cara menambahkan tanda tanya **?** setelah tipe data seperti di atas.
okay.. sekarang kalau kita akan mengakses variabel itu bagaimana bila nilainya null?
kita masukan ke dalam kondisi

```kotlin
if (nama != null) {
	var panjang = nama.length
}
```

atau dengan **safe call & elvis operator**

```kotlin
// safe call
var panjang = nama?.length
```

pada kode di atas kita menambahkan `?.` yang disebut safe call, fungsinya untuk mengamankan method yang kita panggil, dalam kasus di atas adalah `length` tidak beroperasi pada null value yang akan menimbulkan error. dan hanya akan beroperasi pada kasus ini adalah string, dan beroperasi semestinya mengembalikan panjang string.
okay, method sudah aman, tidak terjadi error bila null, dan mengembalikan nilai panjang string bila tidak null _dalam kasus ini string_, lalu apa hasil dari variabel `panjang` di atas, bila nama berisi null? Hasilnya adalah null, tidak percaya coba saja...

Bagaimna kalau kita tidak ingin nilainya null? pakai **elvis operator**

```kotlin
var panjang = nama?.length ?: 0
```

kode di atas memberikan default value 0, bila variabel yang kita periksa bernilai null. Formulanya **?: defaultValue**

Simple kan....

Okay..Sepertinya article kali ini cukup sampai di sini dulu, agar tidak kepanjangan.
Nantikan episode selanjutnya.

Semoga bermanfaat. Semoga dapat dimengerti
Maaf bila kurang nyaman dibaca & susah difahami, masih belajar nulis, dan belajar menggunakan markdown, hehe.

**Enjoy...**
