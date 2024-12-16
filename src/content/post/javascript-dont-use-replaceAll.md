---
title: "JavaScript: Don't use replaceAll"
description: "[English] Javascript - watch out... stop using replaceAll"
tags: ["javascript", "sharingapa"]
publishDate: "25 Jan 2022"
ogImage: ""
---

Instead of using `replaceAll`, it is better to use `replace`.
But why? Doesn't `replace` just replace the first character/sentence it finds?

The context of our discussion this time is replace & replaceAll which is a built-in function/method for String in JavaScript.

First, let's see how to use it

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

Above code will have output message like

| (index)            | Value                                             |
| ------------------ | ------------------------------------------------- |
| kalimat            | 'Kita akan membuka toko. Kita akan menjual kebab' |
| kalimatReplacedAll | 'Saya akan membuka toko. Saya akan menjual kebab' |
| kalimatReplaced    | 'Saya akan membuka toko. Kita akan menjual kebab' |

- `replace` & `replaceAll` don't change the value, it returns the changed value.

  Therefore we have to accommodate the changes into a new variable.

- `replaceAll` changes all findings, whereas `replace` changes only the first finding.

## Problem

Then why?
The problem is in compatibility

<!-- ![Compatibility](/assets/img/caniuse.com__search=replace%20string.png, 'compatibility') -->
<!-- <small>[source](https://caniuse.com/?search=replace%20string)</small> -->
<!-- [Details can be found here](https://caniuse.com/?search=replace%20string) -->

The problem that may occur is **Runtime Error** on some older devices/browsers.

Especially for friends who develop webview apps, this needs to be a concern.

## Solution

Use `replace`.
If you want to replace all findings, use _Regular Expression_ with `replace`, as follows

```js
const kalimatReplacedNew = kalimat.replace(/Kita/g, "Saya");
console.log(kalimatReplacedNew); // 'Saya akan membuka toko. Saya akan menjual kebab'
```

Okay thanks.

## Source

- [Compatibility](https://caniuse.com/?search=replace%20string)
- [replaceAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)
- [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [Regular Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
