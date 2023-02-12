/* 
1. Hàm?
   - Một khối mã
   - Làm 1 việc cụ thể

2. loại hàm
    - Built-in
    - tự định nghĩa

3. tính chất
    - không thực thi khi định nghĩa
    - sẽ thực thi khi đươcj gọi
    - coa thể nhận tham số
    - có thể trả về  1 giá trị
*/
function showDialog() {
    alert('Hay goi toi ra');
}
showDialog();

/* 
1 Tham số
    - Định nghĩa?
    - Kiểu dữ liệu
    - Tính private
    - 1 tham số
    - nhiều tham số

2 truyền tham số
     - 1 tham số
     - nhiều tham số
3. Arguments?
    - Đối tượng arguments
    - giới thiệu vongf lặp for of
*/
function writeLog(message,sum){
    console.log(message)
    console.log(sum)
}
writeLog('day la message','day la sum');

function sum(){
    for( var param of arguments){
        console.log(param)
    }
}
sum('log1','log2','log3');

/* tu khoa trong ham */
function cong(a,b) {
    return a + b;
}
var result = cong(1,9);
console.log(result)

/*
các loại hàm 
    1. Declaration function
      vd. function showMessage(){

      }
    2. Expression function
    vd . var showMessage = function testName(){

    }
    vd2. setTimeout(function autoLogin(){

    });
    3. Arrow function
*/
