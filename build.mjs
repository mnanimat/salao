import { access, cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, "dist");

const publicFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "_headers",
  "_redirects",
  "favicon.ico",
  "robots.txt",
  "sitemap.xml"
];

const publicDirectories = [
  "assets",
  "images",
  "img"
];

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of publicFiles) {
  const source = path.join(root, file);

  if (await exists(source)) {
    await cp(source, path.join(output, file));
  }
}

for (const directory of publicDirectories) {
  const source = path.join(root, directory);

  if (await exists(source)) {
    await cp(source, path.join(output, directory), { recursive: true });
  }
}

if (!(await exists(path.join(output, "index.html")))) {
  throw new Error("O arquivo index.html não foi encontrado na raiz do projeto.");
}

console.log("Build concluído. Arquivos publicados na pasta dist.");
