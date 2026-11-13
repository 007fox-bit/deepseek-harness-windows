import assert from 'node:assert/strict'
import { mkdtemp, readFile, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import test from 'node:test'

const execute = promisify(execFile)

test('rewrites both electron-builder installer locations', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'dsh-windows-feed-'))
  const metadata = join(directory, 'nightly.yml')
  await writeFile(
    metadata,
    'version: 0.2.2-rc.2\nfiles:\n  - url: DeepSeek-Harness.exe\n    sha512: abc\n    size: 123\npath: DeepSeek-Harness.exe\nsha512: abc\nreleaseDate: 2026-11-13T00:00:00.000Z\n',
    'utf8',
  )

  await execute(process.execPath, [
    fileURLToPath(new URL('./rewrite-windows-feed.mjs', import.meta.url)),
    metadata,
    '007fox-bit/deepseek-harness-windows',
    'dsh-v0.2.2-rc.2-community-windows',
    'DeepSeek Harness Setup 0.2.2-rc.2.exe',
  ])

  const rewritten = await readFile(metadata, 'utf8')
  const expected = 'https://github.com/007fox-bit/deepseek-harness-windows/releases/download/dsh-v0.2.2-rc.2-community-windows/DeepSeek%20Harness%20Setup%200.2.2-rc.2.exe'
  assert.equal(rewritten.match(new RegExp(expected, 'gu'))?.length, 2)
  assert.match(rewritten, /sha512: abc/u)
})
