---
title: "Transform zod error into readable error response"
description: "Transform zod validation error into FE readable key message object in NestJS"
tags: ["typescript", "validation", "be", "nestjs"]
publishDate: "27 Dec 2024"
ogImage: "/og-image/nestjs.jpeg"
# devToArticleId: ""
# devToArticleSlug: ""
---

## Perspective

Sebagai Frontend Engineer,
beberapa kali menjumpai error validation yang diterima _kurang_ mudah diolah.

Well, yah memang aku bukan expert sih,
tapi menurutku setidaknya lebih baik apabila validation error yang diterima mudah untuk diolah.

## Purpose

Mengubah zod validation error seperti berikut

```json
{
	"issues": [
		{
			"code": "too_small",
			"minimum": 3,
			"type": "string",
			"inclusive": true,
			"exact": false,
			"message": "Panjang nama kategori minimal 3 karakter",
			"path": ["name"]
		}
	],
	"name": "ZodError"
}
```

menjadi error response dengan format `key: message` seperti berikut

```json
{
	"name": "Panjang nama kategori minimal 3 karakter"
}
```

Dengan format `key: message` seperti di atas,
setidaknya menurutku lebih mudah dibaca & diolah.

Sekali lagi,
bukan berarti yang pertama susah.
Tentu semua bisa diolah,
hanya saja diperlukan satu lagi proses untuk mengambil pesan error dari masing-masing input yang ada.

## The Code

Kita akan menggunakan **Error/Exception Filter**,
yang merupakan standard yang digunakan untuk menangai error yang terjadi, secara **terpusat**.

Kita bisa generate filter dengan command

```bash
nest g f error
# nest generate filter [filter_name]
```

```ts
// ./error/error.filter.ts

import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Response } from "express";
import { TWebResponse } from "src/model/web.model";
import { ZodError, ZodIssue } from "zod";

@Catch()
export class ErrorFilter<T> implements ExceptionFilter {
	zodErrorToKeyedObject(error: ZodError): Record<string, string> {
		return error.errors.reduce(
			(acc, issue) => {
				const key = issue.path.join(".");
				acc[key] = issue.message;
				return acc;
			},
			{} as Record<string, string>,
		);
	}

	catch(exception: any, host: ArgumentsHost) {
		const response: Response = host.switchToHttp().getResponse();
		let result: {
			status: HttpStatus;
			json: TWebResponse;
		};

		if (exception instanceof HttpException) {
			result = {
				status: exception.getStatus(),
				json: {
					message: exception?.message,
				},
			};
		} else if (exception instanceof ZodError) {
			result = {
				status: HttpStatus.BAD_REQUEST,
				json: {
					message: "Validation error",
					errors: this.zodErrorToKeyedObject(exception),
				},
			};
		} else {
			result = {
				status: HttpStatus.INTERNAL_SERVER_ERROR,
				json: {
					message: exception?.message,
				},
			};
		}

		response.status(result.status).json(result.json);
	}
}
```

Selanjutnya implementasikan filter tersebut dalam application

```ts
// app/global module
...
import { APP_FILTER } from '@nestjs/core';
import { ErrorFilter } from './error/error.filter';
...
@Module({
...
  providers: [
	...
    {
      provide: APP_FILTER,
      useClass: ErrorFilter,
    },
  ],
  ...
})
```

## Explanation

### HTTPException

```ts
...
if (exception instanceof HttpException) {
	result = {
		status: exception.getStatus(),
		json: {
			message: exception?.message,
		},
	};
}
...
```

Menangkap error _HttpException_ error dan meneruskannya, sehingga

```ts
...
throw new HttpException(
  'Kategori tidak ditemukan',
  HttpStatus.NOT_FOUND,
);
...

```

akan mengembalikan response

```json
{
	"status": 404,
	"data": {
		"message": "Kategori tidak ditemukan"
	}
}
```

### ZodError

```ts
...
else if (exception instanceof ZodError) {
    result = {
    	status: HttpStatus.BAD_REQUEST,
        json: {
          	message: 'Validation error',
          	errors: this.zodErrorToKeyedObject(exception),
        },
    };
}
...
```

Akan menangkap ZodError, dan

```ts
...
zodErrorToKeyedObject(error: ZodError): Record<string, string> {
    return error.errors.reduce(
      	(acc, issue) => {
        	const key = issue.path.join('.');
        	acc[key] = issue.message;
        	return acc;
      	},
      	{} as Record<string, string>,
    );
}
...
```

akan mengubah `ZodError` menjadi `key: message` object error seperti tujuan kita di atas.

Sehingga response yang diterima seperti berikut

```json
{
	"status": 404,
	"data": {
		"message": "Validation error",
		"errors": {
			"name": "error message field specific"
		}
	}
}
```

### Else

```ts
...
else {
    result = {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        json: {
          	message: exception?.message,
        },
    };
}
...
```

Well, ya itu akan mengambalikan error message internal server error `500`.

## Conclusion

Aku kira semua punya pendapat & standard masing-masing.

Namun dari sudut pandang FE noob ini,
error validation akan lebih mudah diolah apabila berbentuk object `key: message`.
Sehingga langsung bisa diambil & ditampilkan di masing-masing inputnya.

Terlepas dari itu, apabila team sudah punya standard yang berbeda.
Pastikan menerima, bertanya & diskusikan dengan baik.
Barangkali ada alasan lebih bagus dari hal tersebut.

Bolehlah dibagi pertimbangan-pertimbangan lain tersebut, ;)
