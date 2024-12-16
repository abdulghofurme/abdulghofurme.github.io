---
title: "Golang bagian-1 Variable"
description: "Golang variable - mengenal cara deklarasi variable pada bahasa go"
tags: ["golang", "belajarapa"]
publishDate: "28 May 2020"
ogImage: ""
---

## Variabel

Go mengadopsi 2 jenis penulisan variabel, yaitu yang dituliskan tipe datanya, dan yang tidak. Kedua cara tersebut valid dan tujuannya sama, pembedanya hanya cara penulisannya saja.

### Variabel dengan Tipe Data (Manifest Typing)

Rumus dari penulisan ini adalah diawali dengan keyword `var` atau `const` dan tipe data setelah nama variabel seperti berikut:

```go
var firstName string = "Abdul"

var satu, dua, tiga string

var empat, lima, enam string = "papat", "lima", "enem"
```

dengan cara merubah

```go
firstName = "Dul"

satu, dua = "siji", "loro"
tiga = "telu"

empat = "four"
lima, enam = "five", "six"
```

deklarasi **multi variabel** pada _manifest typing_ hanya dapat digunakan pada tipe data sejenis.

### Variabel tanpa Tipe Data (Inference Typing)

Pada penulisan seperti ini tipe data variabel ditentukan oleh nilainya, tanpa perlu menuliskan _tipe data_. Bisa menggunakan keyword `var` ataupun tidak.

```go
hoby := "Tidur" // tanpa menggunakan keyword var
var usia = 24

sebelas, duabelas, tigabelas := "sewelas", 12, "teluwelas"
```

dengan cara perubahan yang sama

```go
hoby = "Baca"
usia = 25

sebelas, duabelas = "eleven", 13
```

Namun perlu diingat, meski penulisan tanpa tipe data, variabel **tetap bersifat static, dan tidak dinamic**

### NB: Variabel Underscore `_` (Reserved Variable)

Pada Go, tidak boleh ada variabel yang nganggur. Bila terjadi, maka akan muncul error dan program tidak akan berjalan.

Nah untuk itu `_` bisa digunakan untuk menampung semua nilai yang tidak dipakai. Bersifat **predefined**, yang berarti kita tidak perlu mendefinisakan/mendeklarasikan, langsung saja _inisialisasi_.

Perlu diingat variabel ini tidak dapat dikeluarkan.
