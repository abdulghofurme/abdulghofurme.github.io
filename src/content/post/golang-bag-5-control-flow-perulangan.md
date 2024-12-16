---
title: "Golang bagian-5 Control-Flow - Perulangan"
description: "Golang iteration - mudahnya menggunakan perulangan pada golang"
tags: ["golang", "belajarapa"]
publishDate: "29 May 2020"
ogImage: ""
---

## `for`

`for` digunakan untuk memproses perulanga/iteration. Go hanya memiliki `for` sebagai perulangan, namun memiliki fungsi yang mancakup kebanyakan perulangan pada bahasa pemrograman lain.

Penggunaanya sama pada bahasa yang lain, hanya saja kita tidak perlu menuliskan `()`

```go
// penggunaan for loop pada umumnya
for i := 0; i < 10; i++ {
    fmt.Println(i)
}
```

Penggunaan `for` seperti halnya `while do`

```go
usia := 24

for usia < 30 {
    fmt.Println(usia)
    fmt.Println("masih di bawah 30")
    usia++
}
```

Penggunaan `for` seperti halnya `do while`

```go
usia := 30

for {
    fmt.Println(usia)
    usia++

    if usia == 35 {
        break
    }
}
```

Perlu diketahui bahwasanya penggunaan `for` tanpa kondisi sama seperti `for true`, yang artinya **infinite loop / perulangan tak terhingga**.
Nah kita dapat menghentikan perulangan dengan `break`.

Setelah kita dapat menghentikan perulangan, kita juga dapat skip perulangan / lompat pada perulangan selanjutnya.

```go
usia := 35

for usia < 45 {
    usia++

    if usia % 2 == 1 {
        fmt.Println("skip ganjil")
        continue
    }

    fmt.Println(usia)
}
```

Selanjutnya kita juga dapat membuat **Nested For Loop** / Perulangan Bersarang

```go
for i := 0; i < 5; i++ {
    for j := i; j < 5; j++ {
        fmt.Print(j, " ")
    }
    fmt.Println()
}
```

akan menghasilkan

```go

0 1 2 3 4
1 2 3 4
2 3 4
3 4
4
```

Telah dijelaskan sebelumnya perulangan bersarang. Lantas bagaimana car kita menghentikan perulangan yang kita inginkan, sebagai contoh perulangan terluar.
kita dapat memanfaatkan **label** dan `break`

```go
outerLoop:
for i := 0; i < 5; i++ {
	for j := 0; j < 5; j++ {
		if i == 3 {
			break outerLoop
		}
		fmt.Print("matriks [", i, "][", j, "]", "\n")
	}
}
```
