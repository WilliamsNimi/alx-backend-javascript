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
        for (const course in course_dict) {
          if (course) {
            student_list.push(`Number of students in ${course}: ${course_dict[course].length}. List: ${course_dict[course].join(', ')}`);
          }
        }
        resolve(student_list);
      }
    });
  });
}
