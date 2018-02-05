const testnums = [1,2,3,4];

function sumFor(nums) {

  let sum = 0;
  for(let num of nums) {
    sum += num;
  }

  return sum;
}

console.log(sumFor(testnums));

function sumWhile(nums) {

  let sum = 0;
  let i = 0;
  while(i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(testnums));


function sumRecursion(nums) {

  if(nums.length == 0) {
    return 0;
  }
    return nums[0] + sumRecursion(nums.slice(1,nums.length));
}

console.log(sumRecursion(testnums));

function sumTheSimpleWay(nums) {

 let sum = _.reduce(nums, function(memo, num){ return memo + num; }, 0);
 return sum;
}

console.log(sumTheSimpleWay(testnums));