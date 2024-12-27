import { z, defineCollection } from "astro:content";

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array;
	const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(lowercaseItems);
	return Array.from(distinctItems);
}

const post = defineCollection({
	type: "content",
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string().max(160),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			coverImage: z
				.object({
					src: z.string(),
					alt: z.string(),
				})
				.optional(),
			draft: z.boolean().default(false),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			ogImage: z.string().optional(),
			devToArticleId: z.string().optional(),
			devToArticleSlug: z.string().optional(),
		}),
});

const portfolio = defineCollection({
	type: "content",
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string().max(160),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			coverImage: z.object({
				src: z.string(),
				alt: z.string(),
			}),
			draft: z.boolean().default(false),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			ogImage: z.string(),
			devToArticleId: z.string().optional(),
			devToArticleSlug: z.string().optional(),
		}),
});

export const collections = { post, portfolio };
