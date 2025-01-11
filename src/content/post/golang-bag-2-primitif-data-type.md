---
title: "Golang bagian-2 Primitif Data Type"
description: "Golang data type - mengenal string, boolean dan numerik pada bahasa go"
tags: ["golang", "belajarapa"]
publishDate: "28 May 2020"
---

## Tipe Data Primitif

Go memiliki beberapa tipe data primitif, _string_, _boolean_ dan _numerik_

### String

Ditandai dengan `""` (tanda petik dua) atau _backtick_ ( ` ).
Perbedaanya pada _backtick_, semua yang ada di dalamnya bersifat **tidak escape**

```go
var anak string = "satu"
tempatLahir := `Lahir
di \n
"Pati".`

fmt.Printf("%s \n", anak)
fmt.Println(tempatLahir)
```

### Boolean

Hanya mempunya 2 nilai, `true` atau `false`.

```go
var isOpen bool = true

fmt.Println(isOpen)
fmt.Printf("open? %t \n", isOpen)
```

### Numerik

Memilik 2 jenis

- Non-Desimal
- Desimal

#### Numerik Non-Desimal

Secara umum memiliki 2 tipe:

- `uint` , bilangan positif
- `int` , negatif dan positif

dengan default `int` bila tidak menuliskannya

##### `uint`

| tipe data | cakupan                   |
| --------- | ------------------------- |
| `uint8`   | 0 -> 255                  |
| `uint16`  | 0 -> 65535                |
| `uint32`  | 0 -> 4294967295           |
| `uint64`  | 0 -> 18446744073709551615 |
| `uint`    | `uint32` atau `uint64`    |
| `byte`    | `uint8`                   |

##### `int`

| tipe data | cakupan                                     |
| --------- | ------------------------------------------- |
| `int8`    | -128 -> 127                                 |
| `int16`   | -32768 -> 32767                             |
| `int32`   | -2147483648 -> 2147483647                   |
| `int64`   | -9223372036854775808 -> 9223372036854775807 |
| `int`     | `int32` atau `int64`                        |
| `rune`    | `int32`                                     |

**Pemilihan tipe data berpengaruh pada alokasi memori**

```go
var varSatu uint8 = 22
var varDua int = -12
var varTiga = 22
var varEmpat = -12
varLima := 22
varEnam := -12

fmt.Printf("varSatu: %d, tipe: %T\n", varSatu, varSatu)
fmt.Printf("varDua: %d, tipe: %T\n", varDua, varDua)
fmt.Printf("varTiga: %d, tipe: %T\n", varTiga, varTiga)
fmt.Printf("varEmpat: %d, tipe: %T\n", varEmpat, varEmpat)
fmt.Printf("varLima: %d, tipe: %T\n", varLima, varLima)
fmt.Printf("varEnam: %d, tipe: %T\n", varEnam, varEnam)
```

#### Numerik Desimal

Memiliki 2 tipe

- `float32`
- `float54`

dengan default `float64` bila tidak menuliskannya

```go
var decimalSatu float32 = 3.14
var decimalDua = 3.14
decimalTiga := 3.14

fmt.Printf("decimalSatu: %f, tipe: %T\n", decimalSatu, decimalSatu)
fmt.Printf("decimalDua: %f, tipe: %T\n", decimalDua, decimalDua)
fmt.Printf("decimalTiga: %f, tipe: %T\n", decimalTiga, decimalTiga)

fmt.Printf("decimalTiga: %.3f, tipe: %T\n", decimalTiga, decimalTiga)
```

akan mengeluarkan 6 digit di belakang koma secara default, gunakan `.nf` dengan `n` sebagai jumlah digit yang diinginkan

### NB: zero value / default value

Semua tipe data di atas memiliki default value sebagai berikut
| tipe | default value |
| ---- | ------------- |
| `string` | `""` string kosong |
| `boolean` | `false` |
| non-desimal | `0` |
| desimal | `0.0` |
Yang dimaksud default value adalah ketika kita medeklarasi tanpa inisialisasi

```go
var name string
var age uint
var isOpen bool
```
