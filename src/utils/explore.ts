import { getCollection, type CollectionEntry } from "astro:content";

/** Note: this function filters out draft explores based on the environment */
export async function getAllExplores() {
	return await getCollection("explore", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
}

/** Note: This function doesn't filter draft posts & explores, pass it the result of getAllPosts  above to do so. */
export function getAllTechs(all: Array<CollectionEntry<"explore">>) {
	return all.flatMap((each) => [...each.data.techs]);
}

/** Note: This function doesn't filter draft posts & explores, pass it the result of getAllPosts  above to do so. */
export function getUniqueTechs(all: Array<CollectionEntry<"explore">>) {
	return [...new Set(getAllTechs(all))];
}

/** Note: This function doesn't filter draft posts & explores, pass it the result of getAllPosts  above to do so. */
export function getUniqueTechsWithCount(
	all: Array<CollectionEntry<"explore">>,
): Array<[string, number]> {
	return [
		...getAllTechs(all).reduce(
			(acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}

export function sortExploresByDate(all: Array<CollectionEntry<"explore">>) {
	return all.sort((a, b) => {
		const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
		const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
		return bDate - aDate;
	});
}