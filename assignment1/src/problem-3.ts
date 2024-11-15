{   // Create a TypeScript function called countWordOccurrences that accepts a sentence (string)
    // and a word (string). The function should return the number of times the word appears in the
    // sentence, ignoring case. Use the simple sentence without punctuation as input.
    // Example:
    // Input: "I love typescript", "typescript"
    // Output: 1
    // Sample Input:
    // countWordOccurrences("I love typescript", "typescript");
    // // Sample Output:
    // 1;
    //
    function countWordOccurrences(sentence: string, word: string): number {
        const words = sentence.toLocaleLowerCase().split(" ");

        return words.filter(numWord => numWord === word.toLocaleLowerCase()).length
    }

    countWordOccurrences("I love typescript", "typescript");
    // console.log(countWordOccurrences("I love typescript", "typescript"))
    //
}