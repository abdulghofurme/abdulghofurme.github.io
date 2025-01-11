---
title: "Golang bagian-11 Closure"
description: "Golang closure - mengenal closure dan implementasinya pada bahasa go"
tags: ["golang", "belajarapa"]
publishDate: "10 Jun 2020"

draft: true
---

## Closure

Pengertian **Closure** di semua bahasa pemrograman sama, yaitu **fungsi tanpa nama** atau bisa juga disebut **anonymous function**.

Seperti pengertiaanya, format penulisannya sederhana, kita hanya tidak perlu menuliskan namanya.

```go
func(param1 tipeDataParam1) (return1 tipeDataReturn1) {

}
```

Semua metode/tipe fungsi yang kita bahas pada artikel sebelumnya, dapat kita terapkan pada _Closure_.

Sebentar...

Kalau fungsi kita tulis tanpa nama, Lantas bagaimana kita bisa memanggilnya? Gimana makenya? Ngga bisa buat apa-apa dong?

Eits, jangan salah.

Normalnya kita dapat menggunakan _closure_ sebagai fungsi yang hanya kita panggil sekali, namun kita tetap ingin mengumpulkan kode eksekusinya dalam 1 blok, agar lebih mudah difahami.

Tulisan saya susah difahami?

OK

```go
package main

import (
	. "fmt"
	"regexp"
)

func main() {
	siswa := []string{
		"Andi",
		"Agung",
		"Budi",
		"Candra",
	}

	filterNamaA := func(semuaNama ...string) (filtered []string) {
		for _, item := range semuaNama {
			if match, _ := regexp.MatchString(`(?i)^a`, item); match {
				filtered = append(filtered, item)
			}
		}

		return
	}

	namaA := filterNamaA(siswa...)

	Println(namaA)
	// [Andi Agung]
}
```

Fungsi di atas menyeleksi slice dan hanya mengembalikan nama-nama berawalan "A".

Kita membuat _Closure_, kemudian memasukkan nya ke dalam variabel.

Dengan begitu, kita dapat memanggilnya.

Trus, kenapa ngga bikin fungsi biasa aja sekalian?

Sederhana, karena kita hanya butuh di situ saja, belum dibutuhkan yang lain. kalau memang nanti dibutuhkan yang lain pun, kita tinngal panggil variabelnya.

Kalau belum dibutuhkan yang lain, kenapa ngga bikin kode biasa, ngga usah dimasukkan ke dalam fungsi. Sederhana, karna kita ingin lebih mudah dibaca, modular, karena bila kode manjadi semakin panjang, akan sulit melihat kode eksekusi fungsinya untuk apa.

Anyway, bebas temen temen akan menulisakannya sebagai fungsi biasa, atau sebagai closure dalam variabel, karena menurutku secara pribadi, pada case ini, hampir tidak ada bedanya.

BTW, contoh di atas hanya digunakan sekali saja kan. Bisa kita buat jadi lebih sederhana lho...

Berikut disebut **Immediately Invoked Function Expression (IIFE)**, di semua bahasa pemrograman sama namanya

```go
package main

import (
	. "fmt"
	"regexp"
)

func main() {
	siswa := []string{
		"Andi",
		"Agung",
		"Budi",
		"Candra",
	}

	namaA := func(semuaNama ...string) (filtered []string) {
		for _, item := range semuaNama {
			if match, _ := regexp.MatchString(`(?i)^a`, item); match {
				filtered = append(filtered, item)
			}
		}

		return
	}(siswa...)

	Println(namaA)
	// [Andi Agung]
}
```

Seperti namanya, kita membuat fungsi, dan langsung dieksekusi, cirinya sederhana, ada kurung parameter setelah fungsi dibuat

Sederhana kan?

Intinya _Closure_ adalah fungsi tanpa nama. Karena itu, bersifat independent, dan bisa gunakan untuk banyak hal.

- Bisa kita panggil biasa seperti halnya contoh pertama
- Bisa panggil sebagai eksekusi untuk mendapat nilai modifikasi contoh 2
- Bahkan dapat kita gunakan sebagai parameter, ataupun return dari fungsi lain

Berikut contoh untuk point ke-3

```go
package main

import (
	. "fmt"
	"regexp"
	"strings"
)

func main() {
	siswa := []string{
		"Andi",
		"Agung",
		"Budi",
		"Candra",
	}

	filterNamaA := func(filter func(string) bool, semuaNama ...string) ([]string, func() []string) {
		var filtered []string
		for _, item := range semuaNama {
			if filter(item) {
				filtered = append(filtered, item)
			}
		}

		return filtered, func() (filteredCapital []string) {
			for _, item := range filtered {
				filteredCapital = append(filteredCapital, strings.ToUpper((item)))
			}

			return
		}
	}

	namaA, getNamaUpperCase := filterNamaA(func(item string) (match bool) {
		match, _ = regexp.MatchString(`(?i)^a`, item)
		return
	}, siswa...)

	namaAUpperCase := getNamaUpperCase()

	Println(namaA, namaAUpperCase)
    // [Andi Agung] [ANDI AGUNG]
}
```

Kita juga dapat membuat tipe data fungsi menjadi lebih sederhana, dengan alias `type`

```go
package main

import (
	. "fmt"
	"regexp"
	"strings"
)

type filterType func(string) bool

type GetUpperCaseType func() []string

func main() {
	siswa := []string{
		"Andi",
		"Agung",
		"Budi",
		"Candra",
	}

	filterNamaA := func(filter filterType, semuaNama ...string) ([]string, GetUpperCaseType) {
		var filtered []string
		for _, item := range semuaNama {
			if filter(item) {
				filtered = append(filtered, item)
			}
		}

		return filtered, func() (filteredCapital []string) {
			for _, item := range filtered {
				filteredCapital = append(filteredCapital, strings.ToUpper((item)))
			}

			return
		}
	}

	namaA, getNamaUpperCase := filterNamaA(func(item string) (match bool) {
		match, _ = regexp.MatchString(`(?i)^a`, item)
		return
	}, siswa...)

	namaAUpperCase := getNamaUpperCase()

	Println(namaA, namaAUpperCase)
    // [Andi Agung] [ANDI AGUNG]
}
```

Contoh nya seperti di atas, bebas menggunakan Capital ataupun tidak.

Demikian artikel kali ini,
Semoga mudah dipahami,
Terima kasih.
