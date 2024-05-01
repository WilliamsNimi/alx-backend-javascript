const fileSystem = require('node:fs');

module.exports = function countStudents(filePath) {
  try {
    const data = fileSystem.readFileSync(filePath, 'utf8');
    data_list = data.toString().split('\n');
    const f_names_course = [];
    const first_names = [];
    const courses = [];
    const dict = {};
    no_of_students = data.toString().split('\n').length - 1;
    console.log(`Number of students: ${no_of_students}\n`);
    for (let i = 1; i <= no_of_students; i++) {
	    row = data_list[i].split(',');
	    f_names_course.push([row[0], row[3]]);
	    first_names.push(row[0]);
	    courses.push(row[3]);
    }
    const fields = new Set(courses);
    const fields_list = [...fields];
    for (let i = 0; i < courses.length; i++) {
	    for (j = 0; j < fields_list.length; j++) {
        if (fields_list[j] in dict) {
		    for (const key in dict) {
            if (fields_list[j] === key) {
			    dict[fields_list[j]].push(first_names[i]);
            }
		    }
        } else {
		    dict[fields_list[j]] = [];
		    dict[fields_list[j]].push(first_names[i]);
        }
	    }
    }
    console.log(first_names);
    console.log(courses);
    console.log(fields);
    console.log(dict);
  } catch (err) {
    console.error('Cannot load the database');
  }
};
