/*
Photo Storage
Given a photo size in megabytes (MB), and hard drive capacity in gigabytes (GB), return the number of photos the hard drive can store using the following constraints:

1 gigabyte equals 1000 megabytes.
Return the number of whole photos the drive can store.

*/


function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
	// reusable conversion function
    let convertToMb = (mb) => mb*1000;
	// use .floor to round down
    let calculateNumOfPhotos = () => Math.floor(convertToMb(hardDriveSizeGb)/photoSizeMb);
    console.log(calculateNumOfPhotos());
  return calculateNumOfPhotos();
}

const runTests = require('../../../helpers/runTests');
runTests(numberOfPhotos, [
    `assert.equal(numberOfPhotos(1, 1), 1000);`,
    `assert.equal(numberOfPhotos(2, 1), 500);`,
    `assert.equal(numberOfPhotos(4, 256), 64000);`,
    `assert.equal(numberOfPhotos(3.5, 750), 214285);`,
    `assert.equal(numberOfPhotos(3.5, 5.5), 1571);`,
]);
