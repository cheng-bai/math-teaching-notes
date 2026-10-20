export function distances(x) {
  if (!Number.isFinite(x)) throw new TypeError('x must be finite');
  return { left: Math.abs(x + 1), right: Math.abs(x - 1), sum: Math.abs(x + 1) + Math.abs(x - 1) };
}
