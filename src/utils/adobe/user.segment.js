export const ResUserSegment = 'RES';
export const SeUserSegment = 'SE';
export const MeCorUsergment = 'ME-COR';

/**
* Useful for component prop checking if directly used as a property
*/
export const AllUserSegmentTypes = [
  ResUserSegment,
  SeUserSegment,
  MeCorUsergment,

];

/**
* Useful for component prop checking inside the EventParameters object
*/
export type UserSegmentType = FaqEventDetail |
ResUserSegment |
SeUserSegment |
MeCorUsergment;
