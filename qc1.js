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
