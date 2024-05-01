const fs = require('fs');

const dbColumns = 4;

module.exports = function countStudents(filePath) {
  try {
    const vals = fs.readFileSync(filePath, { encoding: 'utf8' });
    const studentsArray = vals.split('\n');
    const arrLength = studentsArray.length;
    const numOfStudents = studentsArray[arrLength - 1] ? arrLength - 1 : arrLength - 2;
    console.log(`Number of students: ${numOfStudents}`);
    const courseDict = {};
    studentsArray.slice(1, arrLength).forEach((student) => {
      if (student) {
        const studentArr = student.split(',');
        if (courseDict[studentArr[dbColumns - 1]]) {
          courseDict[studentArr[dbColumns - 1]].push(studentArr[0]);
        } else {
          courseDict[studentArr[dbColumns - 1]] = [studentArr[0]];
        }
      }
    });
    for (const course in courseDict) {
      if (course) {
        console.log(`Number of students in ${course}: ${courseDict[course].length}. List: ${courseDict[course].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
