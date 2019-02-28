// function a() {
//     console.log(c);
//     // var c = 5;
//     // console.log(c);
// }

// function b() {
//     a();
//     console.log(c);
//     var c;
//     console.log(c);
// }

// var c = 1;
// b();
// console.log(c);

// function maxDifference(a) {
//     let maxDiff = a[1] - a[0];
//     let minEle = a[0];
//     for(let i = 1; i < a.length; i++){
//         if (a[i] - minEle > maxDiff) {
//             maxDiff = a[i] - minEle;
//         }
            
//         if (a[i] < minEle) {
//             minEle = a[i];
//         }
//     }
//   return maxDiff < 0 ? -1 : maxDiff;
// }

function maxDifference(a) {
    var maxDiff = 0;
    var minEle = a[0];
    for (var i = 0; i < a.length; i++) {
        for(var j = i+1; j < a.length; j++) {
            if (a[j] - a[i] > maxDiff) {
                maxDiff = a[j] - a[i];
            }
        }
    }
}

console.log(maxDifference([2, 3, 1, 10, 1, 6, 4, 11]));
