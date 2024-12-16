---
title: "Kotlin bagian 4.0: Lebih dalam dengan Fungsi: Functional Programming"
description: "Kotlin - mengenal fungsi dan cara penggunaannya pada bahasa kotlin"
tags: ["kotlin", "belajarapa"]
publishDate: "29 Sep 2019"
ogImage: ""
---

Begitulah aku, aku yang kan selalu ada untukmu di saat kamu butuh, kapanpun kamu panggil, dimanapun. Untukmu kulakukan apapun, sesuai keinginanmu.... Untukmu, apapun....

Alih-alih menuliskan expression atau logic berulang ulang, kita dapat menuliskannya sekali di dalam satu blok yang disebut **function**, dan memanggilnya berkali kali, kapanpun, dimanapun.

```kotlin
fun main() {
	val name: String = "Abdul"
	val age: Int = 23

	sayHi(name, age) // akan menampilkan nilai "Halo semua namaku Abdul"
}

fun sayHi(jenenge: String, umure: Int): Unit {
	println("Halo semua namaku $jenenge")
}
```

Pada sesi sebelumnya kita telah membahas sedikit tentang fungsi dengan contoh seperti di atas, kita telah mengerti apa fungsinya fungsi, emmmm... okay... kita juga telah mengerti bagaimana penulisan standardnya. Sekarang mari kita lebih dalam. Materi Functional Programming kali ini meliputi:

1. Parameter: Name, Default & Vararg
2. Return Type
3. Lambda
4. Higher Order Function
5. Collection's Function
6. Recursive Function

Namun pada article kali ini kita hanya akan **membahas point 1 dan 2**, agar article nya tidak kepanjangan, lebih ringan untuk penulis dan pembaca, hehe....

##Parameter: Name, Default & Vararg

Dari contoh sebelumnya kita sudah tau bagaimana men-deklarasikan, men-definisikan & menggunakan parameter/argument. Sekedar mengulang bahwa parameter/argument merupakan variabel pada umumnya yang didenisikan pada Function Head `fun sayHi(jenenge: String, umure: Int): Unit`, yang akan digunakan oleh fungsi tersebut di dalam Function Body `{ .... }`.

Dari contoh sebelumnya juga kita sudah tau bagaimana kita men-definisikan parameter `sayHi(name, age)` harus sesuai dengan urutan kita men-deklarasikannya `fun sayHi(janenge: String, umure: Int)`. Yang berarti name akan diterima sebagai variabel "jenenge", dan age akan diterima sebagai variabel "umure" di dalam Function Body _(block code di dalam kurung kurawal fungsi)_.

Namun tahukah teman semua bahwa kita dapat mendefinisikannya secara spesifik dengan **Named Parameter**, seperti:

```kotlin

sayHi(umure = age, jenenge = name)

```

kita hanya perlu tanda `=` untuk melakukannya, dan tidakkah teman semua memperhatikan bahwa aku membalik kedua variabel tersebut? Dan ya, karena kita mendefinisikannya secara spesific, kita dapat mengubah urutan definisi. Dengan demikian, kita tidak perlu takut apakah urutannya sudah sesuai atau belum, tertukar atau tidak.

Okay... masalah urutan terselesaikan.

Lantas bagaimana bila kita lupa memasukkan parameter yang dibutuhkan? akan terjadi error pada fungsi dong...

Okay... masalah urutan terselesaikan.

Lantas bagaimana bila kita lupa memasukkan parameter yang dibutuhkan? akan terjadi error pada fungsi dong...

Hei.... tenang... kita bisa mengatasinya dengan **Paremeter Default Value**

```kotlin

sayHi()

fun sayHi(jenenge: String = "Abdul", umure: Int = 23) {
	println("Halo semua namaku $jenenge")
}
```

Dengan begitu, bila kita lupa untuk menambahkan parameter yang dibutuhkan seperti di atas, maka nilai parameter tersebut akan sesuai default-nya.
Pada contoh di atas, akan menampilkan hasil.

```kotlin
Halo semua namaku Abdul
```

BTW, seperti variabel pada umumnya, kita juga diperkenankan tidak menuliskan data type.

Sip kan... Makin mudah saja kan...

Lantas bagaimana bila kita hendak mendefinisikan parameter yang belum tentu banyaknya?
Sebagai contoh kita hendak membuat fungsi pemrosesan angka yang kadang angak yang diproses 5, kadang 10, kadang juga 100.
Untuk hal itu kita dapat menggunakan **Vararg Parameter**.
Vararg Parameter merupakan metode untuk mendeklarasikan banyak parameter menjadi 1 parameter array dengan memuliskan `vararg` sebelum nama parameter-nya, dan menambah data type di belakang.

```kotlin

fun getMax(vararg numbers: Int): Int {
	var max = 0

	numbers.forEach {
		if (it > max) max = it
	}

	return max
}

getMax(1, 5, 2, 7, 8, 3, 12, 545, 76, 23)
getMax(45, 6, 3, 4, 5, 7, 4, 3, 5, 6, 7, 8, 5, 4, 3, 5, 6, 4)
```

tidak peduli berapa banyak parameter yang kita tulis, semua akan menjadi satu ke dalam vararg parameter/argument.

Bisa difahami?

Kalau bisa difahami, lantas apa bedanya vararg argument `vararg numbers: Int` dengan argument dengan data type Array `numbers: Array<Int>`?
Bedanya.... Pada parameter data type Array, kita hanya dapat menerima array, sementara vararg tidak, kita juga dapat menambahkan array ke dalam parameter menggunakan tanda **(\*)** seperti berikut

```kotlin

val arrayNum = arrayOf(2, 3, 4, 6, 7, 8, 4, 5, 3)

getMax(2, 3, 4, 5, *arrayNum, 43, 6, 7)
```

Perlu difahami bahwa deklarasi vararg parameter, harus di depan. Adapun bila kita perlu parameter lain, kita dapat menggunakan Named Parameter seperti berikut

```
fun getMax(vararg numbers: Int, name: String, age: Int): Int {
	var max = 0

	numbers.forEach {
		if (it > max) max = it
	}

	println("Namaku $name, umur $age")

	return max
}

getMax(1, 5, 2, 7, 8, 3, 12, 545, 76, 23, name = "Abdul", age = 23)
```

Bisa difahami?
Kita sudah membahas

- Named Parameter untuk mengatasi urutan parameter
- Default Parameter Value untuk memeberi default value, bila parameter tersebut tidak di-definisikan waktu pemanggilan
- Vararg Parameter/Argument untuk mengatasi banyak parameter.

BTW, parameter/argument secara default merupakan **val** variabel, jadi parameter bersifat **immutable**.

##Return Type

Return Type merupakan type data dari value yang dikembalikan fungsi tersebut.
Ditulis pada Function Head, setelah kurung parameter, dan sebelum kurung Function Body.
Secara default Return Type adalah `: Unit`, yaitu bila kita tidak mengembalikan apapun dari fungsi tersebut.
Namun bila kita hendak mengembalikan nilai, kita sebaiknya mendefinisikan return type.

Dan satu lagi. Bila kita membuat fungsi yang menjalankan satu aksi dan seketika mengembalikan nila kita dapat menuliskannya seperti berikut

```kotlin

add(1, 2)

fun add(vararg numbers: Int) : Int = numbers.sum()
```

Tanpa kurung kurawal `{...}` Funtion Body, Dengan tanda `=` tepat setelah Return Type, dan variable / nilai / expression function yang dikembalikan.

Dan karena kita langsung mengembalikan nilai tepat di sampingnya, kita juga bisa menghilangkan return type

```kotlin

fun add(vararg numbers: Int) = numbers.sum()
```

Cukup sederhana kan...

Baiklah... Aku rasa cukup untuk article kali ini, point-point selanjutnya mengenai Functional Programming akan dibahas pada article article selanjutnya...

Semoga dapat difahami...

Terima kasih...

**Enjoy....**
