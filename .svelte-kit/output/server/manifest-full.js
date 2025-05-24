export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CkvUPrO3.js",app:"_app/immutable/entry/app.DB4TDhhd.js",imports:["_app/immutable/entry/start.CkvUPrO3.js","_app/immutable/chunks/BxzUrLh1.js","_app/immutable/chunks/DNLAU315.js","_app/immutable/chunks/DIxEl2em.js","_app/immutable/entry/app.DB4TDhhd.js","_app/immutable/chunks/DNLAU315.js","_app/immutable/chunks/Cl4bfm81.js","_app/immutable/chunks/dLXxvVxM.js","_app/immutable/chunks/DIxEl2em.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
