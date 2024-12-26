---
title: "3D Object in Web with ThreeJS"
description: "Create my first 3D Object in Web using ThreeJS"
tags: ["javascript", "3D", "3JS"]
publishDate: "26 Dec 2024"
ogImage: "/og-image/3d-text.png"
coverImage: { src: "/img/3d-text.png", alt: "3D Text" }
devToArticleId: "2162101"
---

## [Portfolio URL](https://3js-jubilant-chainsaw.vercel.app)

## Background

Dari obrolan santai selepas kerja,
beberapa tahun yang lalu,
di sebuah ruko kantor kemang.

Kala itu [Riko Pernando](https://www.linkedin.com/in/riko-pernando-a79093164/) menunjukkan & mengajak _belajar bareng_ ThreeJS.

Singkatnya _kalau tidak salah_ banyak yang tertarik, mengiyakan,
dan khususnya aku sangat tertarik.

Tapi, ya namanya juga obrolan santai.
Di tengah kesibukan dan banyak hal lainnya yang kita jadikan _excuse_,
akhirnya _menguaplah_ itu obrolan menjadi wacana,
seperti halnya wacana-wacana lainnya.

Dan ya meskipun entah sudah berapa tahun terlewat.
Cus lah mulai saja sendiri.

> **Disclaimer Alert**
>
> Tulisan & semua materi di web
> merupakan catatan proses belajar, inspirasi, dan sebagainya random penulis.
>
> Mungkin valid, mungkin juga tidak.

## Perspective

Membuat 3D model di website,
_mungkin juga di platform lainnya_
seperti halnya menuangkan semesta kita ke dalam **canvas**.
Di ruang kosong canvas,
kita buat **object** yang kita inginkan.
Kita atur posisinya, kita atur **cahayanya**.

Selanjutnya juga seperti halnya membuat film,
dari canvas yang sudah jadi itu.
Kita potret dari perspective **camera** kita,
kita gerakkan semesta kita,
kita potret lagi.
Dari potret ke potret selanjutnya,
dari **scene** ke scene selanjutnya,
dari frame ke frame selanjutnya.
Begitu seterusnya sampai kita dapatkan perspective semesta kita yang bergerak.

## The Code

### Setup

Kita akan menggunakan `vite`,
jadi kita buat project menggunakan `vite` & install ThreeJS.

```bash
npm create vite@latest test -- --template vanilla
npm install
npm install three
```

Selanjutnya hapus code yang tidak perlu seperti `counter.js`,
kosongkan `main.js` & `style.css`.

### Canvas

Siapkan canvas di standard file html:5 & link `style.css` ke dalamnya.

```html
<!-- index.html -->
...
<head>
	...
	<link rel="stylesheet" href="style.css" />
</head>
<body>
	<canvas class="webgl"></canvas>
	<script type="module" src="/src/main.js"></script>
</body>
...
```

Import ThreeJS & siapkan DOM canvas.

```js
// main.js
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");
```

Tambah sedikit css style, untuk menghilangkan

- space kosong
- cursor bar overflow
- outline canvas

```css
/* style.css */
* {
	margin: 0;
	padding: 0;
}

html,
body {
	overflow: hidden;
}

.webgl {
	position: fixed;
	top: 0;
	left: 0;
	outline: none;
}
```

### Scene & Camera

```js
// main.js
...
// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

// Scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
)
```

> ...
>
> Documenting
>
> IN PROGRESS
>
> ...
