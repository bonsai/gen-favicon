import { eggPath } from './egg.js';

export function renderSVG(options = {}) {
  const width = options.width ?? 64;
  const height = options.height ?? 64;
  const path = eggPath(options);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><path d="${path}" fill="${options.fill ?? '#f5f5f0'}" stroke="${options.stroke ?? '#222'}" stroke-width="${options.strokeWidth ?? 2}"/></svg>`;
}
