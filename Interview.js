// question

1.   

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();

//--------------------------------------

2.
<button id="btn-0">Button 1</button>
<button id="btn-1">Button 2</button>
<button id="btn-2">Button 3</button>

<script type="text/javascript">
  const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
  for (var btnNum = 0; btnNum < prizes.length; btnNum++) {

    // For each of our buttons, when the user clicks it...
    document.getElementById(`btn-${btnNum}`).onclick = () => {

      // Tell her what she's won!
      alert(prizes[btnNum]);
    };
  }
</script>

//-----------------------------------------

//3.

$("#but").click(function(event){
  event.preventDefault();
 });


$("#foo").click(function(){
 alert("parent click event fired !");
});

<div id="foo">
  <button id="but">button</button>
</div>

$("#but").click(function(event){
  event.stopPropagation();
 });


$("#foo").click(function(){
 alert("parent click event fired !");
});

<div id="foo">
  <button id="but">button</button>
</div>

//----------------------------------------------

4.
debounce
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

5. 
// 2nd Largest Number in an array
var arr = Array('20','120','111','215','54','78'),
biggest = -Infinity,
next_biggest = -Infinity;

for (var i = 0, n = arr.length; i < n; ++i) {
    var nr = +arr[i]; // convert to number first

    if (nr > biggest) {
        next_biggest = biggest; // save previous biggest value
        biggest = nr;
    } else if (nr < biggest && nr > next_biggest) {
        next_biggest = nr; // new second biggest value
    }
}

console.log(next_biggest);

6.
//import and require

7.
function add(n){
    var addNext = function(x){
    return add(n+x);
    }
    
    addNext.valueOf = function(){
    return n;
    }
    return addNext;
    }
