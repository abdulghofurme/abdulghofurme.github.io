import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Abdul Ghofur",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "abdulghofurme",
	// Meta property used as the default description meta property
	description: "Abdul Ghofur - coder, runner & sleeper",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "id",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "id",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "id",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Include view-transitions: https://docs.astro.build/en/guides/view-transitions/
	includeViewTransitions: true,
	// webmentions: {
	// 	link: "https://webmention.io/astro-theme-cactus.netlify.app/webmention",
	// 	pingback: "https://webmention.io/astro-theme-cactus.netlify.app/xmlrpc",
	// },
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Home",
		path: "/",
	},
	// {
	// 	title: "About",
	// 	path: "/about/",
	// },
	{
		title: "Blog",
		path: "/posts/",
	},
	{
		title: "Explore",
		path: "/explore/",
	},
];
