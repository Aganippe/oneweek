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