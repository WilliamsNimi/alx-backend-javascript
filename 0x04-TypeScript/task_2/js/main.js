"use strict";
exports.__esModule = true;
exports.executeWork = exports.isDirector = exports.createEmployee = exports.Teacher = exports.Director = void 0;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
exports.Director = Director;
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
exports.Teacher = Teacher;
function createEmployee(salary) {
    if (typeof salary === 'number') {
        if (salary < 500) {
            return new Teacher();
        }
        else {
            return new Director();
        }
    }
}
exports.createEmployee = createEmployee;
console.log(createEmployee(200).toString());
console.log(createEmployee(1000).toString());
console.log(createEmployee('$500').toString());
function isDirector(employee) {
    if (employee === 'Director') {
        return true;
    }
    return false;
}
exports.isDirector = isDirector;
function executeWork(employee) {
    if (isDirector(employee)) {
        employee.workDirectorTasks();
    }
    else {
        employee.workTeacherTasks;
    }
}
exports.executeWork = executeWork;
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
