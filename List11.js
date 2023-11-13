// 모든 학생들의 이름의 길이가 세 글자인지 확인하는 코드
// 모든 학생 = 모든 요소
// 이름 길이 세 글자 = 주어진 테스트 함수
const studentList = [
    "김우진",
    "김현",
    "방승희",
    "변호녕",
    "소사무엘",
    "송영준",
    "신동현",
    "오승민",
    "유승민",
    "윤준현",
    "이민구",
    "이유안",
    "이은정",
    "정영식",
    "최성민",
    "최은철",
    "홍문기"
  ];

const allStudentsHaveThreeLetterNames = studentList.every((name) => name.length === 3);

console.log(allStudentsHaveThreeLetterNames); // false