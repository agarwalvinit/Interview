/**
 * function maxDifference(a) {
    if (a.length < 2) {
        return -1;
    }
    let maxDiff = a[1] - a[0];
    let minEle = a[0];
  for(let i = 1; i < a.length; i++){
      if (a[i] - minEle > maxDiff) {
          maxDiff = a[i] - minEle;
      }
          
      if (a[i] < minEle) {
          minEle = a[i];
      }
  }
  return maxDiff < 0 ? -1 : maxDiff;
}




var a  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// var str = 'giraffe';
// var code = '01111001111111111011111111';
// var str = 'abcdef';
// var code = '00000011111111111111111111';
var str = 'abcde';
var code = '0000011111111111111111111';
function fun(k) {
    var count = 0;
    var arr = [];
    for(var i = 0; i < str.length; i++) {
        var c = a.indexOf(str.charAt(i));
        if(code.charAt(c) == 0) {
            count += 1;
        }
        if (count > k) {
            break;
        }
        arr.push(true);
    }
    return arr.length;
}

console.log(fun(1));

 */


function a() {
    console.log(c);
    var c = 5;
    console.log(c);
}

function b() {
    c = 2;
    a();
    console.log(c);
    var c = 5;
    console.log(c);
}

var c = 1;
b();
console.log(c);