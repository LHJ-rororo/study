// var myAge=25;
// if(myAge>=20){
//     document.write("당신은 성인입니다.");
// }


// var testNum=prompt("시험점수를 입력하세요");
// if(testNum>=70){
//     document.write("합격입니다.");
// } else {
//     document.write("불합격 입니다");
// }

// var korNum=Number(prompt("국어점수를 입력하세요","0"));
// var engNum=Number(prompt("영어점수를 입력하세요","0"));
// var mathNum=Number(prompt("수학점수를 입력하세요","0"));
// var hisNum=Number(prompt("국사점수를 입력하세요","0"));

// var num=(korNum+engNum+mathNum+hisNum)/4;

// if(num>=90){
//     document.write("A학점");
// } else if(num>=80){
//     document.write("B학점");
// } else if (num>=70){
//     document.write("C학점");
// } else if(num>=60){
//     document.write("D학점");
// } else {
//     document.write("F학점");
// }

// ↑ 260P


var age=Number(prompt("나이를 입력하세요"));
var map=(prompt("사는 곳을 입력하세요"));

if(age>=20 && map=="김포"){
    document.write("우수고객");
} else{
    document.write("비고객");
}