// 명단 중 세 번째 학생이 전학을 갔고, 새 학생이 그 자리에 왔습니다. 기존 학생을 제거하고 새 학생을 추가하는 코드를 작성하세요.
// 세 번째 학생 전학 List[2]
// 새 학생이 그 자리(세 번째 자리)에 왔고 기존 학생을 제거 = splice
// 1은 제거 0은 추가


const studentList = [
  "a",
  "b",
  "c",
  "d",
  "e",
];

// const removed = studentList.splice(2, 1, 'f)
// ['f']
studentList.splice(2, 1, 'f')
console.log(studentList)