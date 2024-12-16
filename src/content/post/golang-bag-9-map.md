---
title: "Golang bagian-9 Map"
description: "Golang map - penerapan object dengan batasan data type pada bahasa go"
tags: ["golang", "belajarapa"]
publishDate: "08 Jun 2020"
ogImage: ""
---

## Map

Di JavaScript Map seperti halnya Object.
Prinsipnya sama dengan array atau slice, dia adalah kumpulan data.

Hanya saja Map berbentuk _key-value_. Bila di array/slice memiliki kumpulan data dengan index berurutan dari 0, maka pada Map kita harus mendefinisikan sendiri index tersebut, yang kita sebut _key_ pada Map, atau di JavaScript kita sebut _property_. Tentu sepertihalnya index yang berurutan, key pun bersifat _unik_, artinya bila kita menambahkan nilai pada key yang sudah, ada, maka akan mengubah nilai yang sudah ada.

```go
// 1
var kelas1 map[string]int
kelas1 = map[string]int{}

kelas1["jumlahPria"] = 2
kelas1["jumlahWanita"] = 3

fmt.Println(kelas1) // map[jumlahPria:2 jumlahWanita:3]

// 2
var kelas2 = map[string]int{}
kelas2["L"] = 29

fmt.Println(kelas2) // map[L:29]

// 3
var kelas3 = make(map[string]int)
kelas3["L"] = 25

fmt.Println(kelas3) // map[L:25]

// 4
var kelas4 = map[string]int{"jumlahPria": 3, "jumlahWanita": 1}

fmt.Println(kelas4) // map[jumlahPria:3 jumlahWanita:1]

// 5
var kelas5 = map[string]int{
    "jumlahPria": 2,
    "jumlahWanita": 1,
}

fmt.Println(kelas5) // map[jumlahPria:2 jumlahWanita:1]
```

### 1

Pada contoh pertama, kita deklarasi bentuk map terlebih dahulu, lalu kita inisialisasi map tersebut pada baris selanjutnya, baru kita dapat menambah item ke dalamnya.
Cara ini harus beruruta, bila tidak akan terjadi error.

Oh iya, pada dasarnya sama seperti array kita deklarasi bentuknya terlebih dahulu

```go
var namaVariabel map[tipe_data_key]tipe_data_value
```

### 2

Selanjutnya contoh kedua, kita deklarasi bentuk map, dilanjutkan inisialisasi langsung pada baris tersebut dengan `{}`

### 3

Seperti pada contoh kedua, hanya saja kita menggunakan keyword `make`. Sama seperti penggunaanya di array.

### 4, 5

Pada contoh ini kita deklarasi, inisialisasi dan langsung menambahkan nilai ke dalamnya, baik dengan gaya vertikal maupun horizontal sama seperti array/slice. Tentu kita harus menambah `key:` pada Map, sebagai ganti index kalau di array.

Oh ya, di Object JavaScript, bila kita memasukkan key yang sama pada inisialisasi, maka yang bawah akan override yang di atas kan.
Pada Go hal ini akan menghasilkan error.

```go
var kelas6 = map[string]int{
    "jumlahPria": 2,
    "jumlahWanita": 1,
    "jumlahPria": 10,
}
```

Yap metode di atas akan menghasilkan error,
Kita dapat override dengan metode di bawah

```go
var kelas6 = map[string]int{
    "jumlahPria": 2,
    "jumlahWanita": 1,
}

kelas6["jumlahPria"] = 10

fmt.Println(kelas6)
// map[jumlahPria:10 jumlahWanita:1]
```

Dan di Map kita tidak mengenal kapasitas/alokasi. Jadi kita dapat menambahkan item sesuka kita,

```go
kelas6["jumlahWaliKelas"] = 1

fmt.Println(kelas6)
// map[jumlahPria:10 jumlahWaliKelas:1 jumlahWanita:1]
```

### Check & Hapus

Dari contoh-contoh di atas, kita dapat

- menambah nilai
- merubah nilai

Bila di JavaScript kita memiliki `remove` dan `hasOwnProperty` untuk menghapus dan memeriksa apakah sebuah key ada dalam map tersebut.

Di Go ada `delete` dan `1 index`.

Ya, `1 index` sama persis yang kita gunakan untuk akses.

```go
var jumlahPria = kelas6["jumlahPria"]
var jumlahWanita, isJumlahWanitaExist = kelas6["jumlahWanita"]
```

Yap, dengan mengakses variabel ke-2 dari akses map tersebut akan menghasilkan nilai boolean yang menyatakan ada atau tidak sih key tersebut.

Lantas, bagaimana bila kita tidak butuh nilai key tersebut?

Tentu kita dapat memanfaatkan `_` seperti berikut

```go
_, isJumlahWanitaExist := kelas6["jumlahWanita"]
```

Sementara penggunaan `delete` pun sangat sederhana

```go
// delete(asal, key_yang_mau_dihapus)
_, isJumlahWanitaExist := kelas6["jumlahWanita"]

fmt.Println(kelas6, isJumlahWanitaExist)
// map[jumlahPria:10 jumlahWaliKelas:1 jumlahWanita:1] true

delete(kelas6, "jumlahWanita")
_, isJumlahWanitaExist = kelas6["jumlahWanita"]

fmt.Println(kelas6, isJumlahWanitaExist)
// map[jumlahPria:10 jumlahWaliKelas:1] false
```

### Iterate Map

Kita pun dapat menggunakan `for` untuk map iteration, dengan manambahkan `range`, yag sudah kita bahas di array

```go
for key, val := range kelas6 {
    fmt.Println(key, val)
}

/*
jumlahWaliKelas 1
jumlahPria 10
*/
```

BTW, semua contoh di atas kita hanya mengkombinasikan tipe data primitif dengan map.
Bukan hanya tipe data primitif, kita pun dapat mengkombinasikan map dengan slice.

Contohnya,

```go
var sd = []map[string]int{
    {"L": 12, "P": 10},
    {"L": 8, "P": 23},
    {"L": 9, "P": 12},
    {"L": 5, "P": 1},
    {"L": 4, "P": 8},
    {"L": 17, "P": 3},
}

for _, kelas := range sd {
	fmt.Println(kelas["L"])
}

/*
12
8
9
5
4
17
*/

var kelas7 = map[string][]string{
    "A": {"Andi", "Eko"},
    "B": {"Budi", "Abdul"},
    "C": {"Ani", "Anu"},
}

for _, kelas := range kelas7 {
    fmt.Println(kelas[0])
}

/*
Andi
Budi
Ani
*/
```

Demikian artikel kali ini,
Terima kasih.
