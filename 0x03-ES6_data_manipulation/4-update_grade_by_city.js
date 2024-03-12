export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((stud) => {
    const filterGrades = newGrades.filter((grade) => grade.studentId === stud.id)[0];
    const grade = filterGrades ? filterGrades.grade : 'N/A';
    return {
      ...stud,
      grade,
    };
  });
}
