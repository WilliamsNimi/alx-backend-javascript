interface Teacher {
readonly firstName: string;
readonly lastName: string;
fullTimeEmployee: boolean;
yearsOfExperience?: number;
location: string;
[propName: string]: any;
}

const teacher3: Teacher = {
firstName: 'John',
fullTimeEmployee: false,
lastName: 'Doe',
location: 'London',
contract: false,
};

console.log(teacher3);

interface Directors extends Teacher{
numberOfReports: number;
}

const director1: Directors = {
firstName: 'John',
lastName: 'Doe',
location: 'London',
fullTimeEmployee: true,
numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction{
(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => `${firstName[0]}, ${lastName}`;
console.log(printTeacher("John", "Doe"));

interface student{
firstName: string;
lastName: string;
workOnHomework: () => string;
displayName: () => string;
}

class StudentClass implements student{
firstName: string;
lastName: string;
constructor(firstName: string, lastName: string){
this.firstName = firstName;
this.lastName = lastName;
}

workOnHomework(){
return "Currently working";
}

displayName(){
return this.firstName;
}
}