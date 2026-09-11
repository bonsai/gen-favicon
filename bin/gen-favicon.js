#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import { renderSVG } from '../src/render-svg.js';

const args = Object.fromEntries(process.argv.slice(2).reduce((a, v, i, all) => {
  if (v.startsWith('--')) a.push([v.slice(2), all[i + 1] && !all[i + 1].startsWith('--') ? all[i + 1] : true]);
  return a;
}, []));

const options = {
  width: Number(args.width ?? 64),
  height: Number(args.height ?? 64),
  asymmetry: Number(args.asymmetry ?? 0.035),
  tilt: Number(args.tilt ?? 0),
  fill: args.fill,
  stroke: args.stroke,
  strokeWidth: Number(args['stroke-width'] ?? 2),
};

const svg = renderSVG(options);
await mkdir('dist', { recursive: true });
await writeFile('dist/egg.svg', svg);
console.log('generated dist/egg.svg');
console.log('parametric egg:', JSON.stringify(options));
console.log('PNG/ICO export is intentionally a separate renderer step.');
