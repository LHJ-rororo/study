// var firstNum=10;
// var nextNum=2;
// var result=firstNum+nextNum;

// document.write(result+"<br>");
// document.write(firstNum+nextNum+"<br>");

//1. ↑ 문서에 표시하기


// var A=10;
// var B=3;
// var result;

// result = A+B;
// document.write(result+"<br>");

// result = A-B;
// document.write(result+"<br>");

// result = A*B;
// document.write(result+"<br>");

// result = A/B;
// document.write(result+"<br>");

// result = A%B;
// document.write(result+"<br>");

// 2. ↑ 연산자입니다

// var A= 10;
// var B =3;
// var result;

// result=A>B;
// document.write(result+"<br>")
// A(10)가 B(3) 보다 크다? 출력값 true

// result=A<=B;
// document.write(result+"<br>")
// A(10)가 B(3) 보다 작거나 같다? 출력값 false

// result=A==B;
// document.write(result+"<br>")
// A(10)가 B(3)와 같다? 출력값 false

// result=A!=B;
// document.write(result+"<br>")
// A(10)가 B(3) 와 다르다? 출력값 true

//3. ↑ 불린문 비교연산자 ( > , == , < , !=)



// var num1 = 10;
// var num2 = 20;

// num1+=5;
// document.write(num1+"<br>");

// //num1에 저장된 10에 5를 더하여 다시 저장합니다.
// //출력값: 15

// num1-=5;
// document.write(num1+"<br>");

// //num1에 저장된 15에 5를 감하여 다시 저장합니다.
// //출력값: 10

// num1*=5;
// document.write(num1+"<br>");

// //num1에 저장된 10에 5를 곱하여 다시 저장합니다.
// //출력값: 50

// num1/=5;
// document.write(num1+"<br>");

// //num1에 저장된 50에 5를 나누어 다시 저장합니다.
// //출력값: 10

// num2%=3;
// document.write(num2+"<br>");

//num2에 저장된 20을 3으로 나누어 다시 저장합니다.
//출력값: 2

//4. ↑ 대입 연산자


// var num1=10;
// var num2=20;

// num1++;
// document.write(num1+"<br>");

//num1에 저장된 10에 1을 더하여 다시 저장
//출력값 11


// num2--;
// document.write(num2+"<br>");

//num2에 저장된 20에 1을 감하여 다시 저장
//출력값 19

//5.↑ 증감연산자


var gender=prompt("당신의 성별은?","여성");
var age = prompt("당신의 나이는?","20");
var result = age>=20 && age <30 && gender =="여성";
document.write(result);