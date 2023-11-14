// 명단에서 이름에 '승'을 포함하는 모든 학생들의 이름을 찾아 새로운 명단을 만드는 코드를 작성하세요.
// 새로운 명단 = 새 배열 = filter
// 배열에서 승 요소를 포함하는 학생들 이름 찾기 = includes
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

  const newStudentList = studentList.filter(student => student.includes("승"));
  console.log(newStudentList);