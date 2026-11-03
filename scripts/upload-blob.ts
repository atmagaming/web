/**
 * One-off uploader: pushes heavy/public media to the atma-web Devkit Cloud blob store and
 * writes a manifest mapping each repo path to its public blob URL.
 *
 * Run: AWS_PROFILE=devkit DK_BLOB_BUCKET=dk-blobs-453953529857 DK_PROJECT=atma-web DK_STAGE=production \
 *   DK_HOST=atmagaming.com bun run scripts/upload-blob.ts
 *
 * Public blobs are served by the edge at https://<host>/_blob/<path> and need no token to read.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { put } from "@elumixor/devkit/blob";

const root = new URL("..", import.meta.url).pathname;

// Directories whose contents move to Blob. `prefix` is the Blob pathname prefix.
const targets = [
  { dir: "public/assets/images/team", prefix: "team" },
  { dir: "public/assets/music", prefix: "music" },
  { dir: "public/assets/videos", prefix: "videos" },
];

const manifest: Record<string, string> = {};

for (const { dir, prefix } of targets) {
  const absDir = join(root, dir);
  const entries = await readdir(absDir);
  for (const entry of entries) {
    const absFile = join(absDir, entry);
    const data = await readFile(absFile);
    const { url } = await put(`${prefix}/${entry}`, data, { contentType: Bun.file(absFile).type });
    const repoPath = `/${relative(join(root, "public"), absFile)}`;
    manifest[repoPath] = url;
    console.log(`${repoPath}  ->  ${url}`);
  }
}

await writeFile(join(root, "scripts/blob-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`\nWrote ${Object.keys(manifest).length} entries to scripts/blob-manifest.json`);
