---
title: "Kotlin bagian 3: Control Flow & Pengenalan Fungsi"
description: "Kotlin control flow - mengenal arus kerja program & mengaturnya pada bahasa kotlin"
tags: ["kotlin", "belajarapa"]
publishDate: "16 Sep 2019"
---

Fokus kita kali ini adalah membahas bagaimana kita mengandalikan alur kerja program yang kita buat. Dan sedikit penganalan fungsi pada kotlin.
Sebelumnya, teman teman bisa mencobanya di [try.kotlinlang.org](https://try.kotlinlang.org/).

Pengertian sederhana dari Control Flow adalah cara bagaimana kita dapat mengendalika alur kerja program yang kita buat. Tentu dalam mengerjakan sebuah program kita akan dihadapkan dengan berbagai data dan kemungkinan, bagaimana kita akan menjalankan program dengan semestinya kita ingin dan harapkan dengan berbagai data dan kemungkinan itu, disinilah kegunaan control flow.

Beberapa yang akan kita bahas kali ini adalah

- if condition
- when condition
- range & for loop
- while & do while
- continue & break loop
  Okay langsung saja

##If Condition
Pada dasarnya If Condition adalah bagaimana kita memberi syarat kepada program, pada keadaan seperti apa dia harus berjalan.

###Contoh & Formulanya

```kotlin
val teks: String? = null

if (teks != null) {
  println(teks.length)
  println("panjang teks adalah ${teks.length}")
}

if (teks != null) println(teks.length)
```

formulanya adalah

1. if
2. tanda kurung, disertai syarat di dalamnya `(teks != null)`
3. aksi yang kita ingin dia lakukan, bila hanya satu aksi kita tidak perlu tanda kurung, bila lebih dari satu maka bungkus dalam kurung kurawa seperti contoh di atas

Pada contoh di atas kita memberi syarat teks tidak boleh null, bila syarat terpenuhi, kita menampilkan panjang teks tersebut.

Lantas, bagaimana bila kita hendak menambah aksi bila syarat tidak terpenuhi? berikut solusinya

```kotlin
if (teks != null) {
  println(teks.length)
  println("panjang teks adalah ${teks.length}")
} else println("null mas")

if (teks != null) println(teks.length) else println("null mas")
```

Kita tinggal menambahkan `else` setelah aksi dari if, seperti halnya if, bila aksi yang kita buat hanya memiliki 1 buah aksi, maka tidak perlu kurung kurawa **({ })**, namun apabila lebih dari satu, kita perlu kurang kurawa.

Okay... Kalau kita mau syaratnya lebih dari satu? solusinya begini..

```kotlin
if (teks == "Ghofur") {
  println("Hi Ghofur")
  println("panjang teks adalah ${teks.length}")
} else if (teks == "Abdul") println("Ada Abdul")
else println("null mas")

if (teks == "Ghofur") println(teks.length)
else if (teks == "Abdul") println("Ada Abdul")
else println("null mas")
```

Kita tinggal menambahkan `else if` setelah aksi if dan sebelum else. Seperti halnya if dan else, bila aksi yang kita buat hanya memiliki 1 buah aksi, maka tidak perlu kurung kurawa **({ })**, namun apabila lebih dari satu, kita perlu kurang kurawa.

Kita juga dapat memasukkan if condition ke dalam if, selanjutnya kita sebut dengan **nested if** atau if bersarang.

```kotlin
if (teks != null) {
  println("panjang teks adalah ${teks.length}")

	if (teks == "Abdul") println("ada Abdul")
	else println("Siapa ya?")
} else println("null mas")
```

Seperti di atas ini, namun kita juga perlu memikirkan mengenai peforma aplikasi ya.

Got it... Hmmm, kalau kita mau nambah syarat lagi gimana dong? Tentu saja kita bisa saja menambahkan else if sebanyak yang kita mau, Namun cara terbaik untuk menambah kondisi yang banyak adalah menggunakan when condition.

##When Condition
Fungsi dari When Condition sama persis dengan If. Hanya saja digunakan bila syarat yang kita inginkan sudah lebih banyak. Dalam JavaScript sama seperti Switch.

###Contoh & Formulanya

```kotlin
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

1. kata kunci `when`
2. tanda kurung, disertai variable atau nilai yang hendak kita tes
3. kurung kurawa sebagai pembungkus body when
4. syarat yang kita tentukan, `100`, `in 80..99` dan yang lain
5. tanda panah `->`
6. aksi bila syarat terpenuhi, tidak perlu kurung kurawa bila hanya satu
7. `else` bila semua syarat tidak ada yang terpenuhi. `else` bersifat optional, namun alangkah baiknya kita menambahkan else.

Berbeda dengan Switch Case di JavaScript, yang mana bila syarat terpenuhi dan Case tidak `return` / tidak kita `break;`, maka Switch akan lanjut untuk memeriksa case selanjutnya. Pada Kotlin, When hanya akan memeriksa sampai syarat terpenuhi, bila sudah maka tidak akan melanjutkan memeriksa.

BTW, mungkin beberapa asing dengan `in 80..99`. `in` adalah cara untuk memeriksa apakah nilai yang kita cari **ada di dalam 80..99 yang disebut range**. Yap, `80..99` disebut **range** terlihat dari penulisanya menggunakan `..`, ini bermaksud **80 sampai 99**. Selanjutnya kita akan membahas range.

##Range & For Loop
**Range** merupakan data unik, yang memudahkan kita membuat data jarak atau urutan, sebagai contoh kita ingin membuat urutan 1 sampai 100, tidak perlu membuat manual 1 sampai seratus, atau membuat iteration untuk melakukan itu, kita hanya perlu menuliskan seperti berikut

###Contoh & Formula

```kotlin
val satuSampaiSeratus = 1..100	// akan menghasilkan 1..100
val sijiNgasiSatus = 1.rangeTo(100) // akan menghasilkan 1..100
val satusNgasiSiji = 100.downTo(1) // akan menghasilkan 100..1
val nolSampaiSeratusLimaLangkah = 1..100 step 5 // akan menghasilkan 1..100 step 5
val nolNgasiSatusLimaJangkah = 1.rangeTo(100) step 5 // akan menghasilkan 1..100 step 5
val AsampaiZ = 'A'.rangeTo('Z')
```

Penulisan seperti di atas. Kita menentukan awal dan akhir, bisa menggunakan `..` atau `.rangeTo()`, untuk dari nilai besar ke kecil kita bisa menggunakan `.downTo()`. Bila kita print variable di atas, hanya akan menampilkan seperti pada komen. Namun bila kita masukkan ke dalam iteraiton, hasilnya akan meng-iterate tiap nilai nya.

**For Loop** satu dari metode untuk mengulangi nilai dari awal sampai akhir yang kita tentukan. Mari kita praktekkan pada range di atas

```kotlin
for (angka in satuSampaiSeratus) println(angka)

/*
akan menampilkan
1
2
3
4
5
dan seterusnya sampai 100
*/
```

1. kata kunci `for`
2. tanda kurung, dengan syarat di dalamnya `angka in satuSampaiSeratus` yang artinya variable angka mewakili tiap nilai dari variable satuSampaiSeratus.
3. aksi yang kita tentukan `println(angka)`, bila hanya satu aski tidak perlu menggunakan kurung kurawa, sebaliknya bila lebih, maka perlu.

Kita juga menggunakan iteration function `.forEach()`

```kotlin
satuSampaiSeratus.forEach { angka ->
	println(angka)
}
```

##While & Do While
Seperti halnya **for loop** While dan Do While juga berguna untuk iteration. Namun berbeda dengan for loop yang hanya bisa iterate variable iteration yang sudah ada, while dan do while dapat memberi syarat sampai kapan kita melakukan iteration.

###Contoh & Formula

```kotlin
var angka = 1

while (angka <= 100) {
	println(angka)
	angka++
}

/*
akan menampilkan
1
2
3
4
5
dan seterusnya sampai 100
*/
```

1. kata kunci `while`
2. kurung, dengan syarat di dalamnya `(angka <= 100)` yang artinya selama angka kurang dari sama dengan 100
3. aksi dibungkus dengan kurung kurawa
4. jangan lupa tambahkan fungsi modifikasi nilai yang kita ulang, `angka++`, bila tidak akan terjadi infinite loop

While memungkinkan kita untuk memberikan syarat di depan, dan melakukan aksi bila syarat terpenuhi, dalam contoh di atas, syaratnya bila angka kurang atau sama dengan 100, bila lebih maka tidak akan dilanjutkan pada aksi. Atau sering disebut **Entry Controlled Loop**. ngga perlu dihafal sih, yang penting tau car gunanya.

Sebaliknya Do While, melakukan aksi terlebih dahulu, baru kita memasukkan syarat di belakang. Atau sering disebut **Exit Controlled Loop**

```kotlin
var angka = 1

do {
	println(angka)
	angka++
} while (angka <= 100)

/*
akan menampilkan
1
2
3
4
sampai 100
*/
```

1. kata kunci `do`
2. action, dibungkus kurung kurawa
3. jangan lupa tambahkan fungsi modifikasi nilai yang kita ulang, `angka++`, bila tidak do while tidak akan berjalan
4. kata kunci while
5. tanda kurung, disertai syarat di dalamnya

##Continue & Break Loop
Continue & Break adalah metode untuk melakukan intervensi di dalam loop _(bener ngga sih bahasanya, wkwkwk)_. Continue digunakan untuk melewati iterasi yang sedang berlangsung. Sementara break digunakan untuk menghentikan iterasi. Cara pamanggilannya sederhana, kita tinggal letakkan if condiiton sebagai syarat iterasi nyang akan kita eksekusi.

```kotlin
val range = 1..10

for (angka in range) {
	if (angka == 5) continue
	println(angka)
}

/*
akan menampilkan hasil
1
2
3
4
6
7
8
9
10

angka 5 dilewati
*/


for (angka in range) {
	if (angka == 5) break
	println(angka)
}

/*
akan menampilkan hasil
1
2
3
4

bila syarat terpenuhi, maka iterasi diberhentikan
*/
```

Bisa dimengerti kan? Okay...
Perlu diperhatikan bahwa continue dan break hanya bereaksi pada iterasi terdekatnya

```kotlin
val range = 1..3

for (angka in range) {
	val rangeB = 'A'..'C'

	println(angka)
	for (char in rangeB) {
		if (char == 'B') continue
		println("$angka-$char")
	}
}

/*
akan menampilkan hasil

1
1-A
1-C
2
2-A
2-C
3
3-A
3-C

bisa dilihat tiap angka dengan karakter B dilewati
*/


for (angka in range) {
	val rangeB = 'A'..'C'

	println(angka)
	for (char in rangeB) {
		if (char == 'B') break
		println("$angka-$char")
	}
}

/*
akan menampilkan hasil

1
1-A
2
2-A
3
3-A

bisa dilihat tiap masuk karakter B,
iterasi karakter diberhentikan,
tapi tetap lanjut iterasi angka
*/
```

Okay... Lantas kalau mau berhentikan iterasi terluar bagaimana? kita bisa gunakan **alias** seperti berikut

```kotlin
val range = 1..3

outer@ for (angka in range) {
	val rangeB = 'A'..'C'

	println(angka)
	for (char in rangeB) {
		if (char == 'B') continue@outer
		println("$angka-$char")
	}
}

/*
akan menampilkan hasil

1
1-A
2
2-A
3
3-A

bisa dilihat tiap karakter sampai B,
maka semua langsung dilewati,
meski ini bisa dilakukan dengan break biasa,
namun membuktikan bahwa continue bekerja pada loop dengan alias outer
*/


outer2@ for (angka in range) {
	val rangeB = 'A'..'C'

	println(angka)
	for (char in rangeB) {
		if (char == 'B') break@outer2
		println("$angka-$char")
	}
}

/*
akan menampilkan hasil

1
1-A

bisa dilihat saat masuk karakter B,
iterasi outer2 langsung diberhentikan,
*/
```

Semoga dapat difahami...

##Pengenalan Fungsi
Fungsi merupakan blok kode yang melakukan tugas tertentu atau satu blok instruksi yang di eksekusi ketika dipanggil dari bagian lain dalam suatu program.

###Contoh dan Formulanya

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

1. kata kunci `fun`
2. nama fungsi, pada contoh di atas `sayHi`
3. tanda kurung,
4. Di dalam tanda kurung terdapat parameter yang diinginkan disertai tipe data parameter tersebut, contoh di atas `jenenge: String`, untuk memisah antar paramter gunakan tanda koma (,). Nama parameter bisa apa saja, tidak harus sama dengan variable yang nantinya akan dimasukkan sebagai parameter. Namun untuk memudahkan, alangkah baiknya sama. Contoh di atas menggunakan nama yang berbeda untuk memberi contoh bahwa namanya dapat berbeda.
5. fungsi return type. Pada contoh di atas `: Unit`, Unit adalah aturan default pada fungsi. Bila fungsi yang kita buat tidak mengembalikan Value dan hanya mengeksekusi sesuatu, secara default dia Unit, dan boleh tidak dituliskan. Namun bila mengembalikan value, maka kita perlu menuliskan type data value yang kita kembalikan, kalau tidak salah optional, namun dianjurkan, tujuannya agar kode lebih rapi dan mudah dibaca, kita tidak perlu membaca keseluruhan fungsi untuk tahu apa yang dikembalikannya. Lebih jelas pada sesi berikutnya
6. badan fungsi yang dubungkus kurung kurawa

Cara pemanggilan funsi sangat sederhana, kita tinggal panggil namanya, dengan tanda kurung, bila fungsi tersebut memerlukan parameter, maka masukkan parameternya, bila lebih dari satu, gunakan tanda koma (,) seperti `sayHi(name, age)`.

Okay... aku kira cukup article kali ini,
kita telah belajar control flow dan pengenalan fungsi,
lebih dalam tentang fungsi akan kita bahas pada sesi selanjutnya: Lebih dalam dengan Fungsi, Functional Programming

Semoga dapat difahami...

**Enjoy...**
