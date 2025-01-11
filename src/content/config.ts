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
					fit: z.enum(["contain", "cover"]).default("cover").optional(),
				})
				.optional(),
			draft: z.boolean().default(false),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			ogImage: z.string().optional(),
			devToArticleId: z.string().optional(),
			devToArticleSlug: z.string().optional(),
			relatedExplores: z.array(z.string()).default([]).optional(),
		}),
});

const explore = defineCollection({
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
			draft: z.boolean().default(false),
			url: z.string().url(),
			techs: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			ogImage: z.string(),
			coverImage: z.object({
				src: z.string(),
				alt: z.string(),
				fit: z.enum(["contain", "cover"]).default("cover").optional(),
			}),
			relatedArticles: z.array(z.string()).default([]).optional(),
		}),
});

export const collections = { post, explore };
