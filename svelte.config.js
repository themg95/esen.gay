import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/meow' : ''
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				console.warn(`Failed to prerender ${path} (referrer: ${referrer}): ${message}`);
				if (path === '/') {
					// Suppress the error for root route or take custom action
					return;
				}
				throw new Error(message);
			},
			entries: ['/']
		}
	}
};

export default config;
