interface Student {
firstName: string;
lastName: string;
age: number;
location: string;
}

const student1: Student = {
firstName: "Nimi",
lastName: "Williams",
age: 28,
location: "Nigeria"
};

const student2: Student = {
firstName: "Williams",
lastName: "Nimi",
age: 35,
location: "France"
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');
const title = document.createElement('thead');
const titleContent = document.createElement('tr');
const body = document.createElement('tbody');
titleContent.insertAdjacentHTML('beforeend', '<td>Name</td>');
titleContent.insertAdjacentHTML('beforeend', '<td>Name</td>');
title.insertAdjacentElement('beforeend', titleContent);

for (const student of studentsList) {
const bodyContent = document.createElement('tr');
bodyContent.insertAdjacentHTML('beforeend', '<td>${student.firstName}</td>');
bodyContent.insertAdjacentHTML('beforeend', '<td>${student.lastName}</td>');
body.insertAdjacentElement('beforeend', bodyContent);
}
table.insertAdjacentElement('beforeend', title);
table.insertAdjacentElement('beforeend', body);