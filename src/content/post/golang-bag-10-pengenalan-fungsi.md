---
title: "Golang bagian-10 Pengenalan Fungsi"
description: "Golang function - mengelompokkan dan mengorganisir baris kode ke dalam fungsi"
tags: ["golang", "belajarapa"]
publishDate: "09 Jun 2020"
ogImage: ""
---

## Fungsi

Merupakan kumpulan kode yang dibungkus menjadi satu
Biasa digunakan untuk kode yang sering digunakan, alih-alih menuliskannya berkali-kali, cukup tulis sekali, dan panggil saja kapan pun, dimanapun dibutuhkan.

### Format sederhananya

```go
func namaFungsi() {
    /*
        Tulis blok kode nya di sini
    */
}
```

contoh

```go
package main

import . "fmt"

func main() {
    greeting()
    // Hello there
}

func greeting() {
	Println("Hello there")
}
```

### Dengan parameter

```go
func namaFungsi(param1 tipeDataParam1, param2 tipeDataParam2) {

}
```

Parameter kita tulis dalam kurung, seperti bahasa lain, tipe data parameter kita tulis tepat setelah parameter tersebut dengan spasi, tiap parameter terpisah koma.
contoh

```go
package main

import . "fmt"

func main() {
	greeting("Abdul", "Andi")
    // Hello Abdul & Andi
}

func greeting(param1 string, param2 string) {
    Println("Hello", param1, "&", param2)
}
```

### Dengan parameter bertipe data sama

```go
func namaFungsi(param1, param2 tipeDataParam) {

}
```

Bila banyak parameter, dan bertipe sama, cukup kita tulis di bagian akhir, tidak perlu menulis semuanya
contoh

```go
package main

import . "fmt"

func main() {
    greeting("Abdul", "Andi")
    // Hello Abdul & Andi
}

func greeting(param1, param2 string) {
	Println("Hello", param1, "&", param2)
}

```

### Dengan return value

```go
func namaFungsi(param1, param2 tipeDataParam) tipeDataReturn {
    return hasil
}
```

Bila fungsi mengembalikan nilai, kita definisikan tipe data return setelah kurung parameter. dan mengembalikan nila di dalam body fungsi dengan keyword `return`
contoh

```go
package main

import . "fmt"

func main() {
	var bruto float32 = 73
	var netto float32 = 71.5

	tara := hitungTara(bruto, netto)

    Println(tara)
    // 1.5
}

func hitungTara(bruto, netto float32) float32 {
	return bruto - netto
}

```

### Return lebih dari satu

```go
func namaFungsi(param1, param2 tipeDataParam) (tipeDataReturn1, tipeDataReturn2) {
    return hasil1, hasil2
}
```

Bila mengembalikan hasil lebih dari satu nilai, cukup memberi kurung dan koma pada tipe data return, dan memisah nilai return dengan koma.

```go
package main

import . "fmt"

func main() {
	var bruto float32 = 73
	var netto float32 = 71.5

	tara, taraInPercent := hitungTara(bruto, netto)

    Println(tara, taraInPercent)
    // 1.5 2.0547945
}

func hitungTara(bruto, netto float32) (float32, float32) {
	var tara float32 = bruto - netto
	var taraInPercent float32 = tara / bruto * 100
	return tara, taraInPercent
}

```

### Predefined Return

```go
func namaFungsi(param1, param2 tiperDataParam) (hasil1 tipeDataReturn1, hasil2 tipeDataReturn2) {
    hasil1 = param1
    hasil2 = param2

    return
}
```

Bila kita menentukan variabel apa yang akan dikembalikan, dalam kurung tipe data return, tulis juga nama variabel-nya, dan dalam body fungsi, kita hanya perlu menulis keyword `return`. Berlaku juga bila hanya mengembalikan 1 nilai. Perlu diketahui bahwa `predefined` berarti kita telah mendeklarasi variabel tersebut, kita hanya perlu inisialisasi di dalam body fungsi

```go
func hitungTara(bruto, netto float32) (tara, taraInPercent float32) {
	tara = bruto - netto
	taraInPercent = tara / bruto * 100
	return
}
```

kita pun dapat menyingkat tipe data return yang sama seperti tipe data paremeter yang sama.

### Variadic

Bila kita memasukkan banyak parameter dengan tipe data sama, dan ingin menerimanya sebagai satu variabel seperti slice. Inilah yang disebut variadic

```go
func namaFungsi(params ...tipeDataParams) {

}

namaFungsi(param1, param2, param3, param4)
```

Perlu diingat bahwa ini hanya berlaku pada tipe data yang sama. dengan begitu `param1, param2, param3, param4` akan diterima sebagai `[param1, param2, param3, param4]`

Dan tentunya kita dapat meng-_iterate_ `params`

```go
package main

import . "fmt"

func main() {
	avr := hitungRatarata(9, 9, 5, 3, 6, 7, 6, 7, 6)

    Println(avr)
    // 6.4444447
}

func hitungRatarata(semuaNilai ...float32) (avr float32) {
	var totalNilai float32 = 0

	for _, nilai := range semuaNilai {
		totalNilai += nilai
	}

	avr = totalNilai / float32(len(semuaNilai))

	return
}
```

Lantas bagaimana bila kita hendak melempar parameter slice sebagai variadic?

```go
var slice = []int{1, 2, 3, 4}

namaFungsi(slice...)
```

Cukup menambah `...` di belakangnya.

```go
var semuaNilai = []float32{9, 9, 5, 3, 6, 7, 6, 7, 6}

avr := hitungRatarata(semuaNilai...)
```

Atau barangkali teman-teman lebih suka menerimanya sebagai slice, pun bisa dilakukan.

Namun tipe data parameter di fugsi harus dirubah jadi slice.

Yang berarti kita pun tidak bisa memanggil fungsi seperti `namaFungsi(param1, param2, param3, param4)`.

Perlu digarisbawahi bahwa **variadic berbeda dengan slice**.

- Dengan variadic, kita bisa menerima banyak param sebagai slice, ataupun menerima slice, tentu dengan tanda `...`
- Namun dengan slice, kita tidak bisa menerima banyak param sebagai slice.

### Param Variadic & Biasa

Kita pun dapat mengkombinasikan param biasa dengan variadic.

Dengan ketentuan **variadic harus di belakang**

```go
func namaFungsi(param1 tipeDataParam1, otherParams ...tipeDataOtherParams) {

}

namaFungsi(param1, param2, param3)

namaFungsi(param1, slice...)
```

contoh

```go
package main

import . "fmt"

func main() {
    greeting("Abdul", "Andi")
    // Hello Abdul & 1 temannya

    greeting("Abdul", "Budi", "Agung", "Rizki")
    // Hello Abdul & 3 temannya

    siswa := []string{
		"Eko",
		"Anu",
		"Ani",
		"Ehm",
	}

    greeting(siswa[0], siswa[1:]...)
    // Hello Eko & 3 temannya
}

func greeting(nama string, teman ...string) {
	Println("Hello", nama, "&", len(teman), "temannya")
}
```

Demikian artikel kali ini,
Semoga mudah dipahami,
Terima kasih.
