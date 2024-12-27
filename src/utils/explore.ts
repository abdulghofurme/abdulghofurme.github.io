import { getCollection } from "astro:content";

/** Note: this function filters out draft explores based on the environment */
export async function getAllExplores() {
	return await getCollection("explore", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
}
