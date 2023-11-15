// 명단에 '홍'으로 시작하는 학생이 한 명이라도 있는지 확인하는 코드를 작성하세요.
// 홍이라는 특정 문자로 시작하는지 확인 = startsWith()
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

const hasHongStudent = studentList.some((student) => student.startsWith("홍"));
console.log(hasHongStudent);