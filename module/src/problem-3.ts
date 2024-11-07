{
  //Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

  function countWordOccurrences(sentence: string, word: string): number {
    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();
    const words = lowerSentence.split(" ");

    return words.filter((w) => w === lowerWord).length;
  }

  // console.log(countWordOccurrences("I love typescript", "typescript"));
}
