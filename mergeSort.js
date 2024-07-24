const mergeSort = (arr) => {
    // If array of length 1 or less, return array
    if (arr.length <= 1) return arr;
    
    // Find middle, left and right
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Sort and merge
    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    // New array for final result
    let result = [];

    // Starting indexes
    let leftIndex = 0;
    let rightIndex = 0;


    // Iterate so many times as there are elements in both arrays
    while(leftIndex < left.length && rightIndex < right.length) {

        // If left element is smaller than right element, push left element to result array
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } 
        
        // If right element is smaller than left element, push right element to result array
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([5, 3, 7, 1, 8, 2, 9, 4, 6])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]