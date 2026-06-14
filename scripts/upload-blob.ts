/**
 * One-off uploader: pushes heavy/public media to the atma-web Vercel Blob store and
 * writes a manifest mapping each repo path to its public Blob URL.
 *
 * Run: BLOB_READ_WRITE_TOKEN=… bun run scripts/upload-blob.ts
 *
 * The store is public, so the returned URLs are stable and need no token to read.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { put } from "@vercel/blob";

const root = new URL("..", import.meta.url).pathname;

// Directories whose contents move to Blob. `prefix` is the Blob pathname prefix.
const targets = [
  { dir: "public/assets/images/team", prefix: "team" },
  { dir: "public/assets/music", prefix: "music" },
  { dir: "public/assets/videos", prefix: "videos" },
];

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) throw new Error("BLOB_READ_WRITE_TOKEN is required");

const manifest: Record<string, string> = {};

for (const { dir, prefix } of targets) {
  const absDir = join(root, dir);
  const entries = await readdir(absDir);
  for (const entry of entries) {
    const absFile = join(absDir, entry);
    const data = await readFile(absFile);
    const { url } = await put(`${prefix}/${entry}`, data, {
      access: "public",
      token,
      allowOverwrite: true,
      addRandomSuffix: false,
    });
    const repoPath = `/${relative(join(root, "public"), absFile)}`;
    manifest[repoPath] = url;
    console.log(`${repoPath}  ->  ${url}`);
  }
}

await writeFile(join(root, "scripts/blob-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`\nWrote ${Object.keys(manifest).length} entries to scripts/blob-manifest.json`);
