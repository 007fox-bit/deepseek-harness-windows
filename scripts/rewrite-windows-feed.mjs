/** Publish electron-builder metadata through a fixed feed while retaining versioned installers. */

import { readFileSync, writeFileSync } from 'node:fs'

const [metadataPath, repository, releaseTag, installerName, ...extra] = process.argv.slice(2)
if (!metadataPath || !/^[^/\s]+\/[^/\s]+$/u.test(repository) || !releaseTag || !installerName || extra.length) {
  throw new Error('Usage: rewrite-windows-feed.mjs <nightly.yml> <owner/repository> <release-tag> <installer-name>')
}

const assetUrl = `https://github.com/${repository}/releases/download/${encodeURIComponent(releaseTag)}/${encodeURIComponent(installerName)}`
const source = readFileSync(metadataPath, 'utf8')
let fileEntries = 0
let legacyPaths = 0
const rewritten = source
  .replace(/^(\s*-\s+url:\s*).+$/gmu, (_line, prefix) => {
    fileEntries++
    return `${prefix}${assetUrl}`
  })
  .replace(/^(path:\s*).+$/gmu, (_line, prefix) => {
    legacyPaths++
    return `${prefix}${assetUrl}`
  })

if (fileEntries !== 1 || legacyPaths !== 1) {
  throw new Error(`Expected one files[].url and one legacy path, found ${fileEntries} and ${legacyPaths}`)
}
writeFileSync(metadataPath, rewritten, 'utf8')
