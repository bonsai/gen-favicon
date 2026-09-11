/**
 * Parametric egg geometry.
 * Rendering is intentionally kept separate so this model can later be reused.
 */
export function eggPath({ width = 64, height = 64, asymmetry = 0.035, tilt = 0 } = {}) {
  const cx = width / 2;
  const top = height * 0.08;
  const bottom = height * 0.94;
  const half = width * 0.43;
  const lean = width * asymmetry;
  const rad = (tilt * Math.PI) / 180;

  const point = (x, y) => {
    const dx = x - cx;
    const dy = y - height / 2;
    return [cx + dx * Math.cos(rad) - dy * Math.sin(rad), height / 2 + dx * Math.sin(rad) + dy * Math.cos(rad)];
  };

  const p = (x, y) => point(x, y).map(v => v.toFixed(2));
  const [sx, sy] = p(cx, top);
  const [c1x, c1y] = p(cx - half * 0.58 - lean, height * 0.08);
  const [c2x, c2y] = p(cx - half, height * 0.28);
  const [ex, ey] = p(cx - half * 0.82, height * 0.58);
  const [c3x, c3y] = p(cx - half * 0.92, height * 0.78);
  const [c4x, c4y] = p(cx - half * 0.58, bottom);
  const [bx, by] = p(cx, bottom);
  const [c5x, c5y] = p(cx + half * 0.58, bottom);
  const [c6x, c6y] = p(cx + half * 0.92, height * 0.78);
  const [rx, ry] = p(cx + half * 0.82, height * 0.58);
  const [c7x, c7y] = p(cx + half, height * 0.28);
  const [c8x, c8y] = p(cx + half * 0.58 + lean, height * 0.08);

  return `M ${sx} ${sy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${ex} ${ey} C ${c3x} ${c3y}, ${c4x} ${c4y}, ${bx} ${by} C ${c5x} ${c5y}, ${c6x} ${c6y}, ${rx} ${ry} C ${c7x} ${c7y}, ${c8x} ${c8y}, ${sx} ${sy} Z`;
}
