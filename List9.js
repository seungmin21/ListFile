// 모든 학생의 이름 앞에 '학생_'을 붙여 새로운 형식으로 명단을 만드는 코드를 작성하세요.
// 모든 학생 주어진 조건을 호출해서 새로운 배열반환 = map, ``

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

const newStudentList = studentList.map((name) => `학생_${name}`);

console.log(newStudentList);