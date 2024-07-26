const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

const combinedArray = [5, ...nums1, -6, -1, ...nums2];

console.log(combinedArray); // [5, 1, -2, 3, 4, -6, -1, 8, 3, -8, 1]

const sum = combinedArray.reduce((acc, num) => acc + num, 0);

console.log(sum); // The sum of all elements
