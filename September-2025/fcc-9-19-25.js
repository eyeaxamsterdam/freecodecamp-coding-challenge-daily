/*

Given a photo size in megabytes (MB), and hard drive capacity in gigabytes (GB), return the number of photos the hard drive can store using the following constraints:

1 gigabyte equals 1000 megabytes.
Return the number of whole photos the drive can store.

*/


function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
	// reusable conversion function
    let convertToMb = (mb) => mb*1000;
	// use .floor to round down
    let calculateNumOfPhotos = () => Math.floor(convertToMb(hardDriveSizeGb)/photoSizeMb);
  return calculateNumOfPhotos();
}

/* 
console.log(numberOfPhotos(1, 1));
console.log(numberOfPhotos(2, 1));
console.log(numberOfPhotos(4, 256));
console.log(numberOfPhotos(3.5, 750));
console.log(numberOfPhotos(3.5, 5.5)); 
 */

/*
1. numberOfPhotos(1, 1) should return 1000.
2. numberOfPhotos(2, 1) should return 500.
3. numberOfPhotos(4, 256) should return 64000.
4. numberOfPhotos(3.5, 750) should return 214285.
5. numberOfPhotos(3.5, 5.5) should return 1571.
*/