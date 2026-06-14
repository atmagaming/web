// Heavy public media (audio, video, team photos) lives in the atma-web Vercel Blob store rather than
// the git repo. The store is public, so these URLs need no token to read. Generated/uploaded by
// scripts/upload-blob.ts; see scripts/blob-manifest.json for the full mapping.
export const BLOB_BASE = "https://fvltcr8faoaastod.public.blob.vercel-storage.com";

export const blob = (path: string) => `${BLOB_BASE}/${path}`;
