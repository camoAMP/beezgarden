export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefix a local URL with NEXT_PUBLIC_BASE_PATH when deploying under a subpath
 * (e.g. GitHub Pages project sites).
 */
export function withBasePath(path: string): string {
  if (!BASE_PATH) return path;

  // Don't touch absolute URLs.
  if (/^https?:\/\//i.test(path)) return path;

  // Normalize to a leading slash then prefix.
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (normalized === "/") return BASE_PATH;
  if (normalized.startsWith(`${BASE_PATH}/`)) return normalized;

  return `${BASE_PATH}${normalized}`;
}

