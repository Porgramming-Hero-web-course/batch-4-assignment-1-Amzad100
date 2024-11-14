{
    // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    //  Sample Input:
    //  sumArray([1, 2, 3, 4, 5]);

    // Sample Output:
    // 15;
    // 

    type numArray = number[];
    function sumArray(nums: numArray): number {
        const sumNumber = nums.reduce((acc, num) => acc + num, 0);
        return sumNumber;
    }

    sumArray([1, 2, 3, 4, 5]);
    // console.log(sumArray([1, 2, 3, 4, 5]));

    //
}