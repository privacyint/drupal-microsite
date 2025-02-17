import { env } from '$env/dynamic/private';
import type { PageServerLoad } from '../$types';

import getExamples from '$lib/server/queries/getExamples';
import getPartners from '$lib/server/queries/getPartners';
import getSubdemands from '$lib/server/queries/getSubdemands';
import inMemoryCache from '$lib/server/inMemoryCache';

const { CACHE_CONTROL_TIME } = env;

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	setHeaders({
		'cache-control': `max-age=${CACHE_CONTROL_TIME || '900'}`
	});

	return {
		subDemands: inMemoryCache(getSubdemands, params.nodeId),
		examples: inMemoryCache(getExamples, params.nodeId),
		partners: inMemoryCache(getPartners, params.nodeId)
	};
};
