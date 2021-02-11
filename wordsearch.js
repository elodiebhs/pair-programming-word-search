//pairing with Samantha Knoop

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))

    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }

    // transpose the array to switch columns & rows. This creates a new array (transpose(letters))
    const transposeLetters = transpose(letters)
    // join the letters in the array to turn them into "words" (ls.join(''))
    const verticalJoin = transposeLetters.map(ls => ls.join(''))
    
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    return false 
}

const transpose = function(matrix) {
    let transposed = [];
    for (i = 0; i < matrix[0].length; i++) {
      transposed.push([]);
      for (j = 0; j < matrix.length; j++) {
        transposed[i].push(matrix[j][i]);
      }
    }
    return transposed;
  };

  module.exports = wordSearch;