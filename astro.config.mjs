import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://aws.dlw52mqavcsxr.amplifyapp.com',
	integrations: [mdx(), sitemap()],
	base: "/"
});
