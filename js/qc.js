var Arr=[1,3,5,4,3,3,1,4]
function arr(arr) {
  var newarr=[]
  for(var i=0; i<arr.length; i++){
    if(newarr.indexOf(arr[i])==-1){
      newarr.push(arr[i])
    }
  }
  console.log(newarr)
}      
arr(Arr)

var Arr=[1,2,5,2,2,4,5,1,1,2]
function arror(arr) {
    var newArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr.indexOf(arr[i]) == i) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var tw = arror(Arr)
console.log(tw)