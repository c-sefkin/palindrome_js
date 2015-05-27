var palindrome = function(word, otherWord) {
  var word1 = word.split('')
  var word2 = otherWord.split('')
  if (word1.join('') == word2.reverse().join('')) {
    return true
  } else {
    return false
  }
}
