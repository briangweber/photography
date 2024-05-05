import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import awsAmplify from 'astro-aws-amplify';

// https://astro.build/config
export default defineConfig({
	// site: 'https://blog.briangweber.com',
	integrations: [mdx(), sitemap()],
	base: "/",
	output: "server", 
  adapter: awsAmplify(), 
});
