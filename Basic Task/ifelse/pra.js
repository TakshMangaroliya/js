
// even//odd
// var n=8;

// if(n%2==0){
//     document.write("even");
// }else{
//     document.write("odd");
// }


//sp//cp
// var sp=1000;
// var cp=700;

// if(sp>cp){
//     p=sp-cp;
//     document.write("profit"+p);
// }else{
//     l=cp-sp;
//     document.write("loss"+l);
// }



//possitive//negetive
// var n=10;

// if(n>0){
//     document.write("possitive");
// }else{
//     document.write("negetive");
// }


// var a=10;
// var b=20;
// var c=30;

// if(a>b){
//     if(a>c){
//         document.write("a is gr");
//     }else{
//         document.write("c is gr")
//     }
// }
// else{
//     if(b>c){
//         document.write("b is gr");
//     }else{
//         document.write("c is gr")
//     }
// }

// if(a>b && a>c){
//     document.write("a is gr");
// }
//  else if(b>c){
//     document.write("b is gr");
// }
// else{
//     document.write("c is gr");
// }


// var ch=prompt("enter the ch");
// if((ch>='A' && ch<='Z' )||(ch>='a' && ch<='z')){
//     document.write("ch is alphabet");
// }
// else{
//     document.write("ch is not alphabet");
// }


// var ch=prompt("enter the ch");
// if((ch='A','e','i','o','u')){
//     document.write("ch is savar");
// }
// else{
//     document.write("ch is not savar");
// }



//Q-21
// var u = Number(prompt("enter the unit"));

// if (u >= 1 && u <= 50) {
//     b = u * 0.50;
// }
// else if (u >= 51 && u <= 150) {
//     b = (u - 50) * 0.75 + 50 * 0.50
// }
// else if (u >= 151 && u <= 250) {
//     b = (u - 50) * 1.20 + 100 * 0.75 + 50 * 0.50
// }
// else {
//     b = (u - 50) * 1.50 + 100 * 1.20 + 100 * 0.75 + 50 * 0.50
// }
// suc = b * 0.20;
// tb = b + suc;
// document.write("total bill", +tb);



//swith

// var ch = Number(prompt("enter the number"));

// switch (ch) {
//     case 'A':
//         document.write("apple")
//         break;
//     case 'B':
//         document.write("boll")
//         break;
//     default:
//         document.write("wc")

// }


var num1 = Number(prompt("enter the nuber"))
var num2 = Number(prompt("enter the nuber"))
var number;

switch (num1, num2, number) {
    case 1:
        number = num1 + num2;
        console.log("number")
        break;
    case 2:
        number = num1 - num2;
        console.log("number")
        break;
    case 3:
        number = num1 * num2;
        console.log("number")
        break;
    case 4:
        number = num1 / num2;
        console.log("number")
        break;
    case 5:
        number = num1 % num2;
        console.log("number")
        break;
    default:
        console.log("wc");

}


