---
title: "Transform zod error into readable error response [ENG]"
description: "Transform zod validation error into FE readable key message object in NestJS"
tags: ["typescript", "validation", "be", "nestjs"]
publishDate: "28 Dec 2024"
ogImage: "/og-image/nestjs.jpeg"
draft: true
# devToArticleId: ""
# devToArticleSlug: ""
---

Transform zod validation error into FE readable key message object in NestJS

> Bahasa Indonesia Version
>
> https://abdulghofurme.github.io/posts/transform-zod-error-into-readable-error-response

## Perspective

As a Frontend Engineer,
I have occasionally encountered validation errors that are _less easy_ to process.

Well, I’m not an expert,
but in my opinion, it would be better if the validation errors received were easier to handle.

## Purpose

To transform Zod validation errors like this:

```json
{
	"issues": [
		{
			"code": "too_small",
			"minimum": 3,
			"type": "string",
			"inclusive": true,
			"exact": false,
			"message": "The category name must be at least 3 characters long",
			"path": ["name"]
		}
	],
	"name": "ZodError"
}
```

into an error response in the key: message format like this:

```json
{
	"name": "The category name must be at least 3 characters long"
}
```

With the `key: message` format above,
I think it is easier to read and process.

Once again,
this doesn’t mean the first format is difficult. Of course, it can be processed, but it requires an additional step to extract error messages from each input field.

## The Code

We will use an **Error/Exception Filter**,
a standard approach for handling errors **centrally**.

You can generate the filter with this command:

```bash
nest g f error
# nest generate filter [filter_name]
```

Here’s the implementation:

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

Next, apply the filter to your application:

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

Handles the HttpException and forwards it, so that:

```ts
...
throw new HttpException(
  'Category not found',
  HttpStatus.NOT_FOUND,
);
...
```

will return this response:

```json
{
	"status": 404,
	"data": {
		"message": "Category not found"
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

Captures a ZodError, and the method:

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

transforms the ZodError into a key: message error object as per our goal.

This results in a response like this:

```json
{
	"status": 400,
	"data": {
		"message": "Validation error",
		"errors": {
			"name": "Field-specific error message"
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

Handles any other errors, returning an internal server error (500).

## Conclusion

I believe everyone has their own opinions and standards.

However, from this noob FE’s perspective,
validation errors are easier to handle if they are in the key: message object format,
allowing them to be directly extracted and displayed for each input field.

That said, if the team already has a different standard,
make sure to accept, ask questions, and discuss it well.
There might be better reasons behind it.

Feel free to share other considerations. 😉
