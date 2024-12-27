---
title: "zod vs class-validator & class-transformer [ENG]"
description: "Comparison of zod with class-validator & class-transformer in NestJS"
tags: ["typescript", "validation", "be", "nestjs"]
publishDate: "20 Dec 2024"
ogImage: "/og-image/nestjs.jpeg"
devToArticleId: "2162101"
devToArticleSlug: "zod-vs-class-validator-class-transformer-3oam"
---

Comparison of zod with class-validator & class-transformer in NestJS

I was confused, or at least curious between `zod` or `class-validator` & `class-transformer`
as a validation library in NestJS.

> Bahasa Indonesia Version
>
> https://abdulghofurme.github.io/posts/zod-vs-class-validator-n-class-transformer/

## Main Point

Just go straight to it.

### 1. Reason for choosing `class-validator` & `class-transformer`

- Is a _duo_ package that is common & widely used in NestJS
- The writing method is "very _NestJS_", because it is _decorator-based validation_
- clean & seamless integration with its use with `class-transformer` & `ValidationPipe`

### 2. Reason for choosing `zod`

- Framework agnostic
- _Very Typescript_
- For those who prefer _functional_ & _schema-based_ approach
- Performance & lightweight validation is critical

## Detail

`class-validator` & `class-transformer` are the 2 packages most commonly used as validation in NestJS,
yes, apart from the fact that the writing method is the same as NestJS using _decorator-based_,
also because it is clean & seamless because it can be used with _ValidationPipe_ as _DTO_.

So, the incoming data/payload received by the controller has been validated and changed/transformed according to its definition.
Meanwhile `zod` still needs to validate the data/payload it receives manually,
yes, maybe only 1 or a maximum of 3 lines,
but of course, the more validation functions are needed the more manual processes are required.

## Procedure details

Here is a detailed procedure (perhaps _subjective_) for comparison.

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

	@Type(() => Number) // Transform input into Number type
	@IsNotEmpty({ message: "Nama tidak boleh kosong" })
	@IsInt({ message: "Umur harus berupa bilangan bulat" })
	@Min(17, { message: "Minimal umur terdaftar 17 tahun" })
	age: number;
}
```

Quite long, yes, but it's _decorator-based_.

#### 4. Penggunaan validasi

```ts
import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";

@Controller("users")
export class UsersController {
	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		// At this point data/payload createUserdDto
		// has been validated & changed according to the definition
		// developers can directly execute the service
		// or other logic
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
// user.validaiton.ts
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

\*Personal: I prefer reading this schema compared to the one above

#### 3. Validation Implementations

```ts
import { Body, Controller, Post } from "@nestjs/common";
import { UserValidation, TCreateUserPayload } from "./user.validation.ts";

@Controller("users")
export class UsersController {
	@Post()
	create(@Body() createUserPayload: TCreateUserPayload) {
		const payload = UserValidation.CREATE.parse(createUserPayload);
		// At this point data/payload payload
		// has been validated & changed according to the definition
		// developers can directly execute the service
		// or other logic
	}
}
```

## Conclusion

Personally, I prefer the use of `zod`.
However, what needs to be underlined is **choose according to the team's needs & standards**.
