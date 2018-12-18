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


  constructor() { }
}
