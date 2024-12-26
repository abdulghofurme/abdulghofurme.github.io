import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

/** Note: this function filters out draft posts based on the environment */
export async function getAllPosts() {
	return await getCollection("post", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
}

export function sortMDByDate(posts: Array<CollectionEntry<"post">>) {
	return posts.sort((a, b) => {
		const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
		const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
		return bDate - aDate;
	});
}

/** Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so. */
export function getAllTags(posts: Array<CollectionEntry<"post">>) {
	return posts.flatMap((post) => [...post.data.tags]);
}

/** Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so. */
export function getUniqueTags(posts: Array<CollectionEntry<"post">>) {
	return [...new Set(getAllTags(posts))];
}

/** Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so. */
export function getUniqueTagsWithCount(
	posts: Array<CollectionEntry<"post">>,
): Array<[string, number]> {
	return [
		...getAllTags(posts).reduce(
			(acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}

export type Comment = {
	user: {
		name: string;
		avatar: string;
		url?: string;
	};
	html: string;
	source: "dev.to" | "";
	created_at: string;
};

export type DevToComment = {
	type_of: string;
	id_code: string;
	created_at: string;
	body_html: string;
	user: {
		name: string;
		username: string;
		twitter_username: string;
		github_username: string;
		user_id: number;
		website_url: string;
		profile_image: string;
		profile_image_90: string;
	};
	children: [];
};

export function parseCommentDevTo(data: DevToComment): Comment {
	return {
		source: "dev.to",
		html: data.body_html,
		created_at: data.created_at,
		user: {
			name: data.user.name,
			avatar: data.user.profile_image,
			url: `https://dev.to/${data.user.username}`,
		},
	};
}
