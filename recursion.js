function productOfArray(arr){
    if(arr.length === 0){
        return 1
    } else {
        let n = arr.pop()
        return n * productOfArray(arr)
    }

}
function collectStrings(obj){
    let arr = [];
    for(var key in obj){
if(typeof obj[key] === "object"){
  arr.push(collectStrings(obj[key]))} else {
    arr.push(obj[key])
  }
}
return arr.flat()
}
function contains(obj,value){
    for(var key in obj){
      if(obj[key] === value){
          return true
      }  else if (typeof obj[key] === "object"){
          let newSearch = contains(obj[key],value);
          if(newSearch) return newSearch
        }
    }
    return false
}

function search(arr,target){
    for(let i=0; i < arr.length; i++){
        if(arr[i]=== target){
            return i
        }
    }
    return -1
}

function binarySearch(arr,target){
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start+end)/2)

    while(arr[middle] !== target && start <= end){
        if(arr[middle] < target){
            start = middle + 1;
        } else {
            end = middle-1
        }
        middle = Math.floor((start+end)/2)
    }
    return arr[middle] === target ? middle : -1

}

function stringifyNumbers(obj){
    let newObj = {};
    for(var key in obj){
if(typeof obj[key] === "object"){
    stringifyNumbers(obj[key])} else if(typeof obj[key] === "number") {
    obj[key] = obj[key].toString()
  }
}
return  obj
}


