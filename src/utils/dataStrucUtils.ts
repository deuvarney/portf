/**
 * Shuffles an array in place with random swaps
 * @param array - Incoming array of any type
 * @returns Mutated array.
 */
export function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
