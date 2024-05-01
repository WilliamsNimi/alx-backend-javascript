const http = require('http');
const fs = require('fs');

const db_columns = 4;

function countStudents(file_path) {
  return new Promise((resolve, reject) => {
    fs.readFile(file_path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students_array = data.split('\n');
        const std_array_length = students_array.length;
        const num_of_students = students_array[std_array_length - 1] ? std_array_length - 1 : std_array_length - 2;
        const student_list = ['This is the list of our students'];
        student_list.push(`Number of students: ${num_of_students}`);
        const course_dict = {};
        students_array.slice(1, std_array_length).forEach((student) => {
          if (student) {
            const students_array = student.split(',');
            if (course_dict[students_array[db_columns - 1]]) {
              course_dict[students_array[db_columns - 1]].push(students_array[0]);
            } else {
              course_dict[students_array[db_columns - 1]] = [students_array[0]];
            }
          }
        });
        for (const dept in course_dict) {
          if (dept) {
            student_list.push(`Number of students in ${dept}: ${deptDict[dept].length}. List: ${deptDict[dept].join(', ')}`);
          }
        }
        resolve(student_list);
      }
    });
  });
}


const app = http.createServer((req, res) => {
  res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
	res.write('Hello Holberton School!');}
    else if (req.url === '/students'){
	try {
	    const listsArr = await countStudents(process.argv[2]);
	    listsArr.forEach((str, idx) => {
		const strAug = idx > 0 ? `\n${str}` : str;
		res.write(strAug);
	    });
	} catch (err) {
	    res.write('Cannot load the database');
	}
	res.end();
    }
  res.end();
}).listen(1245);

module.exports = app;
