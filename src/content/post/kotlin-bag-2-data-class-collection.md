---
title: "Kotlin bagian-2 Data Types: Data Class & Collecton"
description: "Kotlin - mengenal class dan cara penggunaannya pada bahasa kotlin"
tags: ["kotlin", "belajarapa"]
publishDate: "15 Sep 2019"
ogImage: ""
---

Pada sesi sebelumnya kita telah membahas [**Kenapa memilih Kotlin, Penulisan Variable, sedikit Data Types seperti Teks, Number, Boolean & Array, dan Bermain dengan Null**](/blog/hello-kotlin). Pada sesi ini masih seputar Data Types, Data Class, Collection dan Function.

##Data Class

Merupakan class yang dikhususkan untuk menangani data, di dalamnya terdapat build in function _(fungsi bawaan)_ yang memudahkan developer untuk menangani data, selanjutnya yang membedakannya dengan class pada umumnya.

###Formula

```kotlin
data class Vehicle(val type: String, val brand: String, val product: String)
```

- keyword `data`
- keyword `class`
- nama Data Class, _(dalam conoth di atas Mobil)_
- kurung buka dan tutup, di dalamnya **setidaknya harus ada 1 parameter constructor utama**, **penulisan parameter menggunakan variable keyword**

###Cara Pemanggilan

```kotlin
val ceoVehicle: Vehicle = Vehicle("car", "toyota", "agya")
```

- variable keyword
- nama variable
- type data **nama data class**, _(optional)_
- `=`
- nama data class
- kurung buka dan tutup, serta parameter konstruktor di dalamnya

###Perbedaanya dengan Class pada umumnya
Seperti di mention di atas, terdapat build in function yang memudahkan developer untuk menangani data, seperti toString(), copy(), equals(), dll

```kotlin
data class Vehicle(val type: String, val brand: String, val product: String)
class Car(val brand: String, val product: String)

val ceoCar: Car = Car("toyota", "agya")
val myVehicle: Vehicle = Vehicle("plane", "garuda", "") // amiiin

println(ceoCar)
println(myVehicle)
```

akan menampilkan hasil

```kotlin
NamaFileKt$main$Car@28a418fc
Vehicle(type=plane, brand=garuda, product=)
```

untuk mendapatkan hasil yang sama, maka di dalam penulisan `class Car` yang berperan sebagai class biasa, perlu diubah menjadi

```kotlin
class Car(val brand: String, val product: String) {
	override fun toString(): String {
  	return "Car(brand=$brand, product=$product)"
	}
}
```

hal inin pun berlaku pada build in function/method lain yang terdapat pada data class, class biasa perlu menambahkan secara manual ke dalam body class-nya, yang akhirnya developer perlu effort lebih, kode lebih panjang dan menjadi lebih sukar untuk dibaca.

Kita juga dapat membandingkan variable pada data class seperti berikut

```kotlin
val myVehicle = Vehicle("plane", "garuda", "") // amiiin
val hisVehicle = Vehicle("plane", "garuda", "") // amiiin
val herVehicle = Vehicle("rocket", "", "") // amiiin

println(myVehicle.equals(hisVehicle)) // akan menampilkan nilai true
println(myVehicle.equals(herVehicle)) // akan menampilkan nilai false
```

Hal ini tidak dapat dilakukan dengan class biasa, setidaknya perlu menambahkan berbaris-baris code.

BTW, dalam pemanggilan class, kita wajib menyertakan semua parameter constructor yang kita buat waktu pembuatan data class. Susah dimengerti? okay langsung contoh

```kotlin
data class Vehicle(val type: String, val brand: String, val product: String)

val myVehicle: Vehicle = Vehicle("plane", "garuda") // akan menghasilkan error No value passed for parameter 'product'
```

Mengambil nilai dari variable data class

```kotlin
val (type, brand) = myVehicle // akan menghasilkan type = "plane" dan brand = "garuda"

// atau juga bisa seperti berikut
val myVehiType = myVehicle.type 		// akan menghasilkan nilai "plane"
val myVehiBrand = myVehicle.brand 	// akan menghasilkan nilai "garuda"
```

Copy variable data class, sekaligus mengubahnya

```kotlin
val myVehicle = Vehicle("plane", "garuda", "") // amiiin
val hisVehicle = myVehicle.copy() // akan menghasilkan data sama persis dengan myVehicle
val herVehicle = myVehicle.copy(brand="lion air") // akan menghasilkan daata sama dengan myVehicle, hanya saja brand-nya sudah kita ubah
```

dan masih banyak lagi method yang lain..

##Collection

Merupakan data type yang hampir sama seperti array. Collection memungkinkan kita menyimpan berbagai jenis data ke dalam Colleciton. Collection terdiri dari

- List
- Set
- Map

###List
Sepengetahuanku List pada dasarnya sama dengan Array, kita bisa menyimpan data apa saja, data type sekalipun. Hanya saja, pada dasarnya List merupakan immutable data _(data yang tidak bida diubah)_, dan kita tidak bisa membuatnya seperti `Array(5, { i -> i * 5)`. Lantas bagaimana bila kita hendak mengubahnya? Kita dapat menggunakan Mutable List. Bingung? langsung ke contoh..

```kotlin
val immutableList = listOf(1, 2, 3, 4, 5) // list yang tidak dapat dirubah (Immutable List)
val anotherImmutableList = listOf(34, "Abdul", true, Vehicle("plane", "garuda", ""))

val mutableList = mutableListOf(1, 4, 5, 6, 3, 5) // list yang dapat dirubah (Mutable List)

// maka kita dapat melakukan ini
mutableList[0] = 12 		// akan mengubah mutableList menjadi [12, 4, 5, 6, 3, 5]
mutableList.remove(12) 	// akan menghilangkan 12 dari mutableList
mutableList.add(12) 		// akan menambahkan 12 ke dalam mutableList
```

###Set
Merupakakn Collection yang nilai di dalamnya **unik**, meski waktu ada nilai sama waktu kita membuatnya.

```kotlin
val unik = setOf(1, 5, 6, 2, 1, 2) // akan menghasilkan nilai [1, 5, 6, 2]
```

kita dapat memeriksa apakah sebuah nilai ada di dalam set dengan `in`

```kotlin
println(5 in unik) // akan menampilkan hasil true
```

Sepertihalnya List, Set secara default merupaka immutable data. Kita dapat mengubahnya menjadi mutable data dengan `mutableSetOf()` seperti pada List. Hanya saja berbeda dengan List yang mana kita bisa merubah value pada index tertentu, kita tidak dapat melakukannya di Set. Kita hanya bisa menambah dan menghilangkan.

###Map
Berbeda dengan 2 Collection sebelumnya. Map memiliki key sendiri yang bisa kita buat, yang harus unik.

```kotlin
val me = mapOf(
	"firstName" to "Abdul"
	"lastName" to "Ghofur"
	"age" to 23
)

println(me["firstName"]) // akan menampilkan "Abdul"
println(me.getValue("firstName")) // akan menampilkan "Abdul"


// namun berbeda mengambil data dengan index dengan getValue pada data yang tidak ada, contoh
println(me["namaIstri"]) // akan menampilkan null
println(me.getValue("namaIstri")) // akan menghasilkan error
```

Sama dengan 2 Collection sebelumnya, Map secara default merupakan immutable data type. Adapun cara mengubahnya seperti contoh `me.toMutableMap()` _(berlaku juga untuk type data yang lain)_ dan waktu definisi seperti `mutableMapOf()`. adapun cara mengubahnya pun sama, hanya berbeda dengan 2 Collection lain yang menambah menggunakan `add()`, pada Map menggunakan `put(key, value)`.

###Bermain dengan Collection
Setalah mengetahui Collection, sekarang bagaimana kita bermain dengan Collection. Beberapa di antaranya

- map()
- count()
- filter() & filterNot()
- find(), first(), firstOrNull(), last() & lastOrNull()
- sum()
- sorted() & sortedDescenting()

```kotlin
val listAsli = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

/*
map() untuk meng-iterasi(mengulangi) semua nilai dari collection,
mengolah dan mengembalikan semuanya
*/
val listDikaliDua = listAsli.map { it * 2 } // akan menghasilkan [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// count() akan menghitung panjang collection
val panjangList = listAsli.count() // akan menghasilkan nilai 10

/*
filter() akan meng-iterasi semua nilai dari collection,
mem-filter(menyaring) dan mengembalikan hanya nilai yang sesuai dengan filter
*/
val listGenap = listAsli.filter { it % 2 == 0 } akan mengembalikan [2, 4, 6, 8, 10]

/*
filterNot() sama dengan filter,
namun akan mengembalikan nilai yang tidak sesuai filter yang dimasukkan
*/
val listGanjil = listAsli.filter { it % 2 == 0 } akan mengembalikan [1, 3, 5, 7, 9]

/*
find() & firstOrNull() akan mencari nilai pertama yang memenuhi syarat pencarian,
bila tidak ketemu maka akan menghasilkan nilai null
*/
val ketemuGenapPertama = listAsli.find { it % 2 == 0 } // akan menghasilkan 2
val ketemuPakauFirstOrNull = listAsli.find { it % 2 == 0 } // akan menghasilkan 2
val cariYangLebihDari100 = listAsli.find { it > 100 } // akan mengembalikan null, begitu juga firstOrNull()

/*
first() sama dengan find(), tapi akan menghasilkan erro bila tidak ketemu
last() dan lastOrNull() sama mencari nilai terakhir yang memenuhi syarat pencarian,
bedanya last() akan menghasilkan error, dan lastOrNull() akan mengembalikan null, bila tidak ketemu
*/


// sum() akan menghasilkan jumlah dari semua nilai
val jumlah = listAsli.sum() // akan menghasilan nilai 55

// sorted() akan mengurutkan nilai dari collection
val urut = listAsli.sorted()

// sortedDescending() akan mengurutkan nilai dari collection secara descending (terbalik)

```

Okay... Kita telah membahas data class dan collection.
Semoga dapat dimengerti. Bisa dicoba di [try.kotlinlang.org/](https://try.kotlinlang.org/) bila belum faham.

Terima kasih.

**Enjoy..**
