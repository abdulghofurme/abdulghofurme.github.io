---
title: "JavaScript: Jangan pakai replaceAll"
description: "Javasript - awas... berhenti menggunakan replaceAll"
tags: ["javascript", "sharingapa"]
publishDate: "25 Jan 2022"
ogImage: ""
---

Daripada menggunakan `replaceAll`, lebih baik menggunakan `replace`.
Tetapi kenapa? Bukankah `replace` hanya mengganti karakter/kalimat pertama yang ditemukan?

Konteks bahasan kita kali ini adalah replace & replaceAll yang merupakan built-in function/method untuk String di bahasa JavaScript.

Sebelumnya mari lihat penggunaanya

```js
const kalimat = "Kita akan membuka toko. Kita akan menjual kebab";

// replaceAll
const kalimatReplacedAll = kalimat.replaceAll("Kita", "Saya");

// replace
const kalimatReplaced = kalimat.replace("Kita", "Saya");

console.table({
	kalimat,
	kalimatReplacedAll,
	kalimatReplaced,
});
```

Kode di atas akan mengeluarkan pesan berikut

| (index)            | Value                                             |
| ------------------ | ------------------------------------------------- |
| kalimat            | 'Kita akan membuka toko. Kita akan menjual kebab' |
| kalimatReplacedAll | 'Saya akan membuka toko. Saya akan menjual kebab' |
| kalimatReplaced    | 'Saya akan membuka toko. Kita akan menjual kebab' |

- `replace` & `replaceAll` tidak mengubah nilai, melainkan mengembalikan perubahan nilai.

  Karenanya kita harus menampung perubahan ke dalam variable baru.

- `replaceAll` mengubah semua temuan, sedangkan `replace` hanya mengubah temuan pertama.

## Masalah

Lantas kenapa?
Masalahnya ada pada compatibilitas

<!-- ![Compatibility](/assets/img/caniuse.com__search=replace%20string.png, 'compatibility') -->
<!-- <small>[source](https://caniuse.com/?search=replace%20string)</small> -->
<!-- [Detail bisa dilihat di sini](https://caniuse.com/?search=replace%20string) -->

Adapun masalah yang mungkin terjadi adalah **Runtime Error** pada beberapa device/browser lama.

Khususunya bagi teman-teman yang develop webview app, ini perlu jadi perhatian.

## Solusi

Gunakan `replace`.
Bila ingin mengganti semua temuan, gunakan _Regular Expression_ dengan `replace`, seperti berikut

```js
const kalimatReplacedNew = kalimat.replace(/Kita/g, "Saya");
console.log(kalimatReplacedNew); // 'Saya akan membuka toko. Saya akan menjual kebab'
```

Okay terima kasih.

## Sumber

- [Compatibility](https://caniuse.com/?search=replace%20string)
- [replaceAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)
- [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [Regular Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
