function sortedFrequency(arr, num) {
    function findFirstOccurrence(arr, num) {
      let left = 0;
      let right = arr.length - 1;
      let result = -1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
  
        if (arr[mid] === num) {
          result = mid;
          right = mid - 1;
        } else if (arr[mid] < num) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      return result;
    }
  
    function findLastOccurrence(arr, num) {
      let left = 0;
      let right = arr.length - 1;
      let result = -1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
  
        if (arr[mid] === num) {
          result = mid;
          left = mid + 1;
        } else if (arr[mid] < num) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      return result;
    }
  
    const firstIndex = findFirstOccurrence(arr, num);
    if (firstIndex === -1) {
      return -1;
    }
  
    const lastIndex = findLastOccurrence(arr, num);
    const frequency = lastIndex - firstIndex + 1;
    return frequency;
  }

module.exports = sortedFrequency