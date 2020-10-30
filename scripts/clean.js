const rimraf = require('rimraf')
const fs = require('fs');
const path = require('path');

const cwd = process.cwd();

function getProjectPath(...filePath) {
    console.log('cwd...', cwd);
    return path.join(cwd, ...filePath);
}

const cleanDir = (dir) => {
    console.log('getProjectPath....', getProjectPath('_site'))
}

cleanDir();
