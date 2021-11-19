const wordSearch = (letters, word) => {
    if (letters === [] || !word) return false;
  
    // searching horizontally
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
  
    // 2D array
    let verticalArr = [];
    for (let i = 0; i < letters.length; i++) {
      verticalArr[i] = [];
      for (let j = 0; j < letters[i].length; j++) {
        verticalArr[i].push(letters[j][i]);
      }
    }
  
    // seaching vertically
    const verticalJoin = verticalArr.map(ls => ls.join(''));
    for (let l of verticalJoin) {
      if (l.includes(word)) return true;
    }
  
    return false;
  };
  
  module.exports = wordSearch;