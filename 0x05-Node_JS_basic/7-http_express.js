const express = require('express');
const fs = require('fs');

const dbColumns = 4;

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const studentsArray = data.split('\n');
        const stdArrayLength = studentsArray.length;
        const arrayIndex = studentsArray[stdArrayLength - 1];
        const numOfStudents = arrayIndex ? stdArrayLength - 1 : stdArrayLength - 2;
        const studentList = ['This is the list of our students'];
        studentList.push(`Number of students: ${numOfStudents}`);
        const courseDict = {};
        studentsArray.slice(1, stdArrayLength).forEach((student) => {
          if (student) {
            const studentsArray = student.split(',');
            if (courseDict[studentsArray[dbColumns - 1]]) {
              courseDict[studentsArray[dbColumns - 1]].push(studentsArray[0]);
            } else {
              courseDict[studentsArray[dbColumns - 1]] = [studentsArray[0]];
            }
          }
        });
        for (const course in courseDict) {
          if (course) {
            studentList.push(`Number of students in ${course}: ${courseDict[course].length}. List: ${courseDict[course].join(', ')}`);
          }
        }
        resolve(studentList);
      }
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  try {
    const lists = await countStudents(process.argv[2]);
    let output = '';
    lists.forEach((str, idx) => {
      const strs = idx > 0 ? `\n${str}` : str;
      output += strs;
    });
    res.send(output);
  } catch (err) {
    res.send('Cannot load the database');
  }
});
app.listen(1245, () => {});
module.exports = app;
