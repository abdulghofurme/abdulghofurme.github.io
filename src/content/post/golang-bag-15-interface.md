---
title: "Golang bagian-15 Interface"
description: "Golang interface - mengenal interface pada bahasa go & keunikannya"
tags: ["golang", "belajarapa"]
publishDate: "20 Jun 2020"
---

Dimana struct merupakan cetak biru sebuah objek yang nantinya bisa kita gunakan untuk beberapa kali.
Interface pun sebenarnya hampir sama dengan `struct`. Interface merupakan wadah dimana kita mengelompokkan method, yang nantinya pun bisa kita panggil berkali kali.
Bahkan pembutannya pun sama persis dengan _struct_.

Berikut cara pembuatannya

```go
type interaksi interface {
    bersuara()
    marah()
}
```

Seperti disebut sebelumnya bahwa interface merupakan wadah dari banyak _method_, maka sepertihalnya method biasa, dapat mengembalikan nilai, pun dengan yang lain.

Lantas kegunaan dari interface apa sih?

Ya, mengelompokkan method.

Analoginya seperti ini.

Kita memiliki 2 _struct_ `Manusia` dan `Kucing`, keduanya memiliki **beberapa** habit yang sama, nah ini yang kita kelompokkan.
Contohnya

```go
package main

import . "fmt"

type interaksi interface {
	bersuara()
	marah()
}

type manusia struct {
	nama string
}

func (m manusia) bersuara() {
	Println(m.nama, ": Hai")
}

func (m manusia) marah() {
	Println(m.nama, ": Woi, lihat lihat dong !!!")
}

func (m manusia) mendoakan() {
	Println(m.nama, ": Semoga senantiasa diberi kebarokahan")
}

type kucing struct {
	nama string
}

func (k kucing) bersuara() {
	Println(k.nama, ": Meow")
}

func (k kucing) marah() {
	Println(k.nama, ": MEEEEEEE....")
}

func main() {
	var makhlukHidup interaksi

	makhlukHidup = manusia{"Bagong"}
	makhlukHidup.bersuara()
    makhlukHidup.marah()
    // Bagong : Hai
    // Bagong : Woi, lihat lihat dong !!!

	makhlukHidup = kucing{"Orange"}
	makhlukHidup.bersuara()
    makhlukHidup.marah()
    // Orange : Meow
    // Orange : MEEEEEEE....
}
```

Contoh di atas kita hanya menggunakan metode yang ada dalam interface.

Lantas apakah berarti kita tidak bisa menggunakan metode selain yang ada di interface.

Kita dapat menggunakannya dengan cara berikut

```go
var makhlukHidup interaksi

makhlukHidup = manusia{"Bagong"}

makhlukHidup.bersuara()
makhlukHidup.marah()
makhlukHidup.(manusia).mendoakan()

makhlukHidup = kucing{"Orange"}

makhlukHidup.bersuara()
makhlukHidup.marah()
```

Dengan cara menuliskan _struct_ sebelum memanggilnya.
Dan pastikan hanya memanggilnya saat variabel itu berbentuk struct yang sesuai, dalam kasus ini berbentuk `manusia`, karena kalau kita memanggilnya saat berbentuk `kucing` pasti error.

Kita pun bisa memasukkan interface ke dalam interface seperti berikut

```go
type interface1 interface {
    method1()
    method2()
}

type interface2 interface {
    method3()
}

type semuaInterface interface {
    interface1
    interface2
}
```

Lalu cara penggunaannya seperti biasa.

## Interface sebagai tipe data

Di atas dijelaskan bahwa interface merupakan wadah dari beberapa method.

Bukan hanya itu lho, interface juga dapat kita gunakan sebagai tipe data.
Lebih tepatnya tipe data yang fleksible.

Maksudnya???

Tidak seperti tipe data yang telah kita pelajari sebelumnya, bahwa sebuah variabel hanya dapat menerima nilai sesuai tipe data nya, bila tidak, pasti error.

Kalau `string` hanya dapat menerima string, ditandai `""`, dan tidak bisa dimasuki angka.
Begitu pun sebaliknya yang lain.

Nah interface berbeda, dia bisa menerima semua itu.

```go

var test interface{}

test = "Abdul"
Println(test)
// Abdul

test = 1.3
Println(test)
// 1.3
```

Bukan hanya tipe data primitif lho, Map, Array, Slice pun bisa kita gunakan.
Fleksibel kan....

Dengan begitu, map yang hanya dapat menampung 1 tipe data, sekarang bisa berbentuk seperti struct yang bisa menampung bermacam tipe data dengan cara

```go
siswa := map[string]interface{}{
	"nama": "Abdul",
	"umur": 24,
	"hobi": []string{"baca", "nulis", "nonton", "tidur"},
}

Println(siswa)
// map[hobi:[baca nulis nonton tidur] nama:Abdul umur:24]
```

Mantap....

Eits....
Jangan salah ya....

**TIPE DATANYA TETAP INTERFACE**, yang artinya bila kita hendak mengkalikan atau menggunakan metode metode yang spesifik dengan tipe data yang berkaitan, maka akan menghasilkan error.

Solusinya harus kita casting terlebih dahulu, seperti

```go
Println(siswa["umur"] + 4)
// error: invalid operation: siswa["umur"] + 4 (mismatched types interface {} and int)

// SOLUSI - CASTING
Println(siswa["umur"].(int) + 4)
// 28
```

Tinggal menambahkan `.(tipeDataYangBerkaitan)`.

Demikian artikel kali ini,
Semoga mudah dipahami,
Terima kasih.
