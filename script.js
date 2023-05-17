function threeSum(arr, target) {
// write your code here
	arr.sort();
	let closest = arr[0]+arr[1]+arr[2];

	for(let i=0;i<arr.length; i++){
		let j=i+1;
		let k = arr.length-1;
		while(j<k){
			let sum = arr[i]+arr[j]+arr[k];
			if(sum==target) return sum;

			if(Math.abs(sum-target)<Math.abs(closest-target)){
				closest = sum;
			}
			if(sum<target) j++;
			else k--;
		}
	}
	return closest;
  
}

module.exports = threeSum;
