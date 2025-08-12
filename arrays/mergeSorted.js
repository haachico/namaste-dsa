let nums1 = [1, 4, 5, 0, 0, 0];
let nums2 = [4, 6, 7];


//m + n is  or o(m + n ) precicesly but it is ON technically
const mergeSorted = (nums1, m, nums2, n) => {
  let nums1Copy = nums1.slice(0, m);

  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {

    // so what we do is , if ncopy [i] < n2[i] ? we insert ncopy[i] else n2[i] in nums[1]
    //till when we insert in nums1?
    //till ofc pointer of ncopy < m, till ofc ncopy[i]< nums2[i] (as what i wrote above) 
    // and  p2>= n condition because on if pointer of nums2 exaust, ie, it goes out, so put remaining ncopy in nums1
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
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



// below is the optimised soln 
//time complexity - o (m + n)
//space complexity - o(1)

var merge = function(nums1, m, nums2, n) {


    //we will start from last ;
    // loopt through both arr
    // if p2 at num2 > p1 at num1 ? num2[p2] will come num1 else num1[p1]
    //till when?
    //if p2 is out of bound, it means num1 is sorted so we will break;
    //if p1 is out of bound, we will loop through num2 and copy in num1;
    //also why start from last? because there are 0s in last , if we start...
    //...from first. we will replace/miss those numbers


    let p1 = m -1;
    let p2 = n - 1
    for(let i =  m + n - 1; i >=0; i--){
    
    if(p2 < 0) break;

    //conditions
    //if p2 is out of bound, it means num1 is sorted so we will break;
    //if p1 is out of bound, we will loop through num2 and copy in num1;
    //so p1 check will be with nums1? nums2 and not reverse
    
    if(p1>= 0 && nums1[p1]> nums2[p2] ) {
       
        nums1[i] = nums1[p1];
        p1--;

    } else {
        nums1[i] = nums2[p2];
        p2--;
    }

    }
    
};
