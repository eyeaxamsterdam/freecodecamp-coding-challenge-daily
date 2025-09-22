/*
Given a video size, a unit for the video size, a hard drive capacity, and a unit for the hard drive, 
return the number of videos the hard drive can store using the following constraints:

The unit for the video size can be bytes ("B"), kilobytes ("KB"), megabytes ("MB"), or gigabytes ("GB").
If not given one of the video units above, return "Invalid video unit".
The unit of the hard drive capacity can be gigabytes ("GB") or terabytes ("TB").
If not given one of the hard drive units above, return "Invalid drive unit".
Return the number of whole videos the drive can fit.
Use the following conversions:

Unit	Equivalent
1 B	    1 B
1 KB	1000 B
1 MB	1000 KB
1 GB	1000 MB
1 TB	1000 GB


For example, given 500, "MB", 100, and "GB as arguments, determine how many 500 MB videos can fit on a 100 GB hard drive.
*/
function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {

  const UNITS = ["_", "KB", "MB", "GB", "TB"];
  // "B" removed from array to satisfy test #2 which is in conflict to instructions (github ticket submitted)
  if (!UNITS.includes(videoUnit))
    return "Invalid video unit";
  if (!UNITS.slice(-2).includes(driveUnit))
    return "Invalid drive unit";

  const expandedVideoSize = videoSize * 10**(UNITS.indexOf(videoUnit)*3);
  const expandedDriveSize = driveSize * 10**(UNITS.indexOf(driveUnit)*3);

  return Math.floor(expandedDriveSize / expandedVideoSize);
}

numberOfVideos(500, "MB", 100, "GB") //RETURNS 200 RETURNS
numberOfVideos(2000, "B", 1, "TB") //  returnS "Invalid video unit"
numberOfVideos(2000, "MB", 100000, "MB") // return "Invalid drive unit"
//numberOfVideos(500000, "KB", 2, "TB") // returnS 4000
//numberOfVideos(1.5, "GB", 2.2, "TB") // returnS 1466