import { getCollection } from "astro:content";

/** Note: this function filters out draft portfolios based on the environment */
export async function getAllPortfolios() {
	return await getCollection("portfolio", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
}
