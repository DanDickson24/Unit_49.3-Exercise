function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      if (arr[left] <= arr[right]) {
        return left;
      }
  
      const mid = Math.floor((left + right) / 2);
      const next = (mid + 1) % arr.length; 
  

      if (arr[mid] > arr[next]) {
        return next;
      }
  
      
      if (arr[mid] > arr[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return 0;
  }

module.exports = findRotationCount