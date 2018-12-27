import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayToolsService {
  shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }

  removeNullItems(array) {
    var filtered = array.filter(function (item) {
      return item != null;
    });
    return filtered
  }

  removeDuplicates(array) {
    var setOfUniques = new Set(array)
    var newArray = Array.from(setOfUniques)
    return newArray
  }

  getKeyValues(array, key) {
    let valuesOfName = [];
    for (let i = 0; i < array.length; i++) {
      let value = array[i][key]
      valuesOfName.push(value)
    }
    return valuesOfName;
  }

  getNestedValues(array) {
    let stringsArray = [];
    for (let i = 0; i < array.length; i++) {
      let nestedArray = array[i] ? array[i] : null;
      if (nestedArray != null) {
        for (let j = 0; j < nestedArray.length; j++) {
          stringsArray.push(nestedArray[j])
        }
      } else {
        continue
      }
    }
    return stringsArray;
  }

  generateArrayFromObject(object) {
    let objKeys = Object.keys(object);
    let array = [];

    for (var key of objKeys) {
      array.push(object[key]);
    }

    return array;

  }

  removeValueFromArray(array, value) {
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].trim() === value.trim()) {
        continue
      } else {
        tempArray.push(array[i])
      }
    }
    return tempArray;
  }

  compareArraysOverlap(checkArr, masterArr) {
    // console.log('need to know if (', checkArr, ') appears inside of (', masterArr, ')' )

    checkArr = checkArr.sort()
    masterArr = masterArr.sort()

    if ((checkArr.length === 0) || masterArr.length === 0) {
      // console.log('need to know if (', checkArr, ') appears inside of (', masterArr, ')...', false )
      return false
    }

    for (let i = 0; i < masterArr.length; i++) {
      if (checkArr[i] === undefined) {
        // console.log('need to know if (', checkArr, ') appears inside of (', masterArr, ')...', true )
        return true
      }

      let thisCheckVal = checkArr[i].trim()
      let thisMasterVal = masterArr[i].trim()

      if (thisMasterVal === thisCheckVal) {
        continue
      }
    }
    // console.log('need to know if (', checkArr, ') appears inside of (', masterArr, ')...', true )
    return true
  }

  returnArrayOverlappingValues(arr1, arr2) {

  }

  dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}


  checkIfArrayContains(array, value) {
    let bool = array.indexOf(value)
    bool < 0 ? bool = false : bool = true;
    return bool
  }

  getLongestArray(arr) {
    let longestArr = arr.sort((a, b) => a.length - b.length).reverse();
    return longestArr[0];
  }

  sortArrayByLength(arr) {
    let sortedByLengthArr = arr.sort((a, b) => a.length - b.length).reverse();
    return sortedByLengthArr;
  }


  constructor() { }
}
