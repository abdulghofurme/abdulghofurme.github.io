---
title: "zod vs class-validator & class-transformer"
description: "Perbandingan zod dengan class-validator & class-transformer di NestJS"
tags: ["typescript", "validation", "be", "nestjs"]
publishDate: "17 Dec 2024"
ogImage: "/og-image/nestjs.jpeg"
devToArticleId: "2162101"
devToArticleSlug: "zod-vs-class-validator-class-transformer-3oam"
---

Sempat bingung, atau setidaknya penasaran antara `zod` atau `class-validator` & `class-transformer`
sebagai validation library di NestJS.

## Main Point

Langsung aja lah.

### 1. Alasan pilih `class-validator` & `class-transformer`

- Merupakan _duo_ packages yang umum & digunakan secara luas di NestJS
- Metode penulisannya _NestJS banget_ karena merupakan _decorator-based validation_
- clean & seamless integration dengan penggunaannya bersama `class-transformer` & `ValidationPipe`

### 2. Alasan pilih `zod`

- Framework agnostic
- _Typescript banget_
- Buat yang lebih prefer _functional_ & _schema-based_ approach
- Performance & lightweight validation adalah hal yang critical

## Detail

`class-validator` & `class-transformer` memang 2 packages yang paling umum digunakan sebagai validation di NestJS,
ya selain karena metode penulisannya yang sama dengan NestJS mengggunakan _decorator-based_,
juga karena clean & seamless karena bisa digunakan bersama _ValidationPipe_ sebgai _DTO_.

Jadi data/payload yang masuk deterima controller sudah tervalidasi & diubah/transformed sesuai definisinya.
Sedangkan `zod` masih perlu melakukan validasi secara manual data/payload yang diterima,
ya mungkin hanya 1 atau maksimal 3 baris lah,
tapi tentu semakin banyak banyak fungsi validasi yang dibutuhkan semakin banyak pula proses manual ini diperlukan.

## Detail prosedur

Berikut detail prosedur(mungkin bersifat _subjective_) untuk bisa dibandingkan.

### `class-validator` & `class-transformer`

#### 1. Installation

```bash
npm install class-validator class-transformer
```

#### 2. Enable Global Validation

```ts
// main.ts
....
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
....
  // Enable validation globally
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // Automatically transform payloads to DTO instances
    whitelist: true, // Strip unknown properties
    forbidNonWhitelisted: true, // Throw error for unknown properties
  }));
....
}
....
```

#### 3. Define DTO(Data Transfer Object)

```ts
import { IsNotEmpty, IsString, IsInt, Min } from "class-validator";
import { Type, Transform } from "class-transformer";

export class CreateUserDto {
	@Transform(({ value }) => value.trim()) // Trim whitespaces
	@IsNotEmpty({ message: "Nama tidak boleh kosong" })
	@IsString({ message: "Nama harus berupa string" })
	@Min(3, { message: "Minimal panjang nama 3 karakter" })
	name: string;

	@Type(() => Number) // Transform input ke tipe Number
	@IsNotEmpty({ message: "Nama tidak boleh kosong" })
	@IsInt({ message: "Umur harus berupa bilangan bulat" })
	@Min(17, { message: "Minimal umur terdaftar 17 tahun" })
	age: number;
}
```

Cukup panjang ya, tapi begitulah _decorator-based_.

#### 4. Penggunaan validasi

```ts
import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";

@Controller("users")
export class UsersController {
	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		// Pada titik ini data/payload createUserdDto
		// sudah tervalidasi & diubah sesuai definisinya
		// developer bisa langsung eksekusi service
		// atau logic yang lain
	}
}
```

### `zod`

#### 1. Installation

```bash
npm install zod
```

#### 2. Create Validation Schema

```ts
// user.validation.ts
import { z, ZodType } from "zod";

export class UserValidation {
	static readonly CREATE: ZodType = z.object({
		name: z
			.string({ message: "Nama harus berupa string" })
			.nonempty({ message: "Nama tidak boleh kosong" })
			.min(3, "Minimal panjang nama 13 karakter"),
		age: z
			.number({ message: "Umur harus berupa angka" })
			.int({ message: "Umur harus berupa bilangan bulat" })
			.min(17, "Minimal umur terdaftar 17 tahub"),
	});
}

export type TCreateUserPayload = z.infer<typeof UserValidation.CREATE>;
```

\*Personal: aku lebih suka baca schema yang ini dibanding di atas

#### 3. Penggunaan validasi

```ts
import { Body, Controller, Post } from "@nestjs/common";
import { UserValidation, TCreateUserPayload } from "./user.validation.ts";

@Controller("users")
export class UsersController {
	@Post()
	create(@Body() createUserPayload: TCreateUserPayload) {
		const payload = UserValidation.CREATE.parse(createUserPayload);
		// Pada titik ini data/payload payload
		// sudah tervalidasi & diubah sesuai definisinya
		// developer bisa langsung eksekusi service
		// atau logic yang lain
	}
}
```

## Conclusion

Secara pribadi aku lebih prefer cara penggunaan `zod`.
Namun yang perlu digarisbawahi adalah **pilihlah sesuai kebutuhan & standard tim**.
