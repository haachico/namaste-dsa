let nums1 = [1, 4, 5, 0, 0, 0];
let nums2 = [4, 6, 7];

const mergeSorted = (nums1, m, nums2, n) => {
  let nums1Copy = nums1.slice(0, m);

  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {

    // so what we do is , if ncopy [i] < n2[i] ? we insert ncopy[i] else n2[i] in nums[1]
    //till when we insert in nums1?
    //till ofc pointer of ncopy < m, till ofc ncopy[i]< nums2[i] (as what i wrote above) 
    // and  p2> n condition because on if pointer of nums2 exaust, ie, it goes out, so put remaining ncopy in nums1
    if (p2 >=n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[i] = nums1Copy[p1];
      p1 = p1 + 1;
    } else {
      nums1[i] = nums2[p2];
      p2 = p2 + 1;
    }

    // if(p1 < m)
  }

  return nums1;
};

console.log(mergeSorted(nums1, 3, nums2, 3));
