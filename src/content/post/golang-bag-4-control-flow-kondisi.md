---
title: "Golang bagian-4 Control-Flow - Kondisi"
description: "Golang condition - mengontrol alur kerja program pada bahasa go"
tags: ["golang", "belajarapa"]
publishDate: "29 May 2020"
ogImage: ""
---

## Control Flow

Control Flow adalah cara bagaimana kita dapat mengendalika alur kerja program yang kita buat. Tentu dalam mengerjakan sebuah program kita akan dihadapkan dengan berbagai data dan kemungkinan, bagaimana kita akan menjalankan program dengan semestinya kita ingin dan harapkan dengan berbagai data dan kemungkinan itu, disinilah kegunaan control flow.

Hampir sama dengan bahasa pemrograman lain, Go memiliki control flow sebagai berikut

1. Seleksi Kondisi
   - `if`, `else if`, dan `else`
   - `switch` `case`
2. Perulangan
   - `for`

### `if`, `else if`, dan `else`

**Go tidak memiliki ternary operator**.

Sama seperti bahasa pemrograman yang lainnya, hanya saja di Go tidak memerlukan tanda kurung pada kondisi.

Seperti biasa, `else` merupakan pilihan terakhir bila memang semua kondisi sebelumnya tidak dapat terpenuhi, yang pasti akan dieksekusi.

Bila hanya ada satu kondisi, maka kita hanya butuh satu `if`, dan tidak perlu `else if`. `else if` digunakan untuk kondisi ke-2 dan seterusnya

```go
var usia = 24

if usia == 100 {
    fmt.Println("Alhamdulillah... semoga panjang umur")
} else if usia > 63 {
    fmt.Println("Perbanyaklah Ibadah")
} else if usia > 40 {
    fmt.Println("Jaga Kesehatan ya...")
} else if usia > 25 {
    fmt.Println("Cari Jodoh ya mas....")
} else if usia > 11 {
    fmt.Println("Belajar dulu yang bener")
} else {
    fmt.Println("Belajar, tapi jangan lupa main ya....")
}
```

`if` go memiliki keunikan variabel sementara, yang hanya dapat digunakan di scope kondisi `if`

```go
var usia = 24

if usiaDariAbad := usia / 100; usiaDariAbad > 50 {
    fmt.Println("Kamu berusia lebih dari setengah abad")
} else {
    fmt.Println("Kamu masih kurang dari setengah abad")
}
```

_BTW_, `if` tidak hanya bisa digunakan pada 1 variabel, namun juga bisa lebih, dengan memanfaatkan **relational operator** dan **logical operator**.

```go
usia := 24
beratBadan := 50

if usia > 20 && beratBadan < 50 {
    fmt.Println("Makan mas, makan...")
} else if usia < 20 && beratBadan >= 50 {
    fmt.Println("Lanjutkan..")
} else {
    fmt.Println("Okay...")
}
```

### `switch` `case`

Kondisi ini bersifat sama persis seperti dengan `if` `else if` dan `else`, dengan `case` pertama sebagai `if`, `case` ke-2, ke-3 _dst_ sebagai `else if`, dan `default` sebagai `else`. Bila satu kondisi terpenuhi maka eksekusi berhenti, berbeda dengan bahasa pemrograman lain yang harusnya menyematkan keyword `break` atau `return` untuk menyelesaikan eksekusi.

Hanya saja, `switch` `case` berfokus pada satu variabel, dan dapat digunakan pada beberapa `case` dengan menggunakan `,`. Boleh menggunakan `{}` atau tidak, baik digunakan untuk block yang lebih dari satu baris

```go
usia := 24

switch usia {
case 5:
    fmt.Println("anak TK")
case 6, 7, 8, 9, 10, 11:
    fmt.Println("anak SD ya")
case 12, 13, 14:
    fmt.Println("anak SMP ya")
case 15, 16, 17: {
    fmt.Println("anak SMU ya")
    fmt.Println("Belajar yang bener, jangan pacaran aja")
}
default:
    fmt.Println("berkarya mas bos")
}
```

contoh di atas adalah penggunaan `switch` `case` pada umumnya bahasa pemrograman. Namun di Go, `switch` `case` dapat digunakan seperti `if` `else` yang tidak hanya berfokus pada 1 variabel.

```go
switch {
case usia > 20 && beratBadan < 50:
    fmt.Println("Makan mas, makan...")
case usia < 20 && beratBadan >= 50 :
    fmt.Println("Lanjutkan..")
default:
    fmt.Println("Okay...")
}
```

Karena `switch` `case` di Go langsung mengehentikan eksekusi kondisi tanpa `break`, di Go juga memiliki `fallthrough` **untuk melanjutkan pada block kondisi setelahnya, tanpa peduli kondisinya, bukan melanjutkan eksekusi switch/kondisi**

```go
usia := 24

switch {
case usia > 10 && usia <= 15:
	fmt.Println("pra remaja")
case usia > 15 && usia <= 25:
	fmt.Println("remaja")
	fallthrough
case usia > 25 && usia <= 30:
	fmt.Println("pra dewasa")
case usia > 30:
	fmt.Println("dewasa")
default:
	fmt.Println("Oke dah")
}
```

Kita dapat menggunakan kondisi kondisi di atas di dalam satu sama lain/_nested_/bersarang.

```go
var point = 10
if point > 7 {
	switch point {
	case 10:
		fmt.Println("perfect!")
	default:
		fmt.Println("nice!")
	}
} else {
	if point == 5 {
		fmt.Println("not bad")
	} else if point == 3 {
		fmt.Println("keep trying")
	} else {
		fmt.Println("you can do it")
		if point == 0 {
			fmt.Println("try harder!")
		}
	}
}
```
