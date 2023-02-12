
var fullName = 'Akira Thanh';
var age = 19;

alert(fullName);
alert (age);
var a = 8;
var b = 5;

var c = a / b;

 console.log(c);
// luy thua
var c = a ** b;
// chia so du
var d = a % b;
console.log(d);
// tang 1 gia Tri
a++;
// giam 1 gia Tri
a--;
/**toan tu gan */
/**x += y -> x = x + y */
/**x -= y -> x = x - y */
/**x **= y -> x = x ** y */
/**x /= y -> x = x / y */


// Tien to va hau to
 /** viec 1: +1 cho a , a = a +1 => a = ... */
 /** viec 2 : tra ve a sau khi duoc +1 */

 var output = ++a;
 
 console.log ( 'output: ', output);
 
 /** noi chuoi */
 var firstName = 'Akira ';
 var lastName = 'Thanh';
 var fullName = firstName + ' ' + lastName;

 /** toan tu so sanh */

 if (a > b){
    console.log('true')
 }
 else{
    console.log('not')
 };

 /** kieu du lieu Boolean */
 var isSuccess = true;
console.log(isSuccess);

var age = 16
var canBuyAlcohol= age>=18;
console.log(canBuyAlcohol);

/** cau dieu kien if - else */
//  0
//  false
//  '' _ ""
//  undefined
//  NaN
//  null

//  if (){
//     console.log('dieu kien dung');
//  } else{
//     console.log('dieu kien sai');
//  }

 /** toan tu logic 
  * 1 &&- and
  * 2. || - Or
  * 3. ! - Not
 */
if ( a > 0 && b > 0){
    console.log('Dieu kien dung')
};

/** kieu du lieu javascript
 1. Du lieu nguyen thuy - Primitive Data
  - Number
  - String
  - Boolean
  - Null
  - Symbol
2. Du lieu phuc tap - Complex Data
  - Function
  - Object
 */

// Number type 
//var a = 1;
// var b = 1.5;

//String type
// var fullName = 'Akira Thanh';

//Boolean type
// var isSuccess = true;
// var isSuccess = false;

//Undefined type
// var age;

//Null
// var isNull = null;

//symbol
// var id = Symbol('id'); //unique

//Function 
// var myFunction = function(){ alert(' Akira Thanh')};  MyFunction();

//Object types
// var myObject = {
//     name : ' akira Thanh',
//     age : 19,
//     Adress : ' Ha Noi',
//     myFunction: function(){

//     }
// };

var myArray = [
    'php',
    'css',
    'ruby'
]