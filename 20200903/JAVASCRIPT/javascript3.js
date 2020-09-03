// var drink = prompt("가격 조회를 원하는 음료수를 입력하세요. (콜라, 사이다, 커피 中 택 1","");

// //switch 조건문

// switch (drink)
// {
//     case "콜라":
//         document.write("800원");
//         break;
//     case "사이다":
//         document.write("900원");
//         break;
//     case "커피":
//         document.write("700원");
//         break;
//     default : 
//     document.write("잘못된 단어 입력");
// }




// var myArea=prompt("지역을 입력하세요","서울");
// switch(myArea){
//     case "서울":
//         areaNum="02";
//         break;
//     case "경기":
//         areaNum="031";
//         break;    
//     case "부산":
//         areaNum="051";
//         break;
//     default:
//         alert("등록되지 않은 지역입니다.");
// }
// document.write(myArea+"지역번호는"+areaNum);


// num1>=num2 ? alert("참일 경우") : alert("거짓인 경우");


// var number=Number(prompt("숫자를 입력하세요"));
// number%2==0 ? document.write ("짝수입니다"): document.write("홀수 입니다");



var num = (prompt("숫자를 입력하세요", "숫자"));
var number = num % 2;

switch(number){
    case (1):
        document.write("홀수입니다.");
        break;
    default :
        document.write("짝수입니다");
        break;
            
}

// 홀짝 구하는 switch문

var input = prompt('숫자를 입력하세요','숫자');
var number=input%2;
if(number<1){
    alert('짝수입니다.');
}else{
    alert('홀수입니다.');
}

// 홀짝 구하는 if 문