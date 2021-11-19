const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    let isTrue = false;
    let verticalLetters = [];
    for (l of horizontalJoin) {
        if (l.includes(word)) {
          isTrue = true;
        };
    };
    
    for (let i = 0; i < letters.length; i++){
        verticalLetters.push([])
        for (let j = 0; j < letters.length; j++) {
            verticalLetters[i].push(letters[j][i]);   
        };
    }

 
    const verticalJoin = verticalLetters.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) {
          isTrue = true;
        }
    }
    


    return isTrue
}

module.exports = wordSearch