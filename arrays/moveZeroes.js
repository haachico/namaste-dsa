const moveZeroes = (nums)=> {

    let p1 = 0; 
    let zeroCount = 0;

    for (let i = 0 ; i < nums.length ; i++ ){

        if(nums[i] !== 0){
            nums[p1] = nums[i]
            p1 = p1 + 1
        }  else {
            zeroCount = zeroCount + 1
        }
    }

    for (let i = nums.length - 1; i >=0; i--){
    
        if(zeroCount !== 0){
            nums[i] = 0;
            zeroCount = zeroCount - 1
        }
    }

    return nums

}

console.log(moveZeroes([0,1,0,3,12]))

