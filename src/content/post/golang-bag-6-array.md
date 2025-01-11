---
title: "Golang bagian-6 Array"
description: "Golang array - mengenal array dan implementasnya pada bahasa go"
tags: ["golang", "belajarapa"]
publishDate: "04 Jun 2020"
---

## Array

_Array_ adalah tipe data data pertama yang kita pelajari di luar tipe data primitif yang telah kita pelajari sebelumnya.

Pada dasarnya _Array_ pada _Go_ merupakan kumpulan data yang bertipe sama, dengan ketentuan alokasi (maksimal jumlah data) sewaktu deklarasi.

Bahasa sederhananya kita punya _toples_ yang hanya boleh diisi 1 jenis makanan, sebagai contoh permen, dengan maskimal jumlah nya kita tentukan, kita tulis di tutupnya.

Deklarasi array sebagai berikut, `keyword_var nama_variabel [alokasi]type_data`

```go
var siswa [5]string

// yang selanjutnya kita bisa memberi nilai
siswa[0] = "Abdul"
siswa[1] = "Afiq"
siswa[2] = "Ahmad"
siswa[3] = "Andi"
siswa[4] = "Aziz"
```

Inisialisasi dapat kita lakukan dengan menulis `nama_variabel[index] = value`. BTW, yap benar array dimulai dengan angkan **0** seperti pada bahasa lain.

Sebelumnya kita sudah menulis **5** sebagai _alokasi_ array tersebut. Maka kita tidak dapat menulis lebih dari itu. `siswa[5] = "Yuli"` akan menghasilkan error `invalid array index 5 (out of bounds for 5-element array)`.

Kita juga dapat membuat _array_ dengan menggunakan keyword `make`

```go
var siswi = make([]string, 4)

siswi[0] = "Hafshoh"
siswi[3] = "Rizki"
siswi[1] = "Qothrotun"
siswi[2] = "Amelia"
```

Kita juga dapat langsung memberi nilai saat deklarasi

```go
// vertical, dengan koma di data terakhir
var wali = [5]string{
    "Bapak Abdul",
    "Ibu Afiq",
    "Kakak Ahmad",
    "Nenek Andi",
    "Kakek Aziz",
}

// horizontal, tanpa koma di data terakhir
usia := [5]int8{24, 21, 24, 23, 22}
```

BTW kita juga bisa tahu panjang array dengan `len(nama_variabel)` seperti `len(wali)` akan menghasilkan `5`.

Oh iya, untuk deklarasi sekaligus inisialisasi, kita bisa mengganti `alokasi` dengan `...` seperti

```go
var wali = [...]string{
    "Bapak Abdul",
    "Ibu Afiq",
    "Kakak Ahmad",
    "Nenek Andi",
    "Kakek Aziz",
}


usia := [...]int8{24, 21, 24, 23, 22}
```

dengan begitu, varibel akan dengan sendirinya mengalokasikan jumlah datanya, tapi perlu diingat kita tetap tidak bisa menambah jumlahnya.

Di atas merupakan contoh _array of string_ dan _array of int_ / array dari data primitif. Namun kita juga dapat membuat _array of array_ atau bisa kita sebut **Array Multidimensi**

```go
var kelas7 = [2][3]string{
    [3]string{
        "Abdul",
        "Andi",
        "Cipto",
    },
    [3]string{
        "Ahmad",
        "Agung",
        "Cokro",
    },
}
```

Bahasa sederhananya "kelas 7 terdiri dari 2 kelas, masing masing kelas punya 3 murid".

Kita juga dapat menulis seperti

```go
var kelas8 = [2][3]string{
    {
        "Aan",
        "Aang",
        "Ahmad",
    },
    {
        "Hanif",
        "Oki",
        "Popon",
    },
}
```

Kita tidak perlu menulis ulang tipe struktur data yang di dalam.
Hendak menulis secara _horizontal/vertical_ terserah temen-temen semua.

Diatas kita belajar memberi nilai, selanjutnya bagaimana dengan mengubah nila, caranya sama persis dengan memberi nilai

```go
kelas8[1][0] = "Oki"

siswi[2] = "Indo"
```

Okay, kita bisa buat dan mengisi toples spesial, maksudnya array.
Lantas bagaimana menggunakannya? Buat apa sih?

### for pada array

```go
for no_absen := 0; no_absen < len(siswa); no_absen++ {
    fmt.Println("no absen", no_absen, "dengan nama", siswa[no_absen], "hadir?")
}
```

Kode di atas _analoginya_ seperti ini,
kita panggil berdasarkan no absen ya, dimulai dari 0 (`no_absen := 0`),
selama belum semuanya (`no_absen < len(siswa)`),
kita akan panggil terus berurutan (`no_absen++`),

Kita juga bisa membuat nomor absen dari 1.
Namun kita juga perlu mengubah logic nya.

```go
for no_absen := 1; no_absen <= len(siswa); no_absen++ {
    fmt.Println("no absen", no_absen, "dengan nama", siswa[no_absen], "hadir?")
}
```

Pada penulisan umumnya `no_absen` ditulis dengan `i`/`idx`/`index`

### for - range

Kita juga dapat menulis seperti ini

```go
for i, nama_siswa := range siswa {
    fmt.Println("no absen", i, "dengan nama", nama_siswa, "hadir?")
}
```

_analoginya_
Dengan nomor absen sekian (`for i`),
siswa ini (`nama_siswa`)
dari (`:=`)
semua siswa (`range siswa`)

Dan kalau kita tidak perlu nomor absennya, dan hanya butuh namanya,
kita bisa menulis

```go
for _, nama_siswa := range siswa {
    fmt.Println(nama_siswa, "hadir?")
}
```

Perlu diingat kembali bahwa di _Go_ tidak boleh ada variabel yang percuma/tidak dipakai, maka bila kita tidak menggunakannya tapi harus ada maka kita dapat menggunakan `_`

Demikian artikel kali ini,
Terima kasih.
