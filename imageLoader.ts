/**
 * Custom Next.js image loader.
 *
 * Problem: with basePath='/pl', next/image generates:
 *   /pl/_next/image?url=...
 * But Vercel's image optimization endpoint is always at the ROOT:
 *   /_next/image?url=...
 *
 * This loader explicitly skips the basePath prefix so the
 * browser requests the correct endpoint.
 */
export default function imageLoader({
    src,
    width,
    quality,
}: {
    src: string;
    width: number;
    quality?: number;
}) {
    // Always use root-level /_next/image (no basePath prefix)
    return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality ?? 75}`;
}
