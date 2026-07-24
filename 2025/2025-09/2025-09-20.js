/*
Given a file size, a unit for the file size, and hard drive capacity in gigabytes (GB), return the number of files the hard drive can store using the following constraints:

The unit for the file size can be bytes ("B"), kilobytes ("KB"), or megabytes ("MB").
Return the number of whole files the drive can fit.
Use the following conversions:
Unit	Equivalent
1 B	    1 B
1 KB	1000 B
1 MB	1000 KB
1 GB	1000 MB
For example, given 500, "KB", and 1 as arguments, determine how many 500 KB files can fit on a 1 GB hard drive.
 */


function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  let sizeGb = ''

  const byteToGB = b => b * 1/1000000000;
  const kbToGb = kb => kb * 1/1000000;
  const mbToGb = mb => mb * 1/1000;

  const convertToGb = (fs, fu) => {
    sizeGb = fu === 'B' ? byteToGB(fs) : fu === 'KB' ? kbToGb(fs) : fu === 'MB' ? mbToGb(fs) : fs
    return sizeGb
  }

  const numberOfFiles = Math.floor(driveSizeGb/(convertToGb(fileSize, fileUnit)));
  console.log(numberOfFiles); 
  return numberOfFiles;
}

const runTests = require('../../helpers/runTests');
runTests(numberOfFiles, [
    `assert.equal(numberOfFiles(500, "KB", 1), 2000);`,
    `assert.equal(numberOfFiles(50000, "B", 1), 20000);`,
    `assert.equal(numberOfFiles(5, "MB", 1), 200);`,
    `assert.equal(numberOfFiles(4096, "B", 1.5), 366210);`,
    `assert.equal(numberOfFiles(220.5, "KB", 100), 453514);`,
    `assert.equal(numberOfFiles(4.5, "MB", 750), 166666);`,
]);
