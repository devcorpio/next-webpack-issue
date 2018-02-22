const fs = require('fs');
const shell = require('shelljs');
const packagesFile = require('../package.json');

const releaseId = packagesFile.version;
const nextjsBuildId = fs.readFileSync('.next/BUILD_ID', 'UTF-8');

if (shell.exec(`node_modules/.bin/sentry-cli releases files ${releaseId} upload-sourcemaps --url-prefix \\~/_next/${nextjsBuildId}/ ${__dirname}/../.next/`).code !== 0) {
  shell.echo('Error: Sourcemap upload process fails');
  shell.exit(1);
}