const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const fileCount = {};  // Объект для подсчета встреченных имен файлов
  const renamedFiles = [];  // Массив для новых имен файлов
  
  names.forEach(name => {
    if (fileCount[name]) {
      let newName = `${name}(${fileCount[name]})`; 
      while (fileCount[newName]) {
        fileCount[name]++;
        newName = `${name}(${fileCount[name]})`;
      }
      renamedFiles.push(newName);
      fileCount[newName] = 1;
    } else {
      renamedFiles.push(name); 
      fileCount[name] = 1;
    }
  });

  return renamedFiles;
}

module.exports = {
  renameFiles
};
