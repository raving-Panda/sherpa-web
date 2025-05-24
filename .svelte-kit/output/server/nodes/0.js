

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CpfrEhKe.js","_app/immutable/chunks/dLXxvVxM.js","_app/immutable/chunks/DNLAU315.js"];
export const stylesheets = [];
export const fonts = [];
