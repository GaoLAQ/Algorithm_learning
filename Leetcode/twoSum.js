const { performance } = require('perf_hooks');
const inputs = [3,1,4]; 
const targetValue = 7; 

var startTime = performance.now()

var twoSum = function (nums, target){
  // for(let i =0; i<nums.length; i++){
  //   let para = target - nums[i]
  //   let paraIdx = nums.findIndex(ele => ele === para)
  //   if(paraIdx>-1 && paraIdx !==i){
  //     return [ paraIdx, i]
  //   }
  // }

  let map = new Map(); 
  for(let i=0; i< nums.length; i++){
    let para = target - nums[i]
    if(map.has(para)){
      return [i,map.get(para)]
    } else {
      map.set(nums[i], i)
    }
  }
}

var endTime = performance.now()

console.log(twoSum(inputs, targetValue))

console.log((endTime-startTime))