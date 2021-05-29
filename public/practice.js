let mouseList = ['Mickey', 'Minnie', 'Rainbo'];

function lengthFinder(strList) {
    // declare temporary variable
    let currentStr = '';
    // iterate over array with for loop
    for (i = 0; i <mouseList.length; i++) {
      if  (mouseList[i].length > currentStr.length) {
            currentStr = mouseList[i];
            
      }
    }
    return currentStr;
    // convert each string length into number
    // compare numbers
}

let longestMouseName = lengthFinder(mouseList);
console.log(longestMouseName);